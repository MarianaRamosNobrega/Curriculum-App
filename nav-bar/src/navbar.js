import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Estudante</Link>
    </li>
    <li>
      <Link to="/cats">Professor</Link>
    </li>
    <li>
      <Link to="/sheeps">Projeto</Link>
    </li>
   
  </div>
  );
}
export default navbar;