import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <p>{props.id}</p>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.naslov}</span>
      </dt>
      <dd>{props.opis}</dd>
    </div>
  );
}

export default Entry;
