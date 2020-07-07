import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import './App.css';

// components
import Search from './components/Search'

// keys
import keys from './keys'

function App() {

  // title of the app
  const Title = styled.h1`  
    font-weight: 700;  
  `


  // state variables 
  const [recipies, setRecipies] = useState([])
  const [searchValue, setSearchValue] = useState('idli') // state variable for search box
  const [loaded, setLoaded] = useState(false) // state variable for loading
  


  const request = `https://api.edamam.com/search?q=${searchValue}&app_id=${keys.APP_ID}&app_key=${keys.APP_KEY}&from=0&to=50`

  useEffect(() => {

    const fetchRecipes = async () => {
      const response = await fetch(request)
      const data = await  response.json()
      setRecipies(data.hits)
      
      // set data has been loaded
      setLoaded(true)
    }

    // fetchRecipes()

  }, [searchValue])

  

  
  return (
    <div className="App">
      <Title>Foodie</Title>

      <Search setSearchValue={setSearchValue} />


    </div>
  );
}

export default App;
