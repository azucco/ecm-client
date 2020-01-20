import React from "react";
/* import { Link } from "react-router-dom"; */
import '../css/footer.css';

export default class Footer extends React.Component {

    render() {
        return (

            <div>
                <footer class="footer bg-white fixed-bottom border-bottom shadow-sm">
                    <ul>
                        <li>
                            <img src="../img/reward.png" alt="" />
                            Stats
                        </li>

                        <li>
                            <img src="../img/barista_2.png" alt="" />
                            Profilo
                        </li>
                        <li>
                            <img src="../img/coffee-cup.png" alt="" />
                            Add coffee
                        </li>
                    </ul>
                </footer>

            </div>
        )
    }
}