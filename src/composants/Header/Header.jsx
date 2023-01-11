import '../Header/Header.scss'
import Logo from '../../assets/Logo.png'
/*The header function contain 2 elements, the website's logo and the name of the website.*/
function Header() {
    return (
        <header className='header-container' >
            <img className='header-container__logo' src={Logo} alt='Logo du site Euka' />
            <h1 className='header-container__title'>Euka</h1>
        </header>
    )
}
export default Header