import './Card.css'
import Info from './Info'
import About from './About'
import Footer from './Footer'

export default function Card() {
    return (
        <div className="card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={require('./Profile.jpg')} height='200px' width='200px' className='pic' />
                </div>
            </div>
            <div className="lower-container">
                <Info />
                <About />
            </div>
        </div>
    )
}