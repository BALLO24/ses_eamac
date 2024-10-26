import { Link } from "react-router-dom";
import logo_eamac from '/EAMAC.jpg';
import { useState } from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as  Yup from 'yup';
import axios from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login()
{   
    const navigate=useNavigate()
    const [openRegisterList,setOpenRegisterList]=useState(false);
    const initialValues = {
        email: "",
        mdp: "",
    }

    const validationSchema=Yup.object().shape({
        email: Yup.string().required("L'adresse email est obligaoire").email("Veuillez choisir une adresse mail valide"),
        mdp: Yup.string().required("Ce champ est obligatoire").min(3,"Mot de passe très court"),
    })
    const handleSubmit=(values)=>{
        axios.post("/login",values)
        .then(res=>{
            
            let id_user=res.data.user.id_utilisateur;
            let token=res.data.token
            // il faudra gerer après le cas ou le user n'existe pas dans la db

            switch(res.data.user.role){
                
                case "eleve":
                    axios.post("/findClasse",{id_user})
                    .then(res2=>{
                        let id_classe=res2.data
                        let studentInfo={...res.data,id_classe}
                        localStorage.setItem("token",token);
                        console.log(token);
                        
                        
                        navigate("/student-board",{state:{user:studentInfo}})
                    })

                break;
                case "stagiaire":
                    navigate("/stagiaire-board",{state:{user:res.data.user}});
                break;
                default:
                    navigate("/teacher-board",{state:{user:res.data}});
            }
          
        })
        .catch(err=>{
            console.log(err);
                
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Une erreur est survenue lors de votre inscription. Veuillez réesayer ultérieurement. Merci !",
              });

        })
    }
   
    return(
        <section className="bg-gray-300 dark:bg-gray-900">
           <div className='flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 '>
                    <div className='flex justify-center items-center mt-0 sm:mt-4'>
                        <img src={logo_eamac} alt="logo EAMAC"className='block h-20 w-auto' />
                    </div>
                    <div className='p-6 space-y-4 md:space-y-4 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Connectez-vous à votre compte</h1>
                        <Formik 
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {
                                (formik)=>(
                                    <Form className='space-y-4 md:space-y-4' action="#" onSubmit={formik.handleSubmit}>
                                        <div>
                                            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Email</label>
                                            <Field type="email" name="email" id="email" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Veuillez saisir votre Email'></Field>
                                            <ErrorMessage name="email" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                        <div>
                                            <label htmlFor="mdp" className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Mot de passe</label>
                                            <Field type="password" name="mdp" id="mdp" className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Veuillez saisir votre mot de passe'></Field>
                                            <ErrorMessage name="mdp" className="text-red-500" component="span"></ErrorMessage>
                                        </div>
                                    <div className='flex justify-center items-center'>
                                        <button type="submit" className="text-white block w-60 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Se connecter</button>
                                    </div>
                                    <div className="relative">
                                        {/* <Link to="/registration" className='text-md font-medium text-blue-700'>Inscription</Link><br /> */}
                                        <button id="dropdownButton"data-dropdown-toggle="dropdown" type="button" onClick={()=>setOpenRegisterList(!openRegisterList)}>Inscription</button>
                                        {
                                            openRegisterList &&
                                            <div id="dropdown" className=" bg-zinc-200 p-2 rounded-lg z-10 absolute left-20">
                                            <ul aria-labelledby="dropdownButton" className="font-medium">
                                                <li>
                                                    <Link to="/student-registration">Eleve</Link>
                                                </li>
                                               
                                                <li>
                                                    <Link to="/stagiaire-registration">Stagiaire</Link>
                                                </li>
                                                <li>
                                                    <Link to="/teacher-registration">Professeur</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        }
                                        <br />
                                        <Link to="/reset_password" className='text-md font-medium text-blue-700 w-6'>Mot de passe oublié ?</Link><br />
                                        <Link to="/need_help" className='text-md font-medium text-blue-700'>Besoin d&rsquo;aide ?</Link>
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