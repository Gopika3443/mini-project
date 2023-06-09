import Land from "./components/Land";
import {BrowserRouter, Route, Routes}   from 'react-router-dom'
import Signup from "./components/Signup";
import Lost from "./components/Lost";
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/' element={<Land/>}></Route>
  <Route path='/lost' element={<Lost/>}></Route>

</Routes>
</BrowserRouter>      
  );
}

export default App;
