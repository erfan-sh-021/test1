import MainCategory from "./category/mainCategory";



const Main = ({Data}) => {
    return (
        <>
            <div className='parrent'>           
                    <MainCategory Data={Data} />
            </div>
        </>
    );
}

export default Main;