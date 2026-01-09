function Footer() {

  // obtenemos el año actual usando JavaScript
  const year = new Date().getFullYear();

  return (
    <footer>

      {/* mostramos el año */}
      <p>{year}</p>

   
      <p>Aplicación creada con React</p>

    </footer>
  );
}

export default Footer;
