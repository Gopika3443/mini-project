import {BrowserRouter, Route, Routes}   from 'react-router-dom'
import Frontpage from "./components/Frontpage";
import { ChakraProvider } from '@chakra-ui/react';
import LostPeopleForm from './components/LostPeopleForm';
import HomePage from './components/HomePage';
import FeedBack from './components/FeedBack';
import AboutUs from './components/AboutUs';
import FoundPeopleForm from './components/FoundPeopleForm';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MissingList from './components/MisiingList';

function App() {
  return (
    <ChakraProvider>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Frontpage/>}></Route>
  <Route path='/Lost' element={<LostPeopleForm/>}></Route>
  <Route path='/Home' element={<HomePage/>}></Route>
  <Route path='/Feed' element={<FeedBack/>}></Route>
  <Route path='/About' element={<AboutUs/>}></Route>
  <Route path='/Found' element={<FoundPeopleForm/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/Signup' element={<SignUp/>}></Route>
  <Route path='/ListL' element={<MissingList/>}></Route>







</Routes>
</BrowserRouter>    
</ChakraProvider>  
  );


}

export default App;
