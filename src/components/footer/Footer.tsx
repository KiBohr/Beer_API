import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-yellow flex items-center justify-center h-[30vh]">
            <Link to="/" ><img className="bg-white p-3 rounded-full transition ease-in-out hover:shadow-2xl cursor-pointer" src="../../../public/img/bier 1.png" alt="two beer" /></Link>
            
        </footer>
    )
}