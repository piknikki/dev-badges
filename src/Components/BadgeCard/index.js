import React from "react";
import "./style.css";

function BadgeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img
                    key={props.id}
                    id={props.id}
                    alt={props.name}
                    src={props.image}
                />

            </div>
            <h4>{props.description}</h4>
        </div>

    );
}

export default BadgeCard;