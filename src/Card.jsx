import pfp from './assets/Portrait.jpg'

const Card = () => {
    return ( 
        <div className="card">
            <img className='cardImg' src={pfp} alt="Profile Picture" />
            <h2 className='cardTitle'>Matthew Li</h2>
            <p className='cardTxt'>I am a senior at CSUF in the computer science department.</p>
        </div>
     );
}
 
export default Card;
