function Toolbar({ filters, selected, onSelectFilter }) {
  const btns = filters.map((filter) => {
    return (
      <button
        key={filter}
        className={selected === filter ? "active" : ""}
        onClick={() => onSelectFilter(filter)}
      >
        {filter}
      </button>
    );
  });
  return (
    <div className="toolbar">
      {btns}
    </div>
  );
}
export default Toolbar;