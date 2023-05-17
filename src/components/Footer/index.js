import './Footer.css'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <div>
                <h5>© 2023 Front-End em Desenvolvimento. Todos os Direitos Reservados</h5>
            </div>
            <div className='social'>
                <img src='../image/tw.png' alt='rede_social'/>
                <img src='../image/fb.png' alt='rede_social'/>
                <img src='../image/ig.png' alt='rede_social'/>
            </div>
        </div>
    )
} 

export default Footer