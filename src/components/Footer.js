import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends React.Component {

  render() {
    return (

      <div>
        <nav class="navbar navbar-default navbar-fixed-bottom fixed-bottom">
          <div class="container-fluid">
            <ul class="nav navbar-nav navbar-horizontal">
              {/* <li><a href="#"><i class="fa fa-bar-chart"></i></a></li> */}
              <li class="dropdown navbar-link-primary">
                <a href="#" /* class="dropdown-toggle" */ data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bar-chart"></i></a>
                <ul class="dropdown-menu dropdown-menu-fixed-bottom left">
                  <div class="panel panel-default">
                    <div class="list-group">
                      <a href="#" class="list-group-item"><i class="fa fa-calendar"></i> Totale</a>
                      <a href="#" class="list-group-item"><i class="fa fa-map-o"></i> Ultimo mese</a>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="dropdown navbar-link-primary">
                <a href="#" /* class="dropdown-toggle" */ data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-plus-circle"></i></a>
                <ul class="dropdown-menu dropdown-menu-fixed-bottom center">
                  <div class="panel panel-default">
                    <div class="list-group">
                      <a href="#" class="list-group-item"><i class="fa fa-coffee"></i> Intenso</a>
                      <a href="#" class="list-group-item"><i class="fa fa-coffee"></i> Vigoroso</a>
                      <a href="#" class="list-group-item"><i class="fa fa-coffee"></i> Vellutato</a>
                      <a href="#" class="list-group-item"><i class="fa fa-coffee"></i> Decaffeinato</a>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="dropdown navbar-link-primary">
                <a href="#" /* class="dropdown-toggle" */ data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i></a>
                <ul class="dropdown-menu dropdown-menu-fixed-bottom right">
                  <div class="panel panel-default">
                    <div class="list-group">
                      <a href="#" class="list-group-item"><i class="fa fa-calendar"></i> Profilo</a>
                      <a href="#" class="list-group-item"><i class="fa fa-map-o"></i> Logout</a>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}