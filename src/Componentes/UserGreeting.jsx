// UserGreeting.js
function Saludo(props) {
  return <h2>Hola, {props.nombre}!</h2>;
}

function UserGreeting() {
  return (
    <div>
      <Saludo nombre="Meybeline" />
    </div>
  );
}

export default UserGreeting;
