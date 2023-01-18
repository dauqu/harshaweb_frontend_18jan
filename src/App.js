import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Header_index from './components/Header_index';
import Footer from './components/Footer';
import Shop from './components/Shop';
import About from './components/About';
import It_solution from './components/It_solution';
import Blog from './components/Blog';
import Blog_single from './components/Blog_single';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Website_development from './components/Website_development';
import Application_development from './components/Application_development';
import Admin from './components/Admin';
import Login from './components/Login';
import User_login from './components/User_login';
import User_register from './components/User_register';
import User_admin from './components/User_admin';
import axios from 'axios';
import Paypal_success from './components/Paypal_success';
import Paypal_failure from './components/Paypal_failure';
import Razorpay_success from './components/Razorpay_success';
import Razorpay_failure from './components/Razorpay_failure';
import Reviews_slider from './components/Reviews_slider';
import File_upload from './components/File_upload';
import Our_projects_slider from './components/Our_projects_slider';
import Upload_file_app from './components/Upload_file_app';
import Upload_file_web from './components/Upload_file_web';
import Payment from './components/Payment';
import Base from './components/Base/Base';

import App_reqs from './components/App_reqs';
import Web_reqs from './components/Web_reqs';
import Contacts from './components/Contacts';
import Quotes from './components/Quotes';
import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
        <Route path='/header_index' element={<Header_index/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/it-solution' element={<It_solution/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog_single' element={<Blog_single/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/website-development' element={<Website_development/>}></Route>
        <Route path='/application-development' element={<Application_development/>}></Route>
        {/* <Route path='/admin' element={<Admin/>}></Route> */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/user-login' element={<User_login/>}></Route>
        <Route path='/user-register' element={<User_register/>}></Route>
        <Route path='/user-admin' element={<User_admin/>}></Route>
        <Route path='/paypal-success' element={<Paypal_success/>}></Route>
        <Route path='/paypal-failure' element={<Paypal_failure/>}></Route>
        <Route path='/razorpay-success' element={<Razorpay_success/>}></Route>
        <Route path='/razorpay-failure' element={<Razorpay_failure/>}></Route>
        <Route path='/reviews-slider' element={<Reviews_slider/>}></Route>
        <Route path='/file-upload' element={<File_upload/>}></Route>
        <Route path='/our-projects-slider' element={<Our_projects_slider/>}></Route>
        <Route path='/upload-file-app' element={<Upload_file_app/>}></Route>
        <Route path='/upload-file-web' element={<Upload_file_web/>}></Route>
        <Route path='/dashboard' element={<Base/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/app-reqs' element={<App_reqs/>}></Route>
        <Route path='/web-reqs' element={<Web_reqs/>}></Route>
        <Route path='/web-reqs' element={<Web_reqs/>}></Route>
        <Route path='/quotes' element={<Quotes/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
