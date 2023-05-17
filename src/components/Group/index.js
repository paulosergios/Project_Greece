import Card from '../Card'
import './Group.css'

const Group = (props) => {
  const { formData } = props;
  return (
    <section className='section-group' style={{ backgroundColor: props.colorBackground }}>
      <h3 style={{ color: props.colorTitle }}>{props.name}</h3>
      {props.group.map((grp) => (
        <div key={grp.name}>
          <Card name={grp.name} departure={grp.departure} travel={grp.travel} />
          {formData && (
            <div>
              <p>Name: {formData.name}</p>
              <p>Departure: {formData.departure}</p>
              <p>Travel: {formData.travel}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Group;
