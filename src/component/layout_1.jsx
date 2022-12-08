import { Outlet } from "react-router-dom";
// import Card from "./card";
import Nav from "./nav";
import Payment from "./paymentt/payment";
const FirstLayout = (Data) => {
    // console.log(Data)
    return (
        <>
            <div className='parrent'>
                <div className="left">
                    <Nav />
                    <Outlet />
                </div>
                <div className="right">
                    <div className="payment">
                        <Payment />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstLayout;