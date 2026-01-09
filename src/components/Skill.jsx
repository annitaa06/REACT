// este componente solo muestra una habilidad
// sirve para reutilizarlo muchas veces

function Skill(props) {

  // devuelve un li con el texto recibido
  return <li>{props.text}</li>;
}

export default Skill;
