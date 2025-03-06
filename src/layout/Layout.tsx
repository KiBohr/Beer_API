import { Outlet, useLocation } from "react-router-dom"
import Footer from "../components/footer/Footer"

export default function Layout(){
    const location = useLocation()
    // console.log(location)

    // um zu entscheiden, wo der footer angezeigt werden soll
    const hideFooter = location.pathname === "/" || location.pathname ==="home"


    return(
        <>
        <Outlet/>
        {!hideFooter && <Footer/>}
        </>
    )
}