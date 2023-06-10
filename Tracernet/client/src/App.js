import Land from "./components/Land";
import {BrowserRouter, Route, Routes}   from 'react-router-dom'
import Signup from "./components/Signup";
import Lost from "./components/Lost";
import Frontpage from "./components/Frontpage";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
<BrowserRouter>
<Routes>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/' element={<Frontpage/>}></Route>
  <Route path='/lost' element={<Lost/>}></Route>
  

</Routes>
</BrowserRouter>    
</ChakraProvider>  
  );


}

export default App;
