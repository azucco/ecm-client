import React from "react";
import Navbar from "../components/Navbar";
import CardDeck from "../components/CardDeck";
/* import Title from "../components/Title"; */
import Footer from "../components/Footer";
import axios from "axios"
import '../css/dashboard.css';
import '../css/button.css';

export default class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            stats: {
                total: "",
                amount: ""
            },
            rank: "",
            coffees: [],
            ratio: []
        }
        this.getStats = this.getStats.bind(this);

    }

    componentDidMount() {
        this.getStats()
    }

    getStats(lastMonth) {
        let lastMonthPath
        if (lastMonth) { lastMonthPath = "month/" } else { lastMonthPath = "" }
        let token = localStorage.ecmToken
        let idUser = localStorage.ecmIdUser
        axios.defaults.headers.common['Authorization'] = token;
        axios.get(`https://api-ecm.herokuapp.com/users/consumptions/${lastMonthPath + idUser}`)
            .then(res => {
                const stats = res.data.stats
                const rank = res.data.rank
                const coffees = res.data.coffees
                const ratio = res.data.ratio
                this.setState({ stats, rank, coffees, ratio });
            })
    }

    render() {

        let title = "Dashboard";
        let abstract = "Tieni sotto controllo i tuoi consumi..."
        return (
            <div>
                <Navbar title={title} abstract={abstract} >
                </Navbar>
                {/* <Title title={title} abstract={abstract}></Title> */}
                <div className="text-center">
                    <button type="button" className="btn btn-lg btn-danger btn-custom btn-left" onClick={(e) => this.getStats(true, e)}>Mese</button>
                    <button type="button" className="btn btn-lg btn-danger btn-custom btn-right" onClick={(e) => this.getStats(false, e)}>Totale</button>
                </div><br></br>
                <CardDeck
                    stats={this.state.stats}
                    rank={this.state.rank}
                    coffees={this.state.coffees}
                    ratio={this.state.ratio}
                />
                <Footer></Footer>
            </div>

        )
    }
}