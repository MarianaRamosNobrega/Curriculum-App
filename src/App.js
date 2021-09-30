import { Formik } from 'formik';
import React from 'react';
import ProfForm from "./Prof";
import ProjForm from "./Proj";
import{ Route, Link} from "react-router-dom";
import AlunoForm from "./Aluno";
import NavBar from "./NavBar";

function App1(){
    return(
 <div className = "App">
        <NavBar />
          <Route exact path="/Aluno" component={AlunoForm} />
        <Route exact path="/Prof" component={ProfForm} />
        <Route exact path="/Proj" component={ProjForm} />
          </div>
        );
    }


export default App1;