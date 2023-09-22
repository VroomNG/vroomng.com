import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function RootLayout() {
  return (
    <div className="rootLayout h-full w-full">
        <header>
              <Navbar />  
        </header>
          <main>
          <Outlet/>
          </main>
        <footer>
          <Footer/>
        </footer>
    </div>

   
  )
}
