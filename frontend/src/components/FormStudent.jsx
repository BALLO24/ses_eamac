import { useState } from 'react';
import logo_eamac from '/EAMAC.jpg';

export default function FormStudent() {
    const numMax=6;
    const numMin=1
    const [numPage,setNumPage]=useState(numMin);
function handleNextBtn(){

    // numPage==numMax ? setNumPage(numMin):setNumPage(numPage+1)
    // console.log(numPage);
    setNumPage(numPage+1);
}

function handlePreviousBtn(){
    numPage==numMin ? setNumPage(numMax) : setNumPage(numPage-1);

    console.log(numPage);
    
    
}function handleSubmitBtn(){
window.alert('Thank you :-)')    
}

    return (
        <div className='flex flex-col items-center justify-center '>
            <div className='w-full my-4 bg-gray-50 border rounded-lg border-gray-400 mt-0 md:m-2 p-2 sm:max-w-2xl'>
                <div className='flex justify-center items-center'>
                    <img src={logo_eamac} alt="logo EAMAC" className='block h-12 w-auto' />
                </div>

                {/* Begin header form student */}
                <div className="w-full flex flex-col font-medium">
                    {/* first line */}
                    <div className="flex justify-between flex-col sm:flex-row mt-2">
                        <div className="">
                            <span className="underline">Année Scolaire :</span><span> 2024</span>
                        </div>
                        <div className="">
                            <span className="underline">Promotion :</span><span> IEAMAC EI/19</span>
                        </div>
                        <div className="">
                            <span className="underline">Date :</span><span> 13/08/2024</span>
                        </div>
                    </div>

                    {/* second line */}
                    <div className="w-full flex flex-col sm:flex-row justify-between mt-2">
                        <div>
                            <span className="underline">Division d&rsquo;enseignement :</span><span> EI {numPage}</span>
                        </div>
                        <div>
                            <span className="underline">Activité d&rsquo;Enseignement :</span><span> CNS</span>
                        </div>
                    </div>

                    {/* Other lines */}
                    <div>
                        <div className='mt-2'>
                            <span className="underline">Nom de l&rsquo;enseignement :</span><span> M. Esai Bonog</span>
                        </div>
                        <div className='mt-2'>
                            <span className="underline">Intitulé du cours :</span><span> Radionavigation</span>
                        </div>
                        <div className='mt-2'>
                            <span className="underline">Partie du cours enseigné :</span><span> VOR/DME</span>
                        </div>
                    </div>
                </div>
                {/* End header form student */}
            </div>
            <hr className='' />
            {/* Stepper */}
            <div className='my-4 w-full bg-gray-50 border rounded-lg border-gray-400 mt-0 md:m-2 p-2 sm:max-w-2xl mx-auto'>
                <ul className='mt-4 w-full bg-blue-500 mx-auto relative flex flex-row gap-x-2 justify-center items-center'>
                    <li className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
                        <span className='size-7 bg-gray-300 rounded-full flex justify-center items-center'>
                            {numPage == 1 && <span>1</span>}  
                            {numPage > 1 && <svg className=" shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>} 
                        </span>
                    </li>
                    <li className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
                        <span className='size-7 bg-gray-300 rounded-full flex justify-center items-center'>
                        {numPage <= 2 && <span>2</span>} 
                        {numPage > 2 && <svg className=" shrink-0 size-3 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>}
                        </span>
                    </li>
                    <li className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
                        <span className='size-7 bg-gray-300 rounded-full flex justify-center items-center'>
                        {numPage <= 3 && <span>3</span>} 
                        {numPage > 3 && <svg className=" shrink-0 size-3 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>}
                        </span>
                    </li>
                    <li className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
                        <span className='size-7 bg-gray-300 rounded-full flex justify-center items-center'>
                        {numPage <= 4 && <span>4</span>} 
                        {numPage > 4 && <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>}
                        </span>
                    </li>
                    <li className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
                        <span className='size-7 bg-gray-300 rounded-full flex justify-center items-center'>
                        {numPage <= 5 && <span>5</span>}
                        {numPage > 5 && <svg className="shrink-0 size-3 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg> }
                        </span>
                    </li>                <li className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
                        <span className='size-7 bg-gray-300 rounded-full flex justify-center items-center'>
                        {numPage <=6 && <span>6</span>}
                        {numPage > 6 && <svg className=" shrink-0 size-3 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>}
                        </span>
                    </li>
                </ul>
            </div>
            <form action="#" className='my-4 bg-gray-50 border rounded-lg border-gray-400 mt-0 md:m-2 p-2 sm:max-w-2xl mx-auto'>
                {/* page-1 */}
                {numPage==1 && <div className=''>
                    <h1 className='text-2xl font-bold my-2 uppercase'>I- Objectifs et programmes</h1>
                    <div className='flex gap-x-4 justify-between'>
                        <p>1- Le programme vous-avait-il été communiqué</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option className='max-w-sm:w-20' value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='flex gap-x-4 justify-between my-2 '>
                        <p>2- L&rsquo; enseignant avait-il présenté les objectifs du cours ?</p><div>
                            <select className='w-40 p-2 border rounded-lg flex justify-center items-center'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>3- L&rsquo;enseignant avait-il informé les élèves des modalités d&rsquo;évaluation de ce cours</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between'>
                        <p>4- Le programme vous-avait-il été communiqué</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                }

                {/* Page-2 */}
                {numPage==2 && <div className=''>
                    <h1 className='text-2xl font-bold my-2 uppercase'>II- SUPPORTS DE COURS</h1>
                    <div className='flex gap-x-4 justify-between'>
                        <p>5- Un support de cours vous a t-il été remis ?</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='flex gap-x-4 justify-between my-2 '>
                        <p>6- Le support de cours vous semble t-il exploitable ?</p><div>
                            <select className='w-40 p-2 border rounded-lg flex justify-center items-center'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>7- Le contenu du support de cours est-il en rapport avec le programme présenté ?</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                }

                {/* Page-3 */}
                {numPage==3 && <div className=''>
                    <h1 className='text-2xl font-bold my-2 uppercase'>III- CONTENU DU COURS</h1>
                    <div className='flex gap-x-4 justify-between'>
                        <p>8- Conformité entre cours dispensé et programme :</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='flex gap-x-4 justify-between my-2 '>
                        <p>9- Conformité entre cours dispensé et support de cours :</p><div>
                            <select className='w-40 p-2 border rounded-lg flex justify-center items-center'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>10- Le cours a-t-il été dispensé dans la durée prescrite ? :</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                }


                 {/* Page-4 */}
                {numPage==4 && <div className=''>
                    <h1 className='text-2xl font-bold my-2 uppercase'>IV- Objectifs et programmes</h1>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>11- Degré d&rsquo;interêt suscité par la première intervention de cet enseignant</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2 '>
                        <p>12- Degré d&rsquo;adéquation entre les exercices proposés et le cours dispensé :</p><div>
                            <select className='w-40 p-2 border rounded-lg flex justify-center items-center'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>13- Degré d&rsquo;adéquation entre le sujet de composition ou d&rsquo;interrogation et le cours dispensé :</p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>14- Votre propre degré de comprehension du cours </p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>15- L&rsquo;enseignant encourage t-il les élèves à poser des questions ?</p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>16- Attitude de l&rsquo;enseignant par rapport aux questions des élèves : </p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>17- Votre avis sur l&rsquo;enthousiasme de l&rsquo;enseignant pour son cours : </p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>18- L&rsquo;enseignant cherche-t-il à faire participer les élèves au cours ?</p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>19- Degré de respect et d&rsquo;équité de l&rsquo;enseignant vis-àvis des élèves </p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>20- Disponibilité de l&rsquo;enseignant à aider ou conseiller les élèves qui ont des difficultés :</p>
                        <div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>




                    </div>
                }
                {/* Page-5 */}
                {numPage==5 && <div className=''>
                    <h1 className='text-2xl font-bold my-2 uppercase'>V- Appreciation générale</h1>
                    <p>Dans l&rsquo;ensemble, quel est votre degré de satisfaction sur ce cours ?</p>
                    <p className='italic'>selecionner la mention choisie</p>
                    
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Très insuffisant </label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Insuffisant</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Moyen</label>
        </div>
    </li>
    <li className="w-full dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Satisfaisant</label>
        </div>
    </li>
</ul>

                </div>
                }

                {/* Page-6 */}
                {numPage >= 6 && <div className=''>
                    <h1 className='text-2xl font-bold my-2 uppercase'>II- Objectifs et programmes</h1>
                    <div className='flex gap-x-4 justify-between'>
                        <p>5- Le programme vous-avait-il été communiqué</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='flex gap-x-4 justify-between my-2 '>
                        <p>6- L&rsquo; enseignant avait-il présenté les objectifs du cours ?</p><div>
                            <select className='w-40 p-2 border rounded-lg flex justify-center items-center'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between my-2'>
                        <p>7- L&rsquo;enseignant avait-il informé les élèves des modalités d&rsquo;évaluation de ce cours</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-x-4 justify-between'>
                        <p>8- Le programme vous-avait-il été communiqué</p><div>
                            <select className='w-40 p-2 border rounded-lg'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                }





                <div className='w-full flex flex-row justify-between px-8 mt-4'>
                <button disabled={numPage==1}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={()=>handlePreviousBtn()}>Previous</button>
                {numPage <= 6 && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={()=>handleNextBtn()}>Next</button>}
                {numPage > 6 && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={()=>handleSubmitBtn()}>Submit</button>}
                </div>
            </form>
        </div>
    )
}