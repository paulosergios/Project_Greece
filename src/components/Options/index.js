import './Options.css'

const Options = (props) => {

    const onwrite = (event) =>{
        props.onAlt(event.target.value)
    }


    return (
        <div className='options'>
            <label>
                {props.label}
            </label>
            <select value={props.valor} onChange={onwrite} required={props.required}>
                {props.city.map(ct => {
                    return <option key={ct}>{ct}</option>
                })}
            </select>
        </div>
    )
}

export default Options