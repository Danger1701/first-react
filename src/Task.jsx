import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi Primer Tarea</h1>
      <p className={ready ? "c-green" : "c-red"}>Tarea</p>
    </div>
  );
}
