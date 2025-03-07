import { Link } from "react-router-dom";
import { IProps } from "../../interface/interface";

export default function Button({buttonText, product}:IProps){
    return(
        <>
        <Link to={`/beerdetail/${product?._id}`} className="bg-yellow border-2 rounded-full text-white px-4 py-2 cursor-pointer transition ease-in-out hover:bg-white hover:text-yellow">{buttonText}</Link>
        </>
    )
}