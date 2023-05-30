import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './pageStyles/contactusStyle.css'

const ContactUs = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const emailInput = form.elements.email;
        const email = emailInput.value.trim();

        if (!emailIsValid(email)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            return;
        }

        emailjs.sendForm('service_315uql6', 'template_j9ast2m', form, 'z1GpRuktFvST8rLqT')
            .then((result) => {
                console.log(result.text);
                form.reset();
                showSuccessNotification();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const emailIsValid = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const showSuccessNotification = () => {
        toast.success('¡El mensaje se ha enviado exitosamente!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
        });
    };

    return (
        <div className='contactus__container'>
            <div className='contactus__fronImg'>
                <img src="../cartel.jpg" alt="" />
            </div>
            <div className='contactus__allForm'>
                <div className='contactusform__img'>
                    <img src="../contacImg.png" alt="" />
                </div>
                <div className='contactusForm__container'>
                    <ToastContainer />
                    <form ref={formRef} onSubmit={sendEmail}>
                        <h3>Contactanos:</h3>
                        <div>
                            <label className='contactusform__label' htmlFor="name">Nombre :</label>
                            <input className='contactusform__input' type="text" name="name" id="name" required />
                        </div>
                        <div>
                            <label className='contactusform__label' htmlFor="email">Email :</label>
                            <input className='contactusform__input' type="email" name="email" id="email" required />
                        </div>
                        <div>
                            <label className='contactusform__label' htmlFor="phone">Número de teléfono :</label>
                            <input className='contactusform__input' type="tel" name="phone" id="phone" required />
                        </div>
                        <div>
                            <label className='contactusform__label' htmlFor="message">Mensaje :</label>
                            <textarea className='contactusform__textarea' name="message" id="mensaje" rows="10" cols="50" required />
                        </div>
                        <input className='contactusform__submit' type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs