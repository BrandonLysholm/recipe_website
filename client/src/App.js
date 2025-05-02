// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

// import logo from './logo.svg';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages';
import IngredientCategories from './pages/ingredientCategories';
import RecipeCategories from './pages/recipeCategories'


// Components
import myNav from "./components/navbar";
import Create from './components/create'
import Update from './components/update'


function App() {
  return (

      <Router>
          <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
              integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
              crossOrigin="anonymous"
          />
          {myNav()}
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/ingredientCategories" element={<IngredientCategories/>}/>
              <Route path="/recipeCategories" element={<RecipeCategories/>}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/update" element={<Update/>}/>
          </Routes>
      </Router>
  );
}

export default App;
