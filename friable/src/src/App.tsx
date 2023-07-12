//import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {QueryPayload} from 'shared_data';
// import container from "@mui/material/Container"
// import ResultCard from './components/ResultCard';
// import AppBar from './components/AppBar';
// import { Container, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Results from './pages/Results/Results';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SingUP from './pages/SingUp/SingUP';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import ListOfIngredients from './pages/ListOfIngredients/ListOfIngredients';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import UserCookBook from './pages/UserCookBook/UserCookBook';
import RecipeSelectBar from './components/RecipeSelectBar';
import ListOfIngredientss from './pages/ListOfIngredients/listofIngredientss';
import RecipeIngRow from './components/RecipeIngRow';

import Home1 from './pages/Home/Home1';
import UserCookBookk from './pages/UserCookBook/UserCookBookk';
// import AppBar from '@mui/material';

function App() {
 
  
    return (
     
    <BrowserRouter>
      <Routes>
        <Route path= "/"  element={<Home/>} />
        {/* <Route path= "CardOfIngredient"  element={<CardOfIngredient/>} /> */}
        <Route path= "/Home1"  element={<Home1/>} />
        <Route path ="/Results" element={<Results/>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/SingUp" element={<SingUP/>}/>
        <Route path ="/ListOfIngredients" element={<ListOfIngredients/>}/>
        <Route path ="/ListOfIngredientss" element={<ListOfIngredientss/>}/>
        {/* <Route path ="/AddRecipe" element={<AddRecipe ingredientsList={[]} />}/> */}
        <Route path ="/AddRecipe" element={<AddRecipe/>}/>
        <Route path= "/RecipeDetails"  element={<RecipeDetails />} />
        <Route path ="/UserCookBook" element={<UserCookBook/>}/>
        <Route path ="/RecipeSelectBar" element={<RecipeSelectBar/>}/>
        <Route path ="/RecipeIngRow" element={<RecipeIngRow/>}/>
        <Route path ="/UserCookBook" element={<UserCookBook/>}/>
        <Route path ="/UserCookBookk" element={<UserCookBookk/>}/>
      </Routes>
    </BrowserRouter>);

}

export default App;
