import './Options.css'

const Options = ({onAlt, label, valor, rqd = false, city }) => {

    return (
        <div className='options'>
            <label>
                {label}
            </label>
            <select value={valor} onChange={event => onAlt(event.target.value)} required={rqd}>
                {city.map(ct => {
                    return <option key={ct}>{ct}</option>
                })}
            </select>
        </div>
    )
}

export default Options