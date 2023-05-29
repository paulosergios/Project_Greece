import './TextField.css'

const TextField = (props) =>{

    const placeholdermod = `${props.placeholder}`

    const onwrit = (event) => {
        props.onAlt(event.target.value)
    }

    return(
        <div className='textfield'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={onwrit} required={props.required} placeholder={placeholdermod}/>
        </div>
    )
}

export default TextField