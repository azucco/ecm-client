import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends React.Component {

    render() {
        return (

            <div>
                {/* <footer class="footer fixed-bottom border-bottom shadow-sm">
                    <ul>
                        <li>
                            <Link className="p-2 text-dark" to="/">
                                <FontAwesomeIcon className="icon" icon={faChartLine} />
                            </Link>
                        </li>

                        <li>
                            <Link className="p-2 text-dark" to="/profilo">
                                <FontAwesomeIcon className="icon" icon={faUser} />
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon" icon={faMugHot} />
                        </li>
                    </ul>
                </footer> */}

                <nav class="navbar navbar-default navbar-fixed-bottom fixed-bottom">
  <div class="container-fluid">
    <ul class="nav navbar-nav navbar-horizontal">
      <li><a href="#"><i class="fa fa-calendar"></i></a></li>
      <li><a href="#"><i class="fa fa-search"></i></a></li>
      <li class="dropdown navbar-link-primary">
        <a href="#" /* class="dropdown-toggle" */ data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-plus-circle"></i></a>
          <ul class="dropdown-menu dropdown-menu-fixed-bottom">
            <div class="panel panel-default">
              <div class="list-group">
                <a href="#" class="list-group-item"><i class="fa fa-calendar"></i> New</a>
                <a href="#" class="list-group-item"><i class="fa fa-map-o"></i> New</a>
                <a href="#" class="list-group-item"><i class="fa fa-user"></i> New</a>
                <a href="#" class="list-group-item"><i class="fa fa-microphone"></i> New</a>
              </div>
            </div>
          </ul>
        </li>
      <li><a href="#"><i class="fa fa-star-o"></i></a></li>
      <li><a href="#"><i class="glyphicon glyphicon-option-horizontal"></i></a></li>
    </ul>
  </div>
</nav>

            </div>
        )
    }
}