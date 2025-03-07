import { Link } from "react-router-dom"
import { IBlog } from "../../interface/interface"

export default function Blog({img,description,path,buttonText}:IBlog){
    return(
        <section className="flex flex-col">
            <img className="rounded-t-md shadow h-100" src={img} alt="" />
            <Link className="bg-yellow p-2 text-white text-2xl transition ease-in-out hover:text-yellow hover:bg-white" to={path}>{buttonText}</Link>
            <p>{description}</p>
        </section>
    )
}