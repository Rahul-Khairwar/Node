import Layout from "./Layout"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import Insert from "./pages/Insert"
import Display from "./pages/display"
import Update from "./pages/Update"
import StuEdit from "./pages/StuEdit"
import Search from "./pages/Search"

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="/stuedit/:id" element={<StuEdit/>}/>
    <Route path="search" element={<Search/>}/>

   
    </Route>
   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
