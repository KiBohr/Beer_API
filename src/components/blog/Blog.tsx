import Button from "../button/Button"
import ProductItem from "../productItem/ProductItem"

interface IBlog{
    img: string,
    description: string

}

export default function Blog({img,description}:IBlog){
    return(
        <section className="">
            <img className="rounded-t-md shadow h-100" src={img} alt="" />
            <p className="bg-yellow h-10"></p>
            <p>{description}</p>
        </section>
    )
}