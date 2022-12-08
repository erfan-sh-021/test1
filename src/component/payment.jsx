import '../css/payment.css';

const Payment = () => {

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
                <tbody>
                    <tr>
                        <td>Food 01</td>
                        <td className='count'><button>+</button><span>1</span><button>-</button></td>
                        <td>$23.20</td>
                    </tr>

                </tbody>
            </table>
            <div className="bottom">
                <span>total Price:</span>
                <button>order</button>
            </div>
        </>
    );
}

export default Payment;