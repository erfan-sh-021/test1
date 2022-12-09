import { useDispatch, useSelector } from 'react-redux';
import '../../css/buy.css'
const FoodList = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter.value);
    return (
        <>
            <tbody>
                <tr>
                    <td>Food 01</td>
                    <td className='count'><button>-</button><span>{value}</span><button>+</button></td>
                    <td>$23.20</td>
                </tr>

            </tbody>
        </>
    );
}

export default FoodList;