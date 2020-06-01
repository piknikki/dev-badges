import React from "react";
import "./style.css";

const Title = props => (
    <div className="row">
        <div className="col-sm-6">
            <img id="title-image" src={process.env.PUBLIC_URL + '/images/srengineer.png'} alt="sr eng badge" />
        </div>
        <div className="col-sm-5">
            <p>Developer badges for sloths
            </p>
        </div>
    </div>
)
export default Title;
