import './TextField.css'

const TextField = (props) =>{

    const placeholderalt = `${props.placeholder}`

    const onwrite = (event) =>{
        props.onAlt(event.target.value) 
    }

    return(
        <div className='textfield'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={onwrite} required={props.required} placeholder={placeholderalt}/>
        </div>
    )
}

export default TextField