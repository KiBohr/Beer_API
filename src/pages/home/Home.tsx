import Blog from "../../components/blog/Blog";

export default function Home(){
    return(
        
        <section className="flex items-center justify-center px-10 py-30 gap-10">
            <Blog img={"../../../public/img/home_1.jpg"}  description="BLah BLah Blah"/>
            <Blog img={"../../../public/img/home_2.png"}  description="BLah2 BLah2 Blah2"/>
        </section>
    )
}