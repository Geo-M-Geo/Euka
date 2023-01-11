import './App.scss';
import Header from './composants/Header/Header';
import Banner from './composants/Banner/Banner';
import Carousel from './composants/Carousel/Carousel'
import Footer from './composants/Footer/Footer'

/*The App function contain all the element of the page, the header, the banner, the carousel and the footer. */
function App() {
  return (
    <>
      <Header />
      <div className='main-container' >
        <Banner />
        <Carousel />  
      </div>
      <Footer />
    </>
  );
}

export default App;