import React from "react"

export default class Title extends React.Component {

    render() {
        return (
            <div>
                <h1 className="display-4">{this.props.title}</h1>
                {/* <p className="lead">{this.props.abstract}</p> */}
            </div>

        )
    }
}