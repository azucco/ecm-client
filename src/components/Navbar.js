import React from "react";
import 'bootstrap/js/dist/collapse.js';
import Logo from '../img/vending-machine.png'
import Title from "../components/Title";
import '../css/navbar.css';

class Navbar extends React.Component {

   render() {

      return (

         <div className="navbar d-flex flex-column flex-md-row p-3 px-md-4 mb-3 border-bottom shadow-sm">
            <img className="my-0 mr-md-auto" src={Logo} alt="" width="72" height="72" />
            {/* <nav className="my-2 my-md-0 mr-md-3">
               <Link className="p-2 text-dark" to="/">Dashboard</Link>
               <Link className="p-2 text-dark" to="/profilo">Profilo</Link>
            </nav> */}
            <Title title={this.props.title} abstract={this.props.abstract}></Title>
         </div>
      )
   }
}

export default Navbar;