import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/js/dist/collapse.js';
import Logo from '../img/ecm_logo.png'

class Navbar extends React.Component {

   render() {
      return (

         <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <img className="my-0 mr-md-auto" src={Logo} alt="" width="72" height="72" />
            <nav className="my-2 my-md-0 mr-md-3">
               <Link className="p-2 text-dark" to="/">Dashboard</Link>
               <Link className="p-2 text-dark" to="/profilo">Profilo</Link>
               {/* <a className="btn btn-outline-primary" href="#">Logout</a> */}
            </nav>
         </div>
      )
   }
}

export default Navbar;