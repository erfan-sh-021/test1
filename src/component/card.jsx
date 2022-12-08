import '../css/card.css';
import React, { useState } from 'react';
import axios from 'axios';


const Card = (Data) => {
   
    // const [data, setData] = useState([]);

    // axios.get('https://hapi.pardikiot.com/api/MirrorFoods/GetWithCategoryByLanguageAndMealTime/735e364f-1b29-4622-ad24-aaf44e8be7d0/00%3A00%3A00').then((res) => {
    //     setData(res.data)
    //     // console.log(res, 'is  response')
    // }).catch(err => console.log(err, 'is error!'))
    // const data={data}
    // console.log(Data.Data[0])
    return (

        <div className="row">
            {
                Data.Data.map((post,index) => {
                    return (
                        <div className="card " key={index} style={{ width: '25rem', margin: '10px' }}>
                            <div className="cardTop">
                                <div className="cardLeft">
                                    <h5 className="card-title">{post.foods[0].title}</h5>
                                    <p className="card-text overflow-hidden">{post.foods[0].description}</p>
                                </div>
                                <div className="cardRight">
                                    <img src={post.foods[0].imageUrl} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="cardBottom">
                                <span>price: ${post.foods[0].price}</span>
                                <a href="#" className="btn btn-primary">Add</a>
                            </div>
                        </div>
                    )
                })


            }
        </div>

    )
}

export default Card;