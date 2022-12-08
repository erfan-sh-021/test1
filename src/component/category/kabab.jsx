
import '../../css/card.css';
import Card from '../card';
const Kabab = (Data) => {
    const filterData = Data.Data.map((post,index) => {
        // console.log(post.categoryTitle)
        if (post.categoryTitle === 'Kebab') {
            return (
                <Card Data={post}/>
            )
        }else(
            console.log('not find')
        )
    })

    return (
        <>
        <div className="row">
            {filterData}
        </div>
        </>
    );
}

export default Kabab;