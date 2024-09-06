import { Link } from "react-router-dom"
import logo_eamac from '/EAMAC.jpg';

export default function ResetPassword(){
    return(
        <section className="bg-gray-300 dark:bg-gray-900">
        <div className='flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0'>
             <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 '>
                 <div className='flex justify-center items-center mt-4'>
                     <img src={logo_eamac} alt="logo EAMAC"className='block h-20 w-auto' />
                 </div>
                 <div className='p-6 space-y-4 md:space-y-4 sm:p-8'>
                     <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Connectez-vous à votre compte</h1>
                     <form className='space-y-4 md:space-y-4' action="#">
                         <div>
                             <label htmlFor="email"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Email</label>
                             <input type="email" name='email'id='email'className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre mail' />
                         </div>
                         <div>
                             <label htmlFor="categories"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Categorie</label>
                             <select name="categories" id=""className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                 <option selected>Choisir une catégorie---</option>
                                 <option value="professeur">Professeur</option>
                                 <option value="eleve">Eleve</option>
                                 <option value="stagiaire">Stagiaire</option>
                             </select>
                         </div>
                         <div className='flex justify-center items-center'>
                             <button type="submit" class="text-white block w-60 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Changer votre mot de passe</button>
                         </div>
                         <div>
                             <Link to="/" className='text-md font-medium text-blue-700'>Se connecter</Link>
                         </div>
                     </form>
                 </div>
             </div>
        </div>
     </section>

    )
}