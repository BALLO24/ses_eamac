import { Link } from "react-router-dom"
import logo_eamac from '/EAMAC.jpg';
import * as  Yup from 'yup';
import axios from "../../config/axiosConfig";
import { dataClasses } from "../data";
import { Form, Field, ErrorMessage, Formik } from "formik";
import Swal from 'sweetalert2';
import { useState } from "react";

export default function StudentRegistration() {

    const [isDisabled,setIsDisabled]=useState(true)
    const validationSchema = Yup.object().shape({
        nom: Yup.string().required('Le nom est obligatoire'),
        prenom: Yup.string().required('Le prenom est obligatoire'),
        telephone: Yup.string().required('Le numero est obligatoire'),
        email: Yup.string().required("L'adresse email est obligaoire").email("Veuillez choisir une adresse mail valide"),
        classe: Yup.string("").required("Ce champ est obligatoire"),
    })

    const initialValues = {
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        classe: "",
    }
    const handleSubmit = (values) => {
        axios.post('/insertStudent', values)
            .then(res => {
                console.log(res);
                
                if (res.status === 200) {
                    Swal.fire({
                        title: "Parfait !",
                        text: "Votre inscription est en attente de validation par un administrateur. Vous serez informé(e) une fois l'inscription validée à travers un mail !",
                        icon: "success"
                    })
                 }
            })
            .catch((err) => 
            {
                console.log(err);
                
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Une erreur est survenue lors de votre inscription. Veuillez réesayer ultérieurement. Merci !",
                  });
            }
            )
        
    }

    return (
        <section className="bg-gray-300 dark:bg-gray-900">
            <div className='flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 '>
                    <div className='flex justify-center items-center mt-4'>
                        <img src={logo_eamac} alt="logo EAMAC" className='block h-20 w-auto' />
                    </div>
                    <div className='p-6 space-y-4 md:space-y-2 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white'>Inscrivez-vous sur SES</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {
                                (formik) => (
                                    <Form className='space-y-4 md:space-y-2' action="#" onSubmit={formik.handleSubmit}>
                                        <div>
                                            <label htmlFor="nom" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Nom</label>
                                            <Field type="text" name="nom" id="nom" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Veuillez saisir votre Nom'></Field>
                                            <ErrorMessage name="nom" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                        <div>
                                            <label htmlFor="prenom" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Prenom</label>
                                            <Field type="text" name="prenom" id="prenom" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Veuillez saisir votre Nom'></Field>
                                            <ErrorMessage name="prenom" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                        <div>
                                            <label htmlFor="telephone" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Téléphone</label>
                                            <Field type="tel" name="telephone" id="telephone" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Veuillez saisir votre Nom'></Field>
                                            <ErrorMessage name="telephone" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Email</label>
                                            <Field type="email" name="email" id="email" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Veuillez saisir votre Nom'></Field>
                                            <ErrorMessage name="email" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                        <div>
                                            <label htmlFor="classe" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Type</label>
                                            <Field as="select" name="classe" id="classe" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                                <option value="" selected>Choisir votre type ---</option>
                                                {dataClasses.map(option => { return (<option key={option.value} value={option.value}>{option.name}</option>) })}
                                            </Field>
                                            <ErrorMessage name="classe" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <button type="submit" className=" text-white flex  justify-center w-60 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                                <div>Inscription</div>
                                                {isDisabled && 
                                                <div role="status"className="ml-2">
                                                    <svg aria-hidden="true" className=" w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                }
                                            </button>
                                        </div>
                                        <div>
                                            <Link to="/" className='text-md font-medium text-blue-700'>Se connecter</Link><br />
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}