import Swal from "sweetalert2"
export default function AlertSuccess({message}){
    return(
        <>
           {
                Swal.fire({
                    title: "Parfait !",
                    text: "message",
                    icon: "success"
                })
           }
        
        </> )
}