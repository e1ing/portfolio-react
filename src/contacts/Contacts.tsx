import React, {FC} from 'react';
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import {useFormik} from "formik";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faMapMarkerAlt, faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons'
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";


type FormikErrorType = {
    email?: string
    message?: string
}
/*type ContactsPropsType = {
    id: string
}*/

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
        <div className={style.contactsBlock} id="contacts">
            <Fade>
                <div className={style.container}>
                    <Title text={"Contacts"}/>
                    <div className={style.contactsArea}>

                        <div className={style.contactInfo}>
                            <div className={style.infoItem}>
                                <div className={style.icon}>
                                    <span> <FontAwesomeIcon icon={faMapMarkerAlt}/> </span>
                                </div>
                                <div className={style.infoContent}>
                                    <h6>Address</h6>
                                    <h5>21 Jumpe Street</h5>
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.icon}>
                                    <span> <FontAwesomeIcon icon={faPhone}/></span>
                                </div>
                                <div className={style.infoContent}>
                                    <h6>Phone</h6>
                                    <h5>+2000323232</h5>
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.icon}>
                                    <span> <FontAwesomeIcon icon={faEnvelopeOpen}/></span>
                                </div>
                                <div className={style.infoContent}>
                                    <h6>E-mail</h6>
                                    <h5>elvira.kisling@gmail.com</h5>
                                </div>
                            </div>

                        </div>
                        <div className={style.formSubmit}>
                            <form onSubmit={formik.handleSubmit} className={style.formStyle}>
                                <input  {...formik.getFieldProps("name")}/>
                                <input type="email" {...formik.getFieldProps("email")}/>
                                <textarea {...formik.getFieldProps("message")}/>
                            </form>
                            <Button type="submit"> Send message</Button>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    )
}


