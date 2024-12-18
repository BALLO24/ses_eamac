import DataTable from "react-data-table-component";
import logo_eamac from '/EAMAC.jpg';
import { Logout } from "@mui/icons-material";
//import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../config/axiosConfig";
axios.defaults.headers.common["Authorization"]=`$Bearer ${localStorage.getItem("token")}`;



export default function StudentBoard() {
    const columns = [
        {
            name: "Date",
            selector: row => row.date
        },
        {
            name: "Matiere",
            selector: row => row.nom_matiere
        },
        {
            name: "Enseignant",
            selector: row => row.nom_enseignant + ' ' + row.prenom_enseignant
        },
        {
            name: "Statut",
            selector: row => row.actif
        },
        {
            name: "Evaluer",
            selector: row => row.actif=="actif" ? <button>Evaluer</button>: <span>Inactif</span>
        }
    ];
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [data,setData]=useState([])
    const[user,setUser]=useState("")

    useEffect(()=>{        

            axios.get("/checkAuthentication")
            .then(res=>{
                    if(res.status===200){
                        setData(res.data.data);
                        setUser(res.data.userSystem);
                        console.log(res.data);
                        
                        setIsAuthenticated(true)
                    }})
            .catch(e=>{
                throw e })
    },[]);
    
    

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                fontWeight: "bolder",
            }
        }
    }
    return (
        <div>
            <div className="w-full p-1 flex justify-around items-center text-white font-bold bg-blue-800">
                <div>
                    <a href="#">
                        <img
                            src={logo_eamac}
                            alt="logo eamac"
                            className="w-24" />
                    </a>
                </div>
                <div>
                </div>
                <div className="">
                    <span className="mx-4">Bienvenue {user?.nom}</span>
                    <button
                        className="bg-white text-black p-1 rounded-lg"
                    >
                        <span className="mx-1">Logout</span><Logout />
                    </button>
                </div>
            </div>
            <div>
                {!isAuthenticated && <div>Non authentifié</div>}
            </div>
            {isAuthenticated && 
        <div>
            <div className="relative m-5">
                <input
                    type="text"
                    id="floating_outlined"
                    className="block  px-2.5 pb-2.5 pt-4 w text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="" />
                <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Rechercher</label>
           </div>
           
            <DataTable
                customStyles={customStyles}
                columns={columns}
                data={data}
                fixedHeader
                pagination
            >
            </DataTable>
        </div>}

    </div>

    )
}