import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './component/Header';
import {BrowserRouter  , Route, Routes} from 'react-router-dom'
import Login from "./authentication/Login"
import Register from "./authentication/Registration"
import AddProduct from "./product/AddProduct";
import UpdateProduct from "./product/UpdateProduct";
function App() {
  //Hellow
  return (
    <div className="App">
      <BrowserRouter>
      {/* <button>Normal Button</button>
      <Button>bootstrap Button</Button> */}
      <Header/>
      <h1>E-Comm Project</h1>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update' element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
