import { useState } from 'react'
import Button from '../Button'
import Options from '../Options'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [departure, setDeparture] = useState('')
    const [travel, setTravel] = useState('')
    const [destiny, setDestiny] = useState('')

    const Aosubmeter = (event) => {
        event.preventDefault();
        props.newPeopleRegist({
        name,
        departure,
        travel,
        destiny,
        });
        setName('')
        setDeparture('')
        setTravel('')
        setDestiny('')
       };
    return(
        <div className='container'>
            <img src='../image/greece_img.jpg' alt='greek lands' />
            <h3>Insert your information</h3>
            <form className="form" onSubmit={Aosubmeter}>
                <TextField 
                    label="Your Name" 
                    required={true} 
                    placeholder="Put here your name... "
                    valor={name}
                    onAlt={valor =>setName(valor)}
                />
                <TextField 
                    label="Departure" 
                    required={true} 
                    placeholder="Country departure... "
                    valor={departure}
                    onAlt={valor =>setDeparture(valor)}    
                />
                <Options 
                    required={true} 
                    label="Cities" 
                    city={props.groupcity}
                    valor={destiny}
                    onAlt={valor =>setDestiny(valor)}     
                />
                <TextField 
                    label="Travel Time" 
                    placeholder="How long do you want to travel? (Opcional) "
                    valor={travel}
                    onAlt={valor =>setTravel(valor)}    
                />  
                <Button>
                    Register
                </Button>          
            </form>
        </div>
    )
}

export default Form