import React from "react"
import Card from "./Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faPiggyBank, faMedal, faChartPie } from '@fortawesome/free-solid-svg-icons'
//CanvasJS
import PieChart from "./PieChart"
import Coffee from "../js/Coffee"
import MultiSeriesChart from "./MultiSeriesChart"


export default class CardDeck extends React.Component {

    constructor() {
        super();
        /* this.props = {
            stats: {
                total: "",
                amount: ""
            },
            rank: "",
            coffees: [],
            ratio: []
        } */
        this.getPieChartData = this.getPieChartData.bind(this);
        this.getMultiSeriesChartData = this.getMultiSeriesChartData.bind(this);
    }

    getPieChartData() {
        const data = []
        this.props.ratio.map(el => {
            let color = new Coffee(el.name)
            let ratio = {
                y: Number(Math.round(el.ratio+'e1')+'e-1'),
                label: el.name,
                color: color.getColor()
            }
            data.push(ratio)
        })
        return data
    }

    getMultiSeriesChartData() {
        const data2 = []
        this.props.coffees.map(el => {
            let color = new Coffee(el.name)
            let ratio = {
                y: 2,
                label: el.date,
                color: color.getColor()
            }
            data2.push(ratio)
        })
        
        console.log(data2)
        return data2
    }

    render() {
        const data = this.getPieChartData()
        const data2 = this.getMultiSeriesChartData()
        return (
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <Card
                        icon={<FontAwesomeIcon icon={faMugHot} />}
                        unit=""
                        value={this.props.stats.total}
                        ratio=""
                        legend="caffè bevuti"
                        chart=""
                    />
                    <Card
                        icon={<FontAwesomeIcon icon={faPiggyBank} />}
                        unit="€"
                        value={this.props.stats.amount}
                        ratio=""
                        legend="euro bevuti"
                        chart=""
                    />
                    <Card
                        icon={<FontAwesomeIcon icon={faMedal} />}
                        unit=""
                        value={this.props.rank + "°"}
                        ratio=""
                        legend="bevitore dell'ufficio"
                        chart=""
                    />
                </div>
                <div className="card-deck mb-3 text-center">
                    <Card
                        icon={<FontAwesomeIcon icon={faChartPie} />}
                        unit=""
                        value=""
                        ratio=""
                        legend=""
                        chart={<PieChart data={data} />}
                    />
                </div>
                <div className="card-deck mb-3 text-center">
                    <Card
                        icon={<FontAwesomeIcon icon={faChartPie} />}
                        unit=""
                        value=""
                        ratio=""
                        legend=""
                        chart={<MultiSeriesChart data={data2} />}
                    />
                </div>
            </div>
        )
    }
}