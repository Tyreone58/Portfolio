import './App.css'
import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <div className = "container">
        <Header />
        <main className = "Main-content">
          <Routes>
            <Route path ="/" element={<AboutMe/>} />
            <Route path ="/portfolio" element={<Portfolio/>} />
            <Route path ="/ContactForm" element={<ContactForm/>} />
            <Route path ="/Resume" element={<Resume/>} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Header/>
    </Router>
       
    </>
  );
};

export default App
