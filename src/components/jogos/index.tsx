import './style.css';

interface JogosProps {
    image: string;
    title: string;
    price: string;
}

const Jogos = (props: JogosProps) => {
    return (
        <div className="jogos-box">
            <img src= {props.image} alt= "tabuleiro manopoly" className='image'/>
            <div className='text'>
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default Jogos;