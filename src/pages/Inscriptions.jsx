import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import defaultValues from '../../utils/defaultValues';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './pageStyles/inscriptionStyle.css';
import io from 'socket.io-client'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Inscriptions = () => {
    const { id } = useParams();
    const formRef = useRef();

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const [infoEvent, setInfoEvent] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/${id}`;

        axios
            .get(url)
            .then((res) => setInfoEvent(res.data))
            .catch((err) => console.log(err));
    }, []);

    const socket = io('https://king-prawn-app-hankr.ondigitalocean.app')

    const submit = (data) => {
        const { RutPlayer1, RutPlayer2, discountCoupon } = data;

        // Función para validar el RUT

        if (
            [
                infoEvent?.event.rutPlayerLocked1,
                infoEvent?.event.rutPlayerLocked2,
                infoEvent?.event.rutPlayerLocked3,
                infoEvent?.event.rutPlayerLocked4,
                infoEvent?.event.rutPlayerLocked5,
            ].includes(RutPlayer1) ||
            [
                infoEvent?.event.rutPlayerLocked1,
                infoEvent?.event.rutPlayerLocked2,
                infoEvent?.event.rutPlayerLocked3,
                infoEvent?.event.rutPlayerLocked4,
                infoEvent?.event.rutPlayerLocked5,
            ].includes(RutPlayer2)
        ) {
            alert('Uno de los ruts ingresados está bloqueado. No se puede proceder con la suscripción.');
            return;
        }

        const validCoupon = () => {
            const usedCoupons = infoEvent?.event.inscriptions
                .map(inscription => inscription.discountCoupon)
                .filter(coupon => coupon !== '')

            if (usedCoupons && usedCoupons.includes(discountCoupon)) {
                alert('Cupón de descuento ya ha sido utilizado por este usuario');
                setnoPay('00000000'); // Reemplaza '00000000' con el valor deseado para noPay
                return false;
            } else {
                return true;
            }
        };

        const isValidCoupon = validCoupon();

        if (!isValidCoupon) {
            return;
        }

        const validNopay = () => {
            const url = `${import.meta.env.VITE_URL_API}/api/v1/inscription/${id}`;
            emailJsNotificaion()
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res.data);
                    toast.success('Registro exitoso');
                    window.location.reload();
                })
                .catch((err) => console.log(err));

            reset(defaultValues);
        }

        const createOrder = () => {
            const url = `${import.meta.env.VITE_URL_API}/api/v1/event/${id}/createOrder`;

            const requestData = {
                ...data,
                couponCode: discountCoupon,
            };

            axios
                .post(url, requestData)
                .then((res) => {
                    console.log(res.data);
                    res.data.free === 240529815613 ? validNopay() : ''
                    window.open(res.data.preferenceId.body.init_point, '_blank');
                })
                .catch((err) => console.log(err));

            setButtonDisabled(true)
        };

        createOrder();
        const emailJsNotificaion = () => {
            emailjs.init('z1GpRuktFvST8rLqT');

            emailjs
                .sendForm('service_5k8i97v', 'template_ew1c2bo', formRef.current, 'z1GpRuktFvST8rLqT')
                .then((response) => {
                    console.log('Email enviado correctamente', response);
                })
                .catch((error) => {
                    console.error('Error al enviar el correo electrónico', error);
                });

        }

        socket.on('validPay', (alldata) => {
            if (alldata.data === 'approved') {
                emailJsNotificaion();

                const url = `${import.meta.env.VITE_URL_API}/api/v1/inscription/${id}`;
                axios
                    .post(url, data)
                    .then((res) => {
                        console.log(res.data);
                        toast.success('Registro exitoso'); // Mostrar notificación de éxito
                        setButtonDisabled(false);
                        window.location.reload();
                    })
                    .catch((err) => console.log(err));
            }
            socket.off('validPay');
        });

    };


    const clickInformation = () => {
        navigate(`/rulesEvent/${infoEvent?.event.id}`);
    };

    const damasA = infoEvent?.event.damasA === 'yes';
    const damasB = infoEvent?.event.damasB === 'yes';
    const damasC = infoEvent?.event.damasC === 'yes';
    const damasD = infoEvent?.event.damasD === 'yes';
    const maculina1ra = infoEvent?.event.maculina1ra === 'yes';
    const maculina2da = infoEvent?.event.maculina2da === 'yes';
    const maculina3ra = infoEvent?.event.maculina3ra === 'yes';
    const maculina4ta = infoEvent?.event.maculina4ta === 'yes';
    const maculina5ta = infoEvent?.event.maculina5ta === 'yes';
    const maculina6ta = infoEvent?.event.maculina6ta === 'yes';
    const mixta = infoEvent?.event.mixta === 'yes';

    const allfilterRegisterCategory1 = (texto) => {
        const filterCategory1 = infoEvent && infoEvent.event && infoEvent.event.inscriptions
            ? infoEvent.event.inscriptions.filter(inscription => inscription.category1 === texto)
            : [];
        return filterCategory1.length;
    };

    const allfilterRegisterCategory2 = (texto) => {
        const filterCategory2 = infoEvent && infoEvent.event && infoEvent.event.inscriptions
            ? infoEvent.event.inscriptions.filter(inscription => inscription.category1 === texto)
            : [];
        return filterCategory2.length;
    };

    return (
        <div className="inscription__container">
            <div className="inscription__imgcontainer">
                <img src={infoEvent?.event.coverImg} alt="" />
                <div>
                    <h2>{infoEvent?.event.name}</h2>
                    <h3>{infoEvent?.event.subTitle}</h3>
                    <ul className="inscription__imgUl">
                        <li className="inscription__imgLi">
                            LUGAR: <p>{infoEvent?.event.place}</p>
                        </li>
                        <li className="inscription__imgLi">
                            FECHA DE INICIO : <p>{infoEvent?.event.startDateEvent}</p>
                        </li>
                        <li className='link__reglas' onClick={clickInformation}>Reglamento</li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
            <form className="inscription__form" ref={formRef} onSubmit={handleSubmit(submit)}>
                <h2>INSCRIBIRME</h2>
                <div className="register__container">
                    <div className="register__Player1">
                        <h3>Jugador 1 <i className='bx bxs-tennis-ball'></i></h3>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="name1">
                                {' '}
                                Nombre del jugador (responsable de la Pareja)
                            </label>
                            <input
                                className="inscription__input"
                                {...register('name1')}
                                type="text"
                                id="name1"
                                required
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="lastName1">
                                {' '}
                                Apellido del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('lastName1')}
                                type="text"
                                id="lastName1"
                                required
                                placeholder="Apellido"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="RutPlayer1">
                                {' '}
                                Rut del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('RutPlayer1')}
                                id="RutPlayer1"
                                required
                                minLength="10"
                                maxLength="10"
                                placeholder="Rut:12345678-1"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="email1">
                                {' '}
                                Email del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('email1')}
                                type="email"
                                id="email1"
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="mobileNumber1">
                                {' '}
                                Numero Movil del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('mobileNumber1')}
                                type="tel"
                                id="mobileNumber1"
                                required
                                placeholder="Numero movil"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="birthDate1">
                                {' '}
                                Fecha de nacimiento del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('birthDate1')}
                                type="date"
                                id="birthDate1"
                                required
                            />
                        </div>
                        <div className="inscription__checkBox">
                            <h4>Talla de polera del jugador</h4>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize1"
                                form="S"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize1')}
                                    name="poloSize1"
                                    value="S"
                                    type="radio"
                                    id="S"
                                    required
                                />
                                S{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize1"
                                form="M"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize1')}
                                    name="poloSize1"
                                    value="M"
                                    type="radio"
                                    id="M"
                                    required
                                />
                                M{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize1"
                                form="L"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize1')}
                                    name="poloSize1"
                                    value="L"
                                    type="radio"
                                    id="L"
                                    required
                                />
                                L{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize1"
                                form="XL"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize1')}
                                    name="poloSize1"
                                    value="XL"
                                    type="radio"
                                    id="XL"
                                    required
                                />
                                XL{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize1"
                                form="XXL"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize1')}
                                    name="poloSize1"
                                    value="XXL"
                                    type="radio"
                                    id="XXL"
                                    required
                                />
                                XXL
                            </label>
                        </div>
                        <div className="inscription__checkBox">
                            <h4>Categoria de Participación</h4>
                            {
                                allfilterRegisterCategory1("Damas A") < 12 ?

                                    damasA ? <label
                                        className="inscription__label-checkBox"
                                        htmlFor="category1"
                                        form="damasA"
                                    >
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category1')}
                                            type="radio"
                                            name="category1"
                                            value="Damas A"
                                            id="damasA"
                                            required
                                        />
                                        Damas A
                                    </label>
                                        : ''
                                    : ''}

                            {
                                allfilterRegisterCategory1("Damas B") < 12 ? damasB ? (
                                    <label className="inscription__label-checkBox" htmlFor="category1" form="damasB">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category1')}
                                            type="radio"
                                            name="category1"
                                            value="Damas B"
                                            id="damasB"
                                            required
                                        />
                                        Damas B
                                    </label>
                                ) : '' : ''}

                            {allfilterRegisterCategory1("Damas C") < 12 ? damasC ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="damasC">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Damas C"
                                        id="damasC"
                                        required
                                    />
                                    Damas C
                                </label>
                            ) : '' : ''}

                            {allfilterRegisterCategory1("Damas D") < 12 ? damasD ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="damasD">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Damas D"
                                        id="damasD"
                                        required
                                    />
                                    Damas D
                                </label>
                            ) : '' : ''
                            }
                            {allfilterRegisterCategory1("Masculina 1ra") < 12 ? maculina1ra ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="maculina1ra">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Masculina 1ra"
                                        id="maculina1ra"
                                        required
                                    />
                                    Masculina 1ra
                                </label>
                            ) : '' : ""
                            }
                            {allfilterRegisterCategory1("Masculina 2da") < 12 ? maculina2da ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="maculina2da">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Masculina 2da"
                                        id="maculina2da"
                                        required
                                    />
                                    Masculina 2da
                                </label>
                            ) : '' : ''
                            }
                            {allfilterRegisterCategory1("Masculina 3ra") < 12 ? maculina3ra ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="maculina3ra">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Masculina 3ra"
                                        id="maculina3ra"
                                        required
                                    />
                                    Masculina 3ra
                                </label>
                            ) : '' : ''}

                            {allfilterRegisterCategory1("Masculina 4ta") < 12 ? maculina4ta ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="maculina4ta">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Masculina 4ta"
                                        id="maculina4ta"
                                        required
                                    />
                                    Masculina 4ta
                                </label>
                            ) : '' : ''}

                            {allfilterRegisterCategory1("Masculina 5ta") < 12 ? maculina5ta ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="maculina5ta">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Masculina 5ta"
                                        id="maculina5ta"
                                        required
                                    />
                                    Masculina 5ta
                                </label>
                            ) : '' : ''}

                            {allfilterRegisterCategory1("Masculina 6ta") < 12 ? maculina6ta ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="maculina6ta">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Masculina 6ta"
                                        id="maculina6ta"
                                        required
                                    />
                                    Masculina 6ta
                                </label>
                            ) : '' : ''}
                            {allfilterRegisterCategory1("Mixta") < 12 ? mixta ? (
                                <label className="inscription__label-checkBox" htmlFor="category1" form="mixta">
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category1')}
                                        type="radio"
                                        name="category1"
                                        value="Mixta"
                                        id="mixta"
                                        required
                                    />
                                    Mixta
                                </label>
                            ) : '' : ''}
                        </div>
                        <div className="inscription__checkBox">
                            <h4>¿En Que Club Juegas Regularmente?:</h4>
                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay1"
                                form="Laguna "
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay1')}
                                    type="radio"
                                    name="clubPlay1"
                                    value="Laguna Padel"
                                    id="Laguna "
                                    required
                                />
                                Laguna Padel
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay1"
                                form="G2"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay1')}
                                    type="radio"
                                    name="clubPlay1"
                                    value="G2"
                                    id="G2"
                                    required
                                />
                                G2
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay1"
                                form="Bosque"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay1')}
                                    type="radio"
                                    name="clubPlay1"
                                    value="Bosque Chacarillas"
                                    id="Bosque"
                                    required
                                />
                                Bosque Chacarillas
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay1"
                                form="Multiespacio"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay1')}
                                    type="radio"
                                    name="clubPlay1"
                                    value="Multiespacio Curauma"
                                    id="Multiespacio"
                                    required
                                />
                                Multiespacio Curauma
                            </label>
                        </div>
                        <div className="inscription__checkBox">
                            <h4>¿Cual es tu perfil para Jugar?</h4>
                            <label
                                className="inscription__label-checkBox"
                                htmlFor="positionPlay1"
                                form="Derecho "
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('positionPlay1')}
                                    type="radio"
                                    name="positionPlay1"
                                    value="Derecho"
                                    id="Derecho "
                                    required
                                />
                                Derecho
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="positionPlay1"
                                form="Revéz"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('positionPlay1')}
                                    type="radio"
                                    name="positionPlay1"
                                    value="Revéz"
                                    id="Revéz"
                                    required
                                />
                                Revés
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="positionPlay1"
                                form="Ambos"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('positionPlay1')}
                                    type="radio"
                                    name="positionPlay1"
                                    value="Ambos"
                                    id="Ambos"
                                    required
                                />
                                Ambos{' '}
                            </label>
                        </div>
                        <div className="inscription__checkBox">
                            <h4>
                                ¿Tienes algún problema médico relevante para la práctica de la
                                actividad?
                            </h4>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="medicalProblem1"
                                form="no "
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('medicalProblem1')}
                                    type="radio"
                                    name="medicalProblem1"
                                    id="no "
                                    required
                                />
                                No, estoy completamente sano/a
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="medicalProblem1"
                                form="si"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('medicalProblem1')}
                                    type="radio"
                                    name="medicalProblem1"
                                    id="si"
                                    required
                                />
                                Si, pero tengo permiso médico que me permite participar
                            </label>
                        </div>
                    </div>
                    <div className="register__Player2">
                        <h3>Jugador 2 <i className='bx bxs-tennis-ball'></i></h3>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="name2">
                                {' '}
                                Nombre del jugador (responsable de la Pareja)
                            </label>
                            <input
                                className="inscription__input"
                                {...register('name2')}
                                type="text"
                                id="name2"
                                required
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="lastName2">
                                {' '}
                                Apellido del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('lastName2')}
                                type="text"
                                id="lastName2"
                                required
                                placeholder="Apellido"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="RutPlayer2">
                                {' '}
                                Rut del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('RutPlayer2')}
                                id="RutPlayer2"
                                required
                                minLength="10"
                                maxLength="10"
                                placeholder="Rut : 12345678-5"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="email2">
                                {' '}
                                Email del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('email2')}
                                type="email"
                                id="email2"
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="mobileNumber2">
                                {' '}
                                Numero Movil del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('mobileNumber2')}
                                type="tel"
                                id="mobileNumber2"
                                required
                                placeholder="Numero movil"
                            />
                        </div>
                        <div className="inscription__div1">
                            <label className="inscription__label" htmlFor="birthDate2">
                                {' '}
                                Fecha de nacimiento del jugador:
                            </label>
                            <input
                                className="inscription__input"
                                {...register('birthDate2')}
                                type="date"
                                id="birthDate2"
                                required
                            />
                        </div>
                        <div className="inscription__checkBox">
                            <h4>Talla de polera del jugador</h4>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize2"
                                form="S"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize2')}
                                    name="poloSize2"
                                    value="S"
                                    type="radio"
                                    id="S"
                                    required
                                />
                                S
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize2"
                                form="M"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize2')}
                                    name="poloSize2"
                                    value="M"
                                    type="radio"
                                    id="M"
                                    required
                                />
                                M{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize2"
                                form="L"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize2')}
                                    name="poloSize2"
                                    value="L"
                                    type="radio"
                                    id="L"
                                    required
                                />
                                L{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize2"
                                form="XL"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize2')}
                                    name="poloSize2"
                                    value="XL"
                                    type="radio"
                                    id="XL"
                                    required
                                />
                                XL{' '}
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="poloSize2"
                                form="XXL"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('poloSize2')}
                                    name="poloSize2"
                                    value="XXL"
                                    type="radio"
                                    id="XXL"
                                    required
                                />
                                XXL
                            </label>
                        </div>
                        <div className="inscription__checkBox">
                            <h4>Categoria de Participación</h4>
                            {allfilterRegisterCategory2("Damas A") < 12 ?
                                damasA ? <label
                                    className="inscription__label-checkBox"
                                    htmlFor="category2"
                                    form="damasA"
                                >
                                    <input
                                        className="inscription__input-checkBox"
                                        {...register('category2')}
                                        type="radio"
                                        name="category2"
                                        value="Damas A"
                                        id="damasA"
                                        required
                                    />
                                    Damas A
                                </label>
                                    : '' : ''}

                            {allfilterRegisterCategory2("Damas B") < 12 ?
                                damasB ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="damasB">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Damas B"
                                            id="damasB"
                                            required
                                        />
                                        Damas B
                                    </label>
                                ) : '' : ''}

                            {allfilterRegisterCategory2("Damas C") < 12 ?
                                damasC ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="damasC">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Damas C"
                                            id="damasC"
                                            required
                                        />
                                        Damas C
                                    </label>
                                ) : '' : ''}

                            {allfilterRegisterCategory2("Damas D") < 12 ?
                                damasD ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="damasD">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Damas D"
                                            id="damasD"
                                            required
                                        />
                                        Damas D
                                    </label>
                                ) : '' : ''
                            }
                            {allfilterRegisterCategory2("Masculina 1ra") < 12 ?
                                maculina1ra ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="maculina1ra">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Masculina 1ra"
                                            id="maculina1ra"
                                            required
                                        />
                                        Masculina 1ra
                                    </label>
                                ) : '' : ''
                            }
                            {allfilterRegisterCategory2("Masculina 2da") < 12 ?
                                maculina2da ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="maculina2da">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Masculina 2da"
                                            id="maculina2da"
                                            required
                                        />
                                        Masculina 2da
                                    </label>
                                ) : '' : ''
                            }
                            {allfilterRegisterCategory2("Masculina 3ra") < 12 ?
                                maculina3ra ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="maculina3ra">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Masculina 3ra"
                                            id="maculina3ra"
                                            required
                                        />
                                        Masculina 3ra
                                    </label>
                                ) : '' : ''}

                            {allfilterRegisterCategory2("Masculina 4ta") < 12 ?
                                maculina4ta ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="maculina4ta">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Masculina 4ta"
                                            id="maculina4ta"
                                            required
                                        />
                                        Masculina 4ta
                                    </label>
                                ) : '' : ''}

                            {allfilterRegisterCategory2("Masculina 5ta") < 12 ?
                                maculina5ta ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="maculina5ta">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Masculina 5ta"
                                            id="maculina5ta"
                                            required
                                        />
                                        Masculina 5ta
                                    </label>
                                ) : '' : ''}

                            {allfilterRegisterCategory2("Masculina 6ta") < 12 ?
                                maculina6ta ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="maculina6ta">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Masculina 6ta"
                                            id="maculina6ta"
                                            required
                                        />
                                        Masculina 6ta
                                    </label>
                                ) : '' : ''}
                            {allfilterRegisterCategory2("Mixta") < 12 ?
                                mixta ? (
                                    <label className="inscription__label-checkBox" htmlFor="category2" form="mixta">
                                        <input
                                            className="inscription__input-checkBox"
                                            {...register('category2')}
                                            type="radio"
                                            name="category2"
                                            value="Mixta"
                                            id="mixta"
                                            required
                                        />
                                        Mixta
                                    </label>
                                ) : '' : ''}
                        </div>
                        <div className="inscription__checkBox">
                            <h4>¿En Que Club Juegas Regularmente?:</h4>
                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay2"
                                form="Laguna "
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay2')}
                                    type="radio"
                                    name="clubPlay2"
                                    value="Laguna Padel"
                                    id="Laguna "
                                    required
                                />
                                Laguna Padel
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay2"
                                form="G2"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay2')}
                                    type="radio"
                                    name="clubPlay2"
                                    value="G2"
                                    id="G2"
                                    required
                                />
                                G2
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay2"
                                form="Bosque"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay2')}
                                    type="radio"
                                    name="clubPlay2"
                                    value="Bosque Chacarillas"
                                    id="Bosque"
                                    required
                                />
                                Bosque Chacarillas
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="clubPlay2"
                                form="Multiespacio"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('clubPlay2')}
                                    type="radio"
                                    name="clubPlay2"
                                    value="Multiespacio Curauma"
                                    id="Multiespacio"
                                    required
                                />
                                Multiespacio Curauma
                            </label>
                        </div>
                        <div className="inscription__checkBox">
                            <h4>¿Cual es tu perfil para Jugar?</h4>
                            <label
                                className="inscription__label-checkBox"
                                htmlFor="positionPlay2"
                                form="Derecho "
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('positionPlay2')}
                                    type="radio"
                                    name="positionPlay2"
                                    value="Derecho"
                                    id="Derecho "
                                    required
                                />
                                Derecho
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="positionPlay2"
                                form="Revéz"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('positionPlay2')}
                                    type="radio"
                                    name="positionPlay2"
                                    value="Revéz"
                                    id="Revéz"
                                    required
                                />
                                Revés
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="positionPlay2"
                                form="Ambos"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('positionPlay2')}
                                    type="radio"
                                    name="positionPlay2"
                                    value="Ambos"
                                    id="Ambos"
                                    required
                                />
                                Ambos{' '}
                            </label>
                        </div>
                        <div className="inscription__checkBox">
                            <h4>
                                ¿Tienes algún problema médico relevante para la práctica de la
                                actividad?
                            </h4>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="medicalProblem2"
                                form="no "
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('medicalProblem2')}
                                    type="radio"
                                    name="medicalProblem2"
                                    id="no "
                                    required
                                />
                                No, estoy completamente sano/a
                            </label>

                            <label
                                className="inscription__label-checkBox"
                                htmlFor="medicalProblem2"
                                form="si"
                            >
                                <input
                                    className="inscription__input-checkBox"
                                    {...register('medicalProblem2')}
                                    type="radio"
                                    name="medicalProblem2"
                                    id="si"
                                    required
                                />
                                Si, pero tengo permiso médico que me permite participar
                            </label>
                        </div>
                    </div>
                </div>
                <div className='conditions'>
                    <label
                        className="conditions__label"
                        htmlFor="condition1"
                        form="condition1"
                    >
                        <input
                            className="inscription__input-checkBox"
                            type="checkbox"
                            name="condition1"
                            id="condition1"
                            required
                        />
                        Autorizo a la organización de Liga de Pádel Curauma para que comparta en RRSS fotografías y/o mi nombre exclusivamente para potenciar el alcance de este u otros eventos, siempre relacionados con el Pádel.
                    </label>
                    <label
                        className="conditions__label"
                        htmlFor="condition2"
                        form="condition2"
                    >
                        <input
                            className="inscription__input-checkBox"
                            type="checkbox"
                            name="condition2"
                            id="condition2"
                            required
                        />
                        Confirmo que estoy de acuerdo con los términos del evento, y que estoy consciente de que esta pre-inscripción será válida solo con el pago de la cuota de incorporación de  <span> ${infoEvent?.event.price}</span> pesos.
                    </label>

                    <label
                        className="conditions__label"
                        htmlFor="condition3"
                        form="condition3"
                    >
                        <input
                            className="inscription__input-checkBox"
                            type="checkbox"
                            name="condition3"
                            id="condition3"
                            required
                        />
                        Declaro haber leido y estar de acuerdo con el Reglamento y su aplicación en la Liga
                    </label>
                    <div className='inscription__divAllPay'>
                        <div className='inscription__divCoupon'>
                            <label className='inscription__labelCoupon' >Cupón de Descuento</label>
                            <input className='inscription__inputCoupon' type="text" {...register('discountCoupon')} placeholder='Cupon' />

                        </div>
                        <div>

                            <button className='inscription__buttonPay' type='submit' disabled={buttonDisabled}>{buttonDisabled ? 'Pago en Proceso' : 'Realizar pago'}</button>
                        </div>
                    </div>
                    <div className='iscription__contacts'>
                        <p>tuvo problemas con la suscripcion contactanos haciendo </p>
                        <Link className='iscription__contacts-Link' to='https://api.whatsapp.com/send?phone=56987642187' target='_blank'> click aqui </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Inscriptions;
