import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import axios from 'axios'
import App from './App.jsx'
import Header from './Header/Header.jsx'
import NavBar from './Navbar/Navbar.jsx'
import Clock from './Clock/Clock.jsx'
import MainContent from './mainContent/MainContent.jsx'
import Footer from './Footer/Footer.jsx'

const randomIntValue = Math.floor(Math.random() * 5 + 1)
const users = [];
for (let i = 0; i < 4; i++){
  let response;
  try {
      response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${randomIntValue + i}`,
      )
  }
  catch (err) {
      console.log(err);
      response = 'check';
  }
  console.log(response);
  users.push(response);
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <NavBar />
    <Clock />
    <MainContent users={users}/>
    <Footer />
  </StrictMode>,
)
