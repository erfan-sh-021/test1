import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/main';
import Kabab from './component/category/kabab';
import Vegeterian from './component/category/vegeterian';
import Stew from './component/category/stew';
import FirstLayout from './component/layout_1';
import { useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => { 
    axios.get('https://hapi.pardikiot.com/api/MirrorFoods/GetWithCategoryByLanguageAndMealTime/735e364f-1b29-4622-ad24-aaf44e8be7d0/00%3A00%3A00').then((res) => {
      setData(res.data)
    }).catch(err => console.log(err, 'is error!'))
  
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={<FirstLayout />}>
            <Route exact path='/' element={<Main Data={data} />} />
            <Route path='/kabab' element={<Kabab Data={data} />} />
            <Route path='/vegeterian' element={<Vegeterian Data={data} />} />
            <Route path='/stew' element={<Stew Data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
