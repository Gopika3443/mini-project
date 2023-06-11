import {BrowserRouter, Route, Routes}   from 'react-router-dom'
import Frontpage from "./components/Frontpage";
import { ChakraProvider } from '@chakra-ui/react';
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <ChakraProvider>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Frontpage/>}></Route>
  <Route path='/ContactForm' element={<ContactForm/>}></Route>
  

</Routes>
</BrowserRouter>    
</ChakraProvider>  
  );


}

export default App;
