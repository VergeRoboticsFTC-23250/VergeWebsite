import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Redirect from "./components/Redirect";
import Navbar from "./components/Navbar";
import OurTeam from "./pages/ourTeam/OurTeam";

export default function App(){
  const path = useLocation().pathname;
  if(path == '/') return <Redirect link="/home"/>

  return(
    <div className="relative h-full">
      <Navbar/>
      <div className="h-full overflow-auto pt-16">
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/our-team" element={<OurTeam/>}/>
        </Routes>
      </div>
    </div>
  )
}