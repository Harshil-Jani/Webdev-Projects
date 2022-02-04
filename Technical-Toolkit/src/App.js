import './App.css';
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Cards from './components/Cards.js'
import Data from './Data.js'
import Footer from './components/Footer.js'

function App() {

  const card = Data.map(item =>{
    return (<Cards 
      image = {item.image}
      title = {item.title}
      link = {item.link}
      project = {item.project}  
    />)
  })

  return (
    <>
    <Navbar/>
    <Header/>
    <div className='card-row'>
       {card}
    </div>
    <Footer/>
    </>
  );
}

export default App;
