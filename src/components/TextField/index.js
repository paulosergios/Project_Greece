import './TextField.css';

const TextField = (props) => {
  const placeholderalt = `${props.placeholder}`;

  const onWrite = (event) => {
    if (props.onAlt) {
      props.onAlt(event.target.value);
    }
  };

  return (
    <div className='textfield'>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onWrite}
        required={props.required}
        placeholder={placeholderalt}
      />
    </div>
  );
};

export default TextField;
