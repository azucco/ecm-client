import React from "react"

export default class Title extends React.Component {

    render() {
        return (
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">{this.props.title}</h1>
                <p className="lead">{this.props.abstract}</p>
            </div>

        )
    }
}