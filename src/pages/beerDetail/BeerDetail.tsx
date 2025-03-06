import { useParams } from "react-router-dom"
import { IProduct } from "../../interface/interface"
import { useEffect, useState } from "react"
import axios from "axios"
import Button from "../../components/button/Button"

export default function BeerDetail(){
    
    const {id} = useParams()

    const [product,setProduct] = useState<IProduct>()

    useEffect(()=>{
        const fetchData = async () => {
            const resp = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setProduct(resp.data)
        }
        fetchData()
    }, [])

    
    return(
        <div className="flex items-center justify-center gap-20 py-20 px-40">
            <img className="h-120 rounded-md shadow-xl transition ease-in-out hover:shadow-2xl" src={product?.image_url} alt={product?.name} />
            <div className="flex flex-col gap-5">
                <h1 className="text-7xl">{product?.name}</h1>
                <h2 className="text-3xl text-yellow">{product?.tagline}</h2>
                <div className="flex gap-40 text-dark-grey/50">
                    <div>
                        <p>first brewed:</p>
                        <p>attenuation level:</p>
                    </div>
                    <div>
                        <p>{product?.first_brewed}</p>
                        <p>{product?.attenuation_level}</p>
                    </div>
                </div>
                <p>{product?.description}</p>
                {/* <Button buttonText="◀︎" product={product} /> */}
            </div>
            
        </div>
    )
}