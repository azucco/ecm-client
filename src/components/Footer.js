import React from "react";
import { Link } from "react-router-dom";
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends React.Component {

    render() {
        return (

            <div>
                <footer class="footer fixed-bottom border-bottom shadow-sm">
                    <ul>
                        <li>
                            <Link className="p-2 text-dark" to="/">
                                <FontAwesomeIcon className="icon" icon={faChartLine} />
                            </Link>
                            {/* Stats */}
                        </li>

                        <li>
                            <Link className="p-2 text-dark" to="/profilo">
                                <FontAwesomeIcon className="icon" icon={faUser} />
                            </Link>
                            {/*  Profile */}
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon" icon={faMugHot} />
                            {/* Add coffee */}
                        </li>
                    </ul>
                </footer>

            </div>
        )
    }
}