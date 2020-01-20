import React from "react"

export default class Card extends React.Component {

    render() {
        return (
            <div className="card mb-4 shadow-sm">

                {(() => {
                    if (this.props.chart === "") {
                        return (
                            <div>
                               {/*  <div className="card-header">
                                    <h2 className="my-0 font-weight-normal">{this.props.icon}</h2>
                                </div> */}
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        {this.props.unit}{this.props.value}
                                        <small className="text-muted">{this.props.ratio}</small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>{this.props.legend}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="card-body">
                                {this.props.chart}
                            </div>
                        )

                    }
                })()}

            </div>
        )
    }
}