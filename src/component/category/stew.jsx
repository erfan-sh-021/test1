import Card from "../card";

const Stew = (Data) => {
    const filterData = Data.Data.map((post,index) => {
        // console.log(post.categoryTitle)
        if (post.categoryTitle === 'Stew') {
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

export default Stew;