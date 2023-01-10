import BackgroundImage from '../../assets/banner-background.jpg';
import '../Banner/Banner.scss'

// Banner function that display a picture and a text inside
function Banner(){
    return (
        <div className='banner-container' >
            <img className='banner-container__image'src={BackgroundImage} alt="Image de la bannière" />
            <h2 className='banner-container__title'>De l'oxygène dans la maison</h2>
        </div>
    )
}

export default Banner