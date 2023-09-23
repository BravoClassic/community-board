// import reactLogo from "../assets/library.jpeg";
import PropTypes from "prop-types"

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} className="card-logo" alt="logo" />
      <h2 className="card-title">{props.name}</h2>
      <h6 className="card-subtitle">{props.subtitle}</h6>
      <a href={props.url}>
      <button className="card-button">Read More</button>
      </a>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
  }
Card.defaultProps = {
  image: "/assets/default.jpeg",
  name: "Resource Name",
  subtitle: "Resource Description",
  url: "#"
  }