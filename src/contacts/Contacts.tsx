import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    message?: string
}

export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
        onSubmit: values => {
           // dispatch(loginTC(values))
            formik.resetForm();
        },
    })


    return (
        <div className ={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title text ={"Contacts"}/>

            <div>
                <div>Adress</div>
                <div>Phone</div>
                <div>E-mail</div>
            </div>



                <form onSubmit={formik.handleSubmit} className={style.contactForm} >
                    <input  {...formik.getFieldProps("name")}/>
                    <input type="email" {...formik.getFieldProps("email")}/>
                    <textarea {...formik.getFieldProps("message")}/>
                </form>
            <button type="submit" className={style.submitBtn}>Send message</button>
        </div>
        </div>
    )
}


