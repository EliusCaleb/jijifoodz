
import './App.scss';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {Home,Error,MealDetails,Category} from './pages/index'
import {Route,Routes}from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meal/:id' element={<MealDetails/>}/>
        <Route path='/meal/category/:name' element={<Category/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
