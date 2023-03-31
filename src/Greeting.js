export function Greeting({ title, name = "José" }) {
  console.log(title + name);
  return <h1> {title + name} </h1>;
}

export function UserCard(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p> $ {props.amount} </p>
      <p>{props.married ? "Está casado" : "No está casado"} </p>
      <ul>
        <li>City: {props.address.city} </li>
        <li>Street: {props.address.street} </li>
      </ul>
    </div>
  );
}
