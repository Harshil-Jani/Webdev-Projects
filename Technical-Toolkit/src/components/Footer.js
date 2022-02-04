import './styles/Footer.css'

export default function Footer(){
    const year = new Date().getFullYear();
    console.log(year);
    
    return (
        <div className='footer'>
        <p><b>©{year}</b> Made By <b id="name">Harshil Jani</b> with objective to know more about <b id="react">React</b>.</p>
        </div>
    )
}