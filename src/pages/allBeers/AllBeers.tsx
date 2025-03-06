import axios from "axios"
import { useEffect, useState } from "react"
import Button from "../../components/button/Button"
import { IProduct } from "../../interface/interface"

export default function AllBeers(){

    const [products, setProducts] = useState<IProduct[]>()

    useEffect(()=> {
        const fetchData = async () => {
            const resp = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setProducts(resp.data)
        }
        fetchData()
    }, [])

    
    
    return(
        <section className="flex flex-col items-center gap-5 p-20 mx-60 ">
            <h1 className="text-6xl mb-20 uppercase">See all our Beers</h1>
            {products?.map((product:IProduct)=>{
               return(
                     <div key={product._id} className="flex items-center justify-center gap-10 shadow-xl p-5 transition ease-in-out hover:shadow-2xl bg-white rounded-md">
                    <img className="h-80 rounded-md" src={product.image_url} alt={product.name} />
                    <div className="flex flex-col items-start justify-center gap-5"> 
                        <h1 className="text-4xl">{product.name}</h1>
                        <h2 className="text-xl text-yellow">{product.tagline}</h2>
                        <p className="uppercase">CREATED BY: {product.name}</p>
                        <Button product={product} buttonText="Details"/>
                    </div>
                </div>

               
               )
            })}
        </section>
    )
}