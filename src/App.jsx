import './css/App.css';
import Nav from './component/nav';
import { Row, Col, CardImg, CardBody } from 'reactstrap';
import Card from './component/card';
import Payment from './component/payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  axios.get('https://hapi.pardikiot.com/api/MirrorFoods/GetWithCategoryByLanguageAndMealTime/735e364f-1b29-4622-ad24-aaf44e8be7d0/00%3A00%3A00').then((res) => {
    setData(res.data)
    // console.log(res, 'is  response')
  }).catch(err => console.log(err, 'is error!'))
  // console.log(data)
  return (
    <>
    <HashRouter>
      <div className='parrent'>
        <div className="left">
          <Nav />
          <Card Data={data}/>
        </div>
        <div className="right">
          <div className="payment">
            <Payment />
          </div>
        </div>
      </div>
      </HashRouter>
    </>
  );
}

export default App;
