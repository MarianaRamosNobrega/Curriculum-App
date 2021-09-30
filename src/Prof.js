import { Formik } from 'formik';
import React from 'react';
import ProjForm from "./Proj";
import NavBarJ from "./Proj";
import{ Route, Link} from "react-router-dom";


const ProfForm = () => {
    const handleSubmitting = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.info(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };
    

    return (
        

        <Formik initialValues={{ nome: '', idade: '', cpf: '', matricula:'',curso:'', endereco:'',
        numero:'',complemento:'',bairro:'',cidade:'', estado:'', cep: '', act:'',form:'', nomep:'', descp:'', naluno:'', vinc:''}} onSubmit={handleSubmitting}>
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
        
        
        <h2>Form Professor></h2>
                    <label>
                        Nome:
                            <input type="text" name="nome" value={values.nome}
                            onChange={handleChange} />
                    </label>
        <br/>
                    <label>
                        Idade:
                            <input type="number" name="idade" value={values.idade}
                            onChange={handleChange} />
                    </label>
         <br/>
        <label>
                        CPF:
                            <input type="number" name="cpf" value={values.cpf}
                            onChange={handleChange} />
                    </label>
         <br/>
        <label>
                        Matricula:
                            <input type="number" name="matricula" value={values.matricula}
                            onChange={handleChange} />
                    </label>
         <br/>
        <label>
                        Curso:
                            <input type="text" name="curso" value={values.curso}
                            onChange={handleChange} />
                    </label>
         <br/>
           <label>
                        Endereço:
                            <input type="text" name="endereco" value={values.endereco}
                            onChange={handleChange} />
                    </label>
         <br/>
           <label>
                        Numero:
                            <input type="text" name="numero" value={values.numero}
                            onChange={handleChange} />
                    </label>
         <br/>
           <label>
                        Complemento:
                            <input type="text" name="complemento" value={values.complemento}
                            onChange={handleChange} />
                    </label>
         <br/>
           <label>
                        Bairro:
                            <input type="text" name="bairro" value={values.bairro}
                            onChange={handleChange} />
                    </label>
         <br/>
           <label>
                        Cidade:
                            <input type="text" name="cidade" value={values.cidade}
                            onChange={handleChange} />
                    </label>
         <br/>
           <label>
                        Estado:
                            <input type="text" name="estado" value={values.estado}
                            onChange={handleChange} />
                    </label>
         <br/>
        <label>
                        CEP:
                            <input type="text" name="cep" value={values.cep}
                            onChange={handleChange} />
                    </label>
        <br/>
         <label>
                        Atuação:
                            <input type="text" name="act" value={values.act}
                            onChange={handleChange} />
                    </label>
        <br/>
         <label>
                        Formação:
                            <input type="text" name="cep" value={values.form}
                            onChange={handleChange} />
                    </label>
          <br/>
        
        <h2>Form Projeto></h2>
        
        <label>
                        Nome:
                            <input type="text" name="nomep" value={values.nomep}
                            onChange={handleChange} />
                    </label>
        <br/>
         <label>
                        Descrição:
                            <input type="text" name="descp" value={values.descp}
                            onChange={handleChange} />
                    </label>
          <br/>
        
        <h2>Vinculação de alunos ></h2>
        
         <label>
                       Nome Aluno:
                            <input type="text" name="naluno" value={values.naluno}
                            onChange={handleChange} />
                    </label>
        <br/>
         <label>
                        Papel:
                            <input type="text" name="vinc" value={values.vinc}
                            onChange={handleChange} />
                    </label>
          <br/>
        <input type="submit" value="Login" disabled={isSubmitting} />
                </form>
            )}
        </Formik>
    );
}

export default ProfForm;

