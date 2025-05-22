import React, { useState } from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function MyNav() {
//   const [text, setText] = useState("default");

//   const HomeClick = () => {
//     setText("This is Home Page");
//   };
//   const AboutClick = () => {
//     setText("This is About us Page");
//   };
//   const ContactClick = () => {
//     setText("This is Contact Page");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <button style={{ margin: "15px", padding: "10px" }} onClick={HomeClick}>
//         Home
//       </button>
//       <button style={{ margin: "15px", padding: "10px" }} onClick={AboutClick}>
//         About Us
//       </button>
//       <button style={{ margin: "15px", padding: "10px" }} onClick={ContactClick}>
//         Contact
//       </button>
//       <div style={{ marginTop: "20px" }}>
//         <h3>{text}</h3>
//       </div>
//     </div>
//   );

    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/about">About us</Link>|{" "}
            <Link to="/contact">Contact</Link> 
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default MyNav;
