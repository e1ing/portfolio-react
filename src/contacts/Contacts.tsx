import React, {FC} from 'react';
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import {useFormik} from "formik";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faMapMarkerAlt, faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons'
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";
import axios from "axios";


type FormikErrorType = {
    name?: string
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
            if (!values.name) {
                errors.name = 'Firstname is required.';
            }
            if (!values.email) {
                errors.email = 'Valid email is required.';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.message) {
                errors.message = 'Message is required.';
            }
            return errors;
        },
        onSubmit: values => {
            console.log("Inside submit")
            axios.post("https://email-smtp-nodejs.herokuapp.com/senMessage", {
                name: formik.values.name,
                email: formik.values.email,
                message: formik.values.message,
            })
                .then(() => {
                    alert("Your message has been sent")
                })
            formik.resetForm();
        }
    });


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
                                    <p>Location</p>
                                    <p>Ukraine, Kyiv</p>
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.icon}>
                                    <span> <FontAwesomeIcon icon={faPhone}/></span>
                                </div>
                                <div className={style.infoContent}>
                                    <p>Phone</p>
                                    <p>80008889977</p>
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.icon}>
                                    <span> <FontAwesomeIcon icon={faEnvelopeOpen}/></span>
                                </div>
                                <div className={style.infoContent}>
                                    <p>E-mail</p>
                                    <p>elvira.kisling@gmail.com</p>
                                </div>
                            </div>

                        </div>
                        <div className={style.formSubmit}>
                            <form onSubmit={formik.handleSubmit} className={style.formStyle}>
                                <input
                                    placeholder="Name*"
                                    name={"name"}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />


                                <input
                                    placeholder="Email*"
                                    type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email &&
                                <div style={{color:"#a94442"}}>{formik.errors.email}</div>}
                                <textarea
                                    placeholder="Message*"
                                    name={"message"}
                                    value={formik.values.message}
                                    onChange={formik.handleChange}

                                />
                                <Button type="submit" > Send message</Button>
                            </form>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    )
}


