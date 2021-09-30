import React from 'react';
import{Link} from "react-router-dom";

function NavBar(){
    return(
        <ul>
        <li>
        <Link to="/Aluno">Clique Aqui pra entrar no formulario de Aluno</Link>
        </li>
        <li>
        <Link to="/Prof">Clique Aqui pra entrar no formulario de Professor</Link>
        </li>
        </ul>
    
    );
    
}

export default NavBar;