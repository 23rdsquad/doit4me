import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => (
  <div>
    <div className="error-404" id="body">
      <div id="cont">
        <div className="error-code m-b-10 m-t-20">
          404 <i className="fa fa-warning" />
        </div>
        <h2 className="font-bold">Oops 404! That page can’t be found.</h2>

        <div className="error-desc">
          Sorry, but the page you are looking for was either not found or does
          not exist. <br />
          Try refreshing the page or click the button below to go back to the
          Homepage.
          <div>
            <br />
            <Link to="/">
              <button className="btn btn-primary">
                <span className="glyphicon glyphicon-home" /> Go back to
                Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default NotFound;
