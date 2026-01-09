// importamos los componentes
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Footer from './components/Footer';

function App(){
  return(
    <div>

      {/* usamos el componente Header */}
      <Header/>

      {/* pasamos datos al componente Profile */}
      <Profile
        name="Anna"
        age={20}
        profession="Estudiante de DAW"
      />


<h2>Habilidades</h2>

      {/* lista de habilidades 
      en el archivo skill cuando escribimos esto:
        return <li>{props.text}</li>;
        lo traduce a <li>HTML</li>
*/}
      <ul>
        <Skill text="HTML" />
        <Skill text="CSS" />
        <Skill text="JavaScript" />
        <Skill text="React" />
      </ul>

      {/* usamos el footer */}
      <Footer />

    </div>
  );
}

export default App;