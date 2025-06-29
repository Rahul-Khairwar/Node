import { Outlet } from "react-router-dom"
import TopNav from "./components/TopNav"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
    
    <TopNav/>

    <main>
        <Outlet/>
    </main>

    <Footer/>
    
    </>
  )
}

export default Layout
