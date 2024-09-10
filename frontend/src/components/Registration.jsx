import { Link } from "react-router-dom"
import logo_eamac from '/EAMAC.jpg';
import * as  Yup from 'yup';
import { dataStudents } from "../data";
import { Form,Field,ErrorMessage, Formik} from "formik";
import axios from "../../config/axios";

export default function Registration(){
   
    const validationSchema=Yup.object().shape({
        nom:Yup.string().required('Le nom est obligatoire'),
        prenom:Yup.string().required('Le prenom est obligatoire'),
        email:Yup.string().required("L'adresse email est obligaoire").email("Veuillez choisir une adresse mail valide"),
        promotion:Yup.string("").required("Ce champ est obligatoire"),
    })

    const initialValues={
        nom:"",
        prenom:"",
        email:"",
        promotion:"",
    }
    const handleSubmit=(values)=>{
        axios.post('/insert',values)
        .then(res => console.log(res))
        .catch((err)=>console.log(err)
        )
        
  }
    
    return(
        <section className="bg-gray-300 dark:bg-gray-900">
           <div className='flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 '>
                    <div className='flex justify-center items-center mt-4'>
                        <img src={logo_eamac} alt="logo EAMAC"className='block h-20 w-auto' />
                    </div>
                    
                    <div className='p-6 space-y-4 md:space-y-2 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white'>Inscrivez-vous sur SES</h1>
                       <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                       >
                            {
                                (formik)=>(
                                    <Form className='space-y-4 md:space-y-2' action="#" onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label htmlFor="nom"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Nom</label>
                                        <Field type="text" name="nom" id="nom"className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre Nom'></Field>
                                        <ErrorMessage name="nom" className="text-red-500" component="span"></ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Prenom</label>
                                        <Field type="text" name="prenom" id="prenom"className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre Nom'></Field>
                                        <ErrorMessage name="prenom" className="text-red-500" component="span"></ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor="email"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Email</label>
                                        <Field type="email" name="email" id="email"className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre Nom'></Field>
                                        <ErrorMessage name="email" className="text-red-500" component="span"></ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor="promotion"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Promotion</label>
                                        <Field as="select" name="promotion" id="groupe"className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                            <option value="" selected>Choisir une promotion ---</option>
                                            {dataStudents.map(option=>{ return(<option key={option.value} value={option.value}>{option.name}</option>)})}
                                        </Field>
                                        <ErrorMessage name="groupe" className="text-red-500" component="span"></ErrorMessage>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button type="submit" className="text-white block w-60 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Inscription</button>
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