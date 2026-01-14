import { useState } from "react"; // ESTADOS
// importamos los componentes
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App(){
{/* 
        showSkills: valor actual del estado.
        setShowSkills: función para cambiar el estado.
        false: valor inicial.
 */}

    const [showSkills, setShowSkills] = useState(false);

  // array de habilidades
  const skills = ["HTML", "CSS", "JavaScript", "React"];
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
        <Contact
            email="anna@gmail.com"
            phone="600 123 456"
            show={true} // true = se muestra
        />


<h2>Habilidades</h2>

      {/* botón para mostrar/ocultar la lista */}
      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>

      {/*skills array de habilidades
      .map(...) → recorre cada elemento del array
      (skill) => <Skill key={skill} text={skill} /> →
       para cada habilidad (skill):
      Crea un <Skill> con text={skill} (el nombre de la habilidad).
      key={skill} → le da una clave única para que React sepa cuál es cada elemento y pueda actualizarlo.
      */ }
      {showSkills && (
        <ul>
          {skills.map((skill) => (
            <Skill key={skill} text={skill} />
          ))}
        </ul>
      )}

      {/* usamos el footer */}
      <Footer />
  
    </div>
  );
}

export default App;