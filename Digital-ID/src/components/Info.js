import './Info.css'

export default function Info() {
    return (
        <div className='main'>
            <div>
                <h1 className="name">Harshil Jani</h1>
                <p>Student SVNIT '24 ECE</p>
                <p>Open Source Enthusiast</p>
            </div>
            <div className='buttons'>
                <a href="https://github.com/Harshil-Jani" target="_blank"><button className="github">Github</button></a>
                <a href="https://www.linkedin.com/in/harshil1/" target="_blank"><button className="linkedin">LinkedIn</button></a>
            </div>
        </div>
    )
}