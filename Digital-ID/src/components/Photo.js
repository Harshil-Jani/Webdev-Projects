import './Photo.css'
import Profile from './Profile.jpg'

export default function Photo(){
    return (
        <>
        <img src={require('./Profile.jpg')} height='200px' width='200px' className='pic'/>
        </>
    )
}