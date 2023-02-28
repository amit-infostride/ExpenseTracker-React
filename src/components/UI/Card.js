import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // any thing received from outside className is added to card properties in css

  return <div className={classes}>{props.children}</div>;
}

export default Card;
