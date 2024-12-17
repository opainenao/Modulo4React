import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

const App = () => (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
);


export default App
