import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default class Dashboard extends React.Component {

    render() {

        let title = "Profilo";
        let abstract = "Aggiorna i tuoi dati."
        return (
            <div>
                <Navbar>
                </Navbar>
                <Title title={title} abstract={abstract}></Title>
            </div>

        )
    }
}