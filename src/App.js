import React, { useEffect, useState } from 'react';
import CustomChips from 'react-custom-chips'
import styled from 'styled-components'
import './App.css';

// components
import Search from './components/Search'

// keys
import keys from './keys'
import RecipeCard from './components/RecipeCard'
import Loading from './components/Loading';

function App() {

  // title of the app
  const Title = styled.h1`  
    font-weight: 700;  
  `

  const ListWrapper = styled.div`

    display: flex;
    flex-direction: column;
    flex: 0 0 65%;
    padding: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  `


  // state variables 
  const [recipies, setRecipies] = useState([])
  const [searchValue, setSearchValue] = useState('idli') // state variable for search box
  const [loading, setLoading] = useState(true) // state variable for loading



  const request = `https://api.edamam.com/search?q=${searchValue}&app_id=${keys.APP_ID}&app_key=${keys.APP_KEY}&from=0&to=50`

  useEffect(() => {

    
    const fetchRecipes = async () => {

      // set loading state to true
      setLoading(true)

      // fetch data from API and set to state Variable
      const response = await fetch(request)
      const data = await response.json()
      setRecipies(data.hits)
      
      


      // set data has been loaded
      setLoading(false)
      console.log('in effect')
    }

    fetchRecipes()

  }, [searchValue])




  return (
    <div className="App">
      <Title>Foodie <span role="img" aria-label="img">🍕🍔🍟</span></Title>

      <Search setSearchValue={setSearchValue} />
      
      <ListWrapper>
        {
          (() => {

            switch(loading) {
              case true: 
                return (<Loading />)
              case false: 
                return (
                  recipies.map((recipe) => {
                    return (
                        <RecipeCard 
                          key={recipe.recipe.label} 
                          title={recipe.recipe.label} 
                          calories={recipe.recipe.calories} 
                          image={recipe.recipe.image}
                          ingredients={recipe.recipe.ingredients} 
                          url={recipe.recipe.url}
                          fat={recipe.recipe.totalNutrients.FAT.quantity}
                          carbs={recipe.recipe.totalNutrients.CHOCDF.quantity}
                          protien={recipe.recipe.totalNutrients.PROCNT.quantity}
                        />
                    )
                  })
                )
              default: return ( <Loading />)
          
            }


          })()
        }
      </ListWrapper>

    </div>
  );
}

export default App;
