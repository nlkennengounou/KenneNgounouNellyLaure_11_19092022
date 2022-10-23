import logo from "../assets/logo.png";


function Footer(){
    return (
        <div className='footer'>
            <img src={logo} alt='Kasa' className='footer__logo' />
            <p className='footer__copyrights'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer