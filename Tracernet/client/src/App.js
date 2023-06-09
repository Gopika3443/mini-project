import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontpage from "./components/Frontpage";
import { ChakraProvider } from '@chakra-ui/react';
import LostPeopleForm from './components/LostPeopleForm';
import HomePage from './components/HomePage';
import FeedBack from './components/FeedBack';
import FoundPeopleForm from './components/FoundPeopleForm';
import MissingList from './components/MisiingList';
import FoundList from './components/FoundList';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Frontpage />}></Route>
          <Route path='/addCase' element={<LostPeopleForm />}></Route>
          <Route path='/Home' element={<HomePage />}></Route>
          <Route path='/Feed' element={<FeedBack />}></Route>
          <Route path='/Found' element={<FoundPeopleForm />}></Route>
          <Route path='/Cases' element={<MissingList />}></Route>
          <Route path='/Lost' element={<LostPeopleForm />}></Route>
          <Route path="/FoundL" element={<FoundList/>}></Route>







        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );


}

export default App;
