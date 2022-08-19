import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/style.css'
import HomePage from 'pages/HomePage';
import HomePage2 from 'pages/HomePage2';
import HomePage3 from 'pages/HomePage3';
import ListingPage from 'pages/ListingPage';
import ListingPage2 from 'pages/ListingPage2';
import ListingDetail2 from 'pages/ListingDetail2';
import ListingDetail3 from 'pages/ListingDetail3';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-2" element={<HomePage2 />} />
        <Route path="/home-3" element={<HomePage3 />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/listing-2" element={<ListingPage2 />} />
        <Route path="/listing-detail-2" element={<ListingDetail2 />} />
        <Route path="/listing-detail-3" element={<ListingDetail3 />} />
      </Routes>
    </>
  );
}

export default App;
