import './App.scss'
import LazyLoad from './LazyLoad'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <div className="app_container">
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="/about" element={LazyLoad(() => import("@pages/Abouts/About"))()} />
          <Route path="/about" element={LazyLoad(() => import("@pages/Abouts/About"))()} >
            {/* Route con của About */}
            <Route path="my-infor" element={LazyLoad(() => import("@pages/Abouts/MyInfors/MyInfor"))()} />/
          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
