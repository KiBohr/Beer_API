import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import AllBeers from "./pages/allBeers/AllBeers"
import BeerDetail from "./pages/beerDetail/BeerDetail"
import RandomBeer from "./pages/randomBeer/RandomBeer"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="allbeers" element={<AllBeers/>}/>
        <Route path="/beerdetail/:id" element={<BeerDetail/>}/>
        <Route path="/randombeer" element={<RandomBeer/>}/>
      </Route>

    )
  )
 
  return (
    <div className="text-dark-grey font-[RobotoSlaps] bg-gray-50">
       <RouterProvider router={router}/>
    </div>
   
  
  )
}

export default App
