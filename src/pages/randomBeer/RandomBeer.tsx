import { useEffect, useState } from "react"
import { IProduct } from "../../interface/interface"
import axios from "axios"
import { Link } from "react-router-dom"

export default function RandomBeer (){

    const [randomProduct, setRandomProduct] = useState<IProduct>()

    useEffect(()=>{
        const fetchData = async () => {
            const resp = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            setRandomProduct(resp.data)
        }
        fetchData()
        
    },[])

    return(
    
        <div className="flex items-center justify-center gap-20 py-20 px-40">
            <img className="h-120 rounded-md shadow-xl transition ease-in-out hover:shadow-2xl" src={randomProduct?.image_url} alt={randomProduct?.name} />
            <div className="flex flex-col gap-5">
                <h1 className="text-7xl">{randomProduct?.name}</h1>
                <h2 className="text-3xl text-yellow">{randomProduct?.tagline}</h2>
                <div className="flex gap-40 text-dark-grey/50">
                    <div>
                        <p>first brewed:</p>
                        <p>attenuation level:</p>
                    </div>
                    <div>
                        <p>{randomProduct?.first_brewed}</p>
                        <p>{randomProduct?.attenuation_level}</p>
                    </div>
                </div>
                <p>{randomProduct?.description}</p>
                <Link className="bg-yellow border-2 rounded-full text-white  cursor-pointer transition ease-in-out hover:bg-white hover:text-yellow w-14" to="/allbeers"><img className="" src="../../../public/img/Back.png" alt="back arrow" /></Link>
            </div>
        </div>
        
    )
}