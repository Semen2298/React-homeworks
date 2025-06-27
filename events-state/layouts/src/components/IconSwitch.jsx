export default function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons" onClick={onSwitch}>
      {icon}
    </span>
  );
}
