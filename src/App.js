import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useFavorets} from './hooks/useFavorets'
import Card from './components/Card';
import './styles/main.css'
import Header from './components/Header';
import { useGetReciepsQuery } from './store/api/api';
import ReciepForm from './components/create-react/ReciepForm';

function App() {

  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    setQuery(search)
  }
   // const userId = null

  const {data, isLoading} = useGetReciepsQuery(query) 

  // undefind
  // {skip: !userId}

  return (
    <div className="App">
      <Header/>
      <ReciepForm/>
      <div className='search' >
        <p>If you wanna find:</p>
        <input 
            type='search' 
            placeholder='Enter search term' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <button onClick={handleSearch} >Search</button>
        </div>
      </div>
      {
        isLoading
              ? <div className='loader' >Loading...</div>

              : data 
                  ? data.map(reciep => 
                    <Card key={reciep.id} reciep={reciep} />)
                  : <div className='error' > Not found  </div>
      }
    </div>
  );
}

export default App;
