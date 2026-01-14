
export default function Contact({ email, phone, show }) {
    return (
        <>
            {/* renderizado condicional: solo se muestra si show es true */}
            {show && (
                <div>
                    <h3>Contacto</h3>
                    <p>Email: {email}</p>
                    <p>Teléfono: {phone}</p>
                </div>
            )}
        </>
    );
}
