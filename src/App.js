import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <>
      <div className='w-screen h-screen bg-slate-900'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<Movie/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
