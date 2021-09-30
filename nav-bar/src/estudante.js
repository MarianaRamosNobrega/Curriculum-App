import { Formik } from 'formik';
import React from 'react';


const FormikForm = () => {
    const handleSubmitting = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.info(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };
    

    return (
        

        <Formik initialValues={{ nome: '', idade: '', cpf: '', matricula:'',curso:'', endereco:'',
        numero:'',complemento:'',bairro:'',cidade:'', estado:'', cep: ''}} onSubmit={handleSubmitting}>
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                            <input type="text" name="nome" value={values.nome}
                            onChange={handleChange} />
                    </label>
                    <label>
                        Idade:
                            <input type="number" name="idade" value={values.idade}
                            onChange={handleChange} />
                    </label>
        <label>
                        CPF:
                            <input type="number" name="cpf" value={values.cpf}
                            onChange={handleChange} />
                    </label>
        <label>
                        Matricula:
                            <input type="number" name="matricula" value={values.matricula}
                            onChange={handleChange} />
                    </label>
        <label>
                        Curso:
                            <input type="text" name="curso" value={values.curso}
                            onChange={handleChange} />
                    </label>
           <label>
                        Endereço:
                            <input type="text" name="endereco" value={values.endereco}
                            onChange={handleChange} />
                    </label>
           <label>
                        Numero:
                            <input type="text" name="numero" value={values.numero}
                            onChange={handleChange} />
                    </label>
           <label>
                        Complemento:
                            <input type="text" name="complemento" value={values.complemento}
                            onChange={handleChange} />
                    </label>
           <label>
                        Bairro:
                            <input type="text" name="bairro" value={values.bairro}
                            onChange={handleChange} />
                    </label>
           <label>
                        Cidade:
                            <input type="text" name="cidade" value={values.cidade}
                            onChange={handleChange} />
                    </label>
           <label>
                        Estado:
                            <input type="text" name="estado" value={values.estado}
                            onChange={handleChange} />
                    </label>
        <label>
                        CEP:
                            <input type="text" name="cep" value={values.cep}
                            onChange={handleChange} />
                    </label>
                    <input type="submit" value="Login" disabled={isSubmitting} />
                </form>
            )}
        </Formik>
    );
}

export default FormikForm;
