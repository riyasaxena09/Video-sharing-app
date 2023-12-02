import Main from "./main"
import Sign from "./Signup"
import {BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router';

import { Route } from 'react-router';
function App(){
  
  return (
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Sign></Sign>}></Route>
  <Route path='/you' element={<Main></Main>}></Route>
 
  </Routes>
 </BrowserRouter>

  )
}
export default App;