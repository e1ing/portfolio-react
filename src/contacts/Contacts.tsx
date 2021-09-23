import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
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
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <div className={style.contactsArea}>

                    <div className={style.contactInfo}>
                        <div className={style.infoItem}>
                            <div className={style.icon}>
                                <span className={style.iconMap}></span>
                            </div>
                            <div className={style.infoContent}>
                                <h6>Address</h6>
                                <h5>21 Jumpe Street</h5>
                            </div>
                        </div>
                        <div className={style.infoItem}>
                            <div className={style.icon}>
                                <span className={style.iconPhone}></span>
                            </div>
                            <div className={style.infoContent}>
                                <h6>Phone</h6>
                                <h5>+2000323232</h5>
                            </div>
                        </div>
                        <div className={style.infoItem}>
                            <div className={style.icon}>
                                <span className={style.iconEmail}></span>
                            </div>
                            <div className={style.infoContent}>
                                <h6>E-mail</h6>
                                <h5>elvira.kisling@gmail.com</h5>
                            </div>
                        </div>
                        <div className={style.socialIcons}>
                            <span><i className={style.gitHub}/></span>
                            <span><i className={style.codewars}/></span>
                            <span><i className={style.linkedin}/></span>
                            <span><i className={style.telegram}/></span>
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit} >
                        <input  {...formik.getFieldProps("name")}/>
                        <input type="email" {...formik.getFieldProps("email")}/>
                        <textarea {...formik.getFieldProps("message")}/>
                    </form>

                </div>
                <button type="submit" className={style.submitBtn}>Send message</button>
            </div>
        </div>
    )
}


