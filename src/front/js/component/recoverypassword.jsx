

export const RecoveryPassword = () => {

    return (
        <div>
            <form id="reset-password-form">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}