import '../Carousel/Carousel.scss'
import { plants } from '../../datas/plants'
import { useState } from 'react';
import previous from '../../assets/left.png'
import next from '../../assets/right.png'

/*  Function that display a carousel with two arrows to navigate thought the different 
    plants and a small info that display on which plant were on */
function Carousel(){
    const length = plants.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    /* If the current index is 0 it take the length of the pictures'array 
       and add -1 to display the last array's picture */
    const PreviousPicture = () => {
        currentIndex === 0 ? setCurrentIndex( plants.length - 1 ) 
        : setCurrentIndex( currentIndex - 1 )
    }

        /* It take the current index and add one because the display start at one and the array at 0,
       it set it at 0 to start again or add one. */
    const NextPicture = () => {
        currentIndex +1 === length ? setCurrentIndex(0) 
        : setCurrentIndex(currentIndex + 1 )
    }

    const Picture = plants[currentIndex].picture;

    return (
        /* The div contain 4 elements, the picture to display wich is choosen with the currentIndex, 
        a previous button that call a function to display the previous element in the array,
        a next button that call a function that display the next element of the array
        and a small paragraphe that contain the number of the actual displayed element  */
        <div className='carousel-container' >
            <img className='carousel-container__image' src={Picture} alt='Photo de la plante consulté'/>
            <img className='carousel-container__previous-picture' src={previous} alt='bouton precedent' onClick={PreviousPicture} />
            <img className='carousel-container__next-picture' src={next} alt='bouton suivant' onClick={NextPicture} />
            <p className='carousel-container__number'>{currentIndex +1}/{length}</p> 
        </div>
    )

}
export default Carousel