import { Link } from "react-router-dom"
import logo_eamac from '/EAMAC.jpg';
import { useState } from "react";

export default function Registration(){
    const dataStudents=[
        {
            'name':"IEAMAC/EI 19",
            'value':1
        },
        {
            'name':"IEAMAC/NA 19",
            'value':2
        },
        {
            'name':"IEAMAC/MTO 19",
            'value':3
        }
    ]
    const dataTrainee=[
        {
            'name':"Autocom 24",
            'value':4
        },
        {
            'name':"VSAT 24",
            'value':5
        },
        {
            'name':"Controle en route 24",
            'value':6
        },
        {
            'name':"Equipements MTO",
            'value':7
        }
    ]


    const dataTeachers=[
        {
            'name':"permanent",
            'value':8
        },
        {
            'name':"vacataire",
            'value':9
        },
        {
            'name':"resident",
            'value':10
        }
        
    ]

 

    const [categories,setCategories]=useState('');
    const [groupe,setGroupe]=useState('Promotion');
    const [data,setData]=useState(dataStudents);

    const handleCatgories=(e)=>{
        setCategories(e.target.value);
        
        if(e.target.value==='3'){
            setData(dataTeachers);
            setGroupe("Type");
        }
        else if(e.target.value==='2'){
            setData(dataTrainee)
            setGroupe("Stage")
        }
        else{
            setData(dataStudents);
            setGroupe("Promotion");
        }

    }
    console.log(data);



    return(
        <section className="bg-gray-300 dark:bg-gray-900">
           <div className='flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 '>
                    <div className='flex justify-center items-center mt-4'>
                        <img src={logo_eamac} alt="logo EAMAC"className='block h-20 w-auto' />
                    </div>
                    
                    <div className='p-6 space-y-4 md:space-y-2 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white'>Inscrivez-vous sur SES</h1>
                        <form className='space-y-4 md:space-y-2' action="#">
                            <div>
                                <label htmlFor="nom"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Nom</label>
                                <input type="text" name='nom'id='nom'className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre Nom' />
                            </div>
                            <div>
                                <label htmlFor="prenom"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Prenom</label>
                                <input type="text" name='prenom'id='prenom'className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre Prenom' />
                            </div>
                            <div>
                                <label htmlFor="email"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Email</label>
                                <input type="email" name='email'id='email'className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'placeholder='Veuillez saisir votre Email' />
                            </div>
                            <div>
                                <label htmlFor="categories"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>Categorie</label>
                                <select name="categories" value={categories} id="categories" onChange={handleCatgories} className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                    <option selected>Choisir une catégorie---</option>
                                    <option value="1">Eleve</option>
                                    <option value="2">Stagiaire</option>
                                    <option value="3">Professeur</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="categories"className='block mb-2 text-sm font-medium text-gray-900 md:text-xl dark:text-white'>{groupe}</label>
                                <select name="promotion" id=""className='block w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus-border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                    <option selected>Choisir une promotion ---</option>
                                    {/* <option value="1">IEAMAC EI/19</option>
                                    <option value="2">IEAMAC NA/19</option>
                                    <option value="3">IEAMAC MTO/19</option> */}
                                    {
                                        data.map(option=>{
                                            return(<option key={option.value} value={option.value}>{option.name}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="submit" className="text-white block w-60 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Inscription</button>
                            </div>
                            <div>
                                <Link to="/" className='text-md font-medium text-blue-700'>Se connecter</Link><br />
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        </section>
    )
}