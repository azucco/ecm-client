import React from "react";
import Navbar from "../components/Navbar";
/* import Title from "../components/Title"; */
import Footer from "../components/Footer";

export default class Dashboard extends React.Component {

    render() {

        let title = "Profilo";
        let abstract = "Aggiorna i tuoi dati."
        return (
            <div>
                <Navbar title={title} abstract={abstract}>
                </Navbar>
                {/* <Title title={title} abstract={abstract}></Title> */}
                <Footer></Footer>
            </div>

        )
    }
}