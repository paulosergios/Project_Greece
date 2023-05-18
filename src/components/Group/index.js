import Card from '../Card'
import './Group.css'

const Group = (props) => {
  return (
    <section className="section-group" style={{ backgroundColor: props.colorBackground }}>
      <h3 style={{ color: props.colorTitle }}>{props.name}</h3>
      {props.group.map((grp) => (
        <Card
          key={grp.name}
          name={grp.name}
          departure={grp.departure}
          travel={grp.travel}
        />
      ))}
    </section>
  );
};


export default Group
