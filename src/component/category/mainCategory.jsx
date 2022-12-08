import '../../css/card.css';

import Card from '../card';
const MainCategory = ({Data}) => {
    return (
        <div className="row">
            {
                Data.map((post, index) => {
                    return (
                       <Card Data={post}/>
                    )
                })


            }
        </div>

    )
}

export default MainCategory;