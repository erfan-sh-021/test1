import Card from "../card";

const Vegeterian = ({Data}) => {
    const filterData = Data.map((post,index) => {
        // console.log(post.categoryTitle)
        if (post.categoryTitle === 'Vegeterian') {
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

export default Vegeterian;