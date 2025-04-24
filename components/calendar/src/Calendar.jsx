import moment from "moment";
import "moment/dist/locale/ru";
moment.locale("ru");

export default function Calendar({ date }) {
    const current = moment(date); // переданная дата
    const startOfMonth = moment(date).startOf('month'); // 1-е число месяца
    const endOfMonth = moment(date).endOf('month');     // последнее число месяца

    const startDay = startOfMonth.day(); // день недели (0 = воскресенье, 1 = понедельник и т.д.)
    const daysInMonth = current.daysInMonth(); // сколько дней в текущем месяце

    const shift = startDay === 0 ? 6 : startDay - 1;

    const days = [];

    // Предыдущие дни (из прошлого месяца)
    const prevMonth = moment(startOfMonth).subtract(1, 'month');
    const prevMonthDays = prevMonth.daysInMonth();

    for (let i = shift - 1; i >= 0; i--) {
        days.push({
            day: prevMonthDays - i,
            currentMonth: false
        });
    }

    // Дни текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            currentMonth: true,
            isToday: i === current.date()
        });
    }

    // Остаток — начало следующего месяца
    const totalCells = 35;
    const nextDays = totalCells - days.length;

    for (let i = 1; i <= nextDays; i++) {
        days.push({
            day: i,
            currentMonth: false
        });
    }
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
    }

    console.log({
        деньНедели: current.format('dddd'),
        число: current.date(),
        месяцРод: current.format('D MMMM YYYY').split(' ')[1],
        месяцИм: current.format('MMMM'),
        год: current.year()
      });

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{current.format("dddd")}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{current.date()}</div>
                    <div className="ui-datepicker-material-month">{current.format('D MMMM YYYY').split(' ')[1]}</div>
                    <div className="ui-datepicker-material-year">{current.format("YYYY")}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{current.format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{current.format("YYYY")}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                {weeks.map((week, i) => (
                    <tr key={i}>
                    {week.map((day, j) => {
                        let className = '';
                        if (!day.currentMonth) className = 'ui-datepicker-other-month';
                        if (day.isToday) className = 'ui-datepicker-today';

                        return <td key={j} className={className}>{day.day}</td>;
                    })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
