import './Card.css'

const Card = (props) => {
    return(
        <div className="card">
        <div className="card-name">{props.name}</div>
        <div className="card-departure">{props.departure}</div>
        <div className="card-travel-time">{props.travel}</div>
      </div>
    )
}

export default Card