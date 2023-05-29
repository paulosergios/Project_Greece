import Card from '../Card'
import './Group.css'

const Group = (props) => {
  return (
    <section className="section-group" style={{ backgroundColor: props.colorBackground }}>
      <h3 style={{ color: props.colorTitle }}>{props.cityname}</h3>
      <div className='card-container'>
      {props.group.map((data) => (
        <Card key={data.id} nome={data.name} departure={data.departure} travel={data.travel} className="card"/>
      ))}

      </div>
    </section>
  );
};


export default Group
