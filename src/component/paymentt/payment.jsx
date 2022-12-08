import '../../css/payment.css';
import Buy from './buy';
import FoodList from './foodList';

const Payment = ({props}) => {
// console.log(props)
    return (
        <>
            <h3>Final bill</h3>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <FoodList />
            </table>
            <div className="bottom">
                <span>total Price:</span>
            </div>
                <Buy/>
        </>
    );
}

export default Payment;