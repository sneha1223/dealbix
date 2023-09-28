import React from 'react';
import './App.css';


// import Topbar from './Components/Topbar/Topbar';
import Banner from './Components/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Sale from './Pages/Sale/Sale';
import Footer from './Components/Footer/Footer';
import SinglePage from './Pages/SinglePage/SinglePage';
import Sid from './Sid/Sid';
import Pagination from './Sid/Sid';
import SingleMotor from './MotorCycle/SingleMotor/SingleMotor';
import CycleSale from './MotorCycle/CycleSale/CycleSale';
import NumberSale from './NumberPlate/NumberSale/NumberSale';
import SingleNumber from './NumberPlate/SingleNumber/SingleNumber';
import BoatSale from './Boats/BoatSale/BoatSale';
import SingleBoats from './Boats/SingleBoat/SingleBoats';
import AccessoriesSale from './Accessories/AccessoriesSale/AccessoriesSale';
import SingleAccessories from './Accessories/SingleAccessories/SingleAccessories';
import VehicleSale from './Vehicles/VehicleSale/VehicleSale';
import SingleVehicle from './Vehicles/SingleVehicle/SingleVehicle';
import OwlCarousel from './OwlCarousel';


function App() {

  return (
    <div className="App">
     
  {/* <Topbar /> */}
  {/* <OwlCarousel /> */}
     {/* <Sid /> */}
     {/* <Pagination /> */}
     <Routes>
      <Route path='/' element={<Banner />}></Route>
      <Route exact path='/sale' element={<Sale/>}/>
      <Route path='/single/:mtr_slug' element={<SinglePage />} />

      <Route path='/motorcycle' element={<CycleSale />} />
      <Route path='/single-motor/:mtr_slug' element={<SingleMotor />} />

      <Route path='/number' element= {<NumberSale />} />
      <Route path='/single-number/:mtr_slug' element={<SingleNumber />} />

      <Route path='/boats' element={<BoatSale />} />
      <Route path='/single-boat/:mtr_slug' element={<SingleBoats />} />

      <Route path='/accessories' element={<AccessoriesSale />} />
      <Route path='/single-acess/:mtr_slug' element={<SingleAccessories />} />

      <Route path='/vehicles' element={<VehicleSale />} />
      <Route path='/single-vehicle/:mtr_slug' element={<SingleVehicle />} />
     </Routes>
     <Footer />
     
    </div>
  );
}

export default App;
