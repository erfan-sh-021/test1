import '../../css/buy.css'
const FoodList = () => {
    
    return (
        <>
            <tbody>
                <tr>
                    <td>Food 01</td>
                    <td className='count'><button>-</button><span>0</span><button>+</button></td>
                    <td>$23.20</td>
                </tr>

            </tbody>
        </>
    );
}

export default FoodList;