import { Link } from 'react-router-dom';
import '../css/nav.css'
const Nav = () => {
    return (
        <>
            <div className='navGroup'>
                <Link to={'/'}>
                    <button className='navButton'>Main Category</button>
                </Link>
                <Link to={'/kabab'}>
                    <button className='navButton'>kabab</button>
                </Link>
                <Link to={'/vegeterian'}>
                    <button className='navButton'>vegeterian</button>
                </Link>
                <Link to={'/stew'}>
                    <button className='navButton'>stew</button>
                </Link>
            </div>
        </>
    );
}

export default Nav;