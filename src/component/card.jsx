import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from '../redux/counterSlice';
const Card = ({ Data }) => {
    // console.log(Data)
    const AddButton = document.querySelector('.cardBottom > button');
    const PayButton = document.querySelector('.payButton ');
    const Cardd = document.querySelector('.card');

    const dispatch = useDispatch();
    const value = useSelector(state => state.counter.value);

    const hendleClick = () => {

        AddButton.classList.add('deactive');
        PayButton.classList.remove('deactive');
        Cardd.classList.add('hover');

    }
    return (
        <>
            <div className="card " style={{ width: '25rem', margin: '10px' }}>
                <div className="cardTop">
                    <div className="cardLeft">
                        <h5 className="card-title">{Data.foods[0].title}</h5>
                        <p className="card-text overflow-hidden">{Data.foods[0].description}</p>
                    </div>
                    <div className="cardRight">
                        <img src={Data.foods[0].imageUrl} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="cardBottom">
                    <span>price: ${Data.foods[0].price}</span>
                    <button onClick={hendleClick} href="#" className="btn btn-primary">Add</button>
                </div>
                <div className="payButton deactive">
                    <button>-</button>
                    <span>{value}</span>
                    <button>+</button>
                </div>
            </div>
        </>
    );
}

export default Card;