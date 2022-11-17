import './App.css';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MernchingBand } from './views/MernchingBand';
import { NotFound } from './views/NotFound';
import { Home } from './views/Home';
import { NewCard } from './views/NewCard';
import { AllCards } from './views/AllCards';
import { EditCard } from './views/EditCard';
import { OneCard } from './views/OneCard';


function App() {
  const location = useLocation();
  return (
    <div>
      {/* <nav className="bg-light sticky-top mb-4">
        <div className="d-flex justify-content-around p-3">
          {
            location.pathname !== "/pets" && <Link
              to="/pets"
              className='btn btn-sm btn-outline-primary mx-1'>
              Back To Home
            </Link>
          }
        </div>
      </nav> */}
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mernchingband' element={<MernchingBand />} />
        <Route path='/mernchingband/:id/edit' element={<EditCard />} />
        <Route path='/mernchingband/:id' element={<OneCard />} />
        <Route path='/mernchingband/new' element={<NewCard />} />
        <Route path='/mernchingband/all' element={<AllCards />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
