import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const {keycloak: login , authenticated } = useKeycloak(); // compartilha apenas a logica entre os componentes
    const navigate = useNavigate(); // permite que trabalhamos com rotas

    function authenticate (){
        login();
    }
    useEffect(() => {
        if(authenticated) navigate('/home');
    }, {authenticated})

    return(
        <div className="mg-60 h-12 flex justify-center">
            { authenticated ? 'Usuário autenticado' : "Não autenticado"}
            <button 
                onClick={authenticate}
                className="w-96 h-12 bg-green-600 text-white rounded-lg hover:bg-green-800">
                Entrar
            </button>
        </div>
        
    )
}
export default Login;