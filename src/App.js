import React from 'react';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Banner from './Components/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Sale from './Pages/Sale/Sale';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Topbar />
     {/* <Banner />
     <Motors />
     <Listings />
     <Testimonials /> */}

     {/* <Banner /> */}

     <Routes>
      <Route path='/' element={<Banner />}></Route>
      <Route exact path='/sale' element={<Sale/>}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
