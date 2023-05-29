import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-name">{props.nome}</div>
        <div className="card-departure">
          <h4>{props.departure}</h4>
          <h5>{props.travel}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
