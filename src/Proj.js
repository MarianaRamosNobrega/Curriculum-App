import { Formik } from 'formik';
import React from 'react';



const ProjForm = () => {
    const handleSubmitting = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.info(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };
    

    return (
        

        <Formik initialValues={{ nome: '', desc: ''}} onSubmit={handleSubmitting}>
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                            <input type="text" name="nome" value={values.nome}
                            onChange={handleChange} />
                    </label>
        <br/>
                    <label>
                        Descrição:
                            <input type="text" name="nome" value={values.desc}
                            onChange={handleChange} />
                    </label>
         <br/>
        
                    <input type="submit" value="Login" disabled={isSubmitting} />
                </form>
            )}
        </Formik>
    );
}

export default ProjForm;

