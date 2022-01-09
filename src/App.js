import './App.css';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Banner from './Components/Home/Banner';
import Form from './Components/Register/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Header/>
    <Banner/>
    <Form/>
    <Footer/>

     
    </div>
  );
}

export default App;
