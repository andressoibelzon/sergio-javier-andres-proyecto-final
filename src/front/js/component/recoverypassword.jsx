import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

export const RecoveryPassword = () => {
    const [email, setEmail] = useState("");
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.recoveryPassword(email);
    };

    return (
        <div style={{ backgroundImage: 'url("https://smartwebmedia.com.mx/wp-content/uploads/2016/01/correo-electronico_SmartWebMedia.jpg")', backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="text-light container">
                <h1 className="w-50 mx-auto mb-5 ">Recupera tu contraseña</h1>
                <form onSubmit={handleSubmit} className="w-50 mx-auto">
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            id="email"
                            placeholder="Aqui Tu Email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </div>
                </form>
                <button onClick={() => navigate('/register')} className="btn btn-dark mt-3 d-block mx-auto">Volver a registro</button>
            </div>
        </div>
    );
};

