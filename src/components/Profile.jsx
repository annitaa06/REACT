//este componente recibe datos desde app.jsx

function Profile(props){
    return(
        <section>
            <p>nombre:{props.name}</p>
            <p>Edad: {props.age}</p>
        <p>Profesion: {props.profession}</p>
        </section>
    )
}
export default Profile;