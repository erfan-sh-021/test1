import axios from "axios"
import { useState } from "react"


function Data() {
    const [data, setData] = useState([]);

    axios.get('https://hapi.pardikiot.com/api/MirrorFoods/GetWithCategoryByLanguageAndMealTime/735e364f-1b29-4622-ad24-aaf44e8be7d0/00%3A00%3A00').then((res) => {
        setData(res.data)
        // console.log(res, 'is  response')
    }).catch(err => console.log(err, 'is error!'))
    return ( 
        <>
        console.log(data)
        {data}
        </>
     );
}

export default Data;
