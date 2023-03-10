
import "@fontsource/montserrat"; // Defaults to weight 400.
import "@fontsource/roboto"; // Defaults to weight 400.

import {Routes, Route, useNavigate} from 'react-router-dom'
import Cards from './components/Cards';
import Services from './components/Services';
import {About} from './screens/About/About';
import {Contact} from './screens/Contact/Contact';
import {OurProperties} from './screens/ourProprties/OurProperties';
import {News} from './screens/News/News';
import {MLS} from './screens/MLS/MLS';
import {Communities} from './screens/Communities/Communities';
import {Home} from './components/Home';
import {Readmore} from './screens/Readmore/Readmore'
import {Nextpage} from './screens/News/Nextpage'

import { DashboardLayout } from "./layouts/dashboard";
import { AddBlogs } from "./screens/addBlogs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { token } from "./features/authenticationSlice";


import HomeCards from './components/HomeCards';
import AboutCards from "./components/AboutCards";

import { Lostpassword } from "./screens/Login/Lostpassword";
import {View} from "./components/View"

import {Navbar} from './components/Navbar'

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn, "Login Status");

  useEffect(() => {
    dispatch(token(JSON.parse(localStorage.getItem("token"))));
  }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/addBlogs" element={<AddBlogs />} />
          <Route path="/dashboard/services" element={<Services />} />
          <Route path="/dashboard/about" element={<About />} />
          <Route path="/dashboard/mls" element={<MLS />} />
          <Route path="/dashboard/news" element={<News />} />
        </Route>

        <Route path='/' element={<Home/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mls' element={<MLS/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/communities' element={<Communities/>}/>
        <Route path='/ourproperties' element={<OurProperties/>}/>

        <Route path='/homecards' element={<HomeCards/>}/>
        <Route path='news/readmore' element={<Readmore/>}/>
        <Route path='news/readmore/page2' element={<Nextpage/>}/>
        <Route path='about/aboutcards' element={<AboutCards/>}></Route>
        
        <Route path='/lostpassword' element={<Lostpassword/>}></Route>
        <Route path='/ourproperties/view' element={<View/>}></Route>
        
     
        
        
      </Routes>
      
    </>
  );
}

export default App;
