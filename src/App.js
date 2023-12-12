import './App.css';
import Card from './pages/Card';
import Home from './pages/Home';
import Couple from './pages/Couple';
import Event from './pages/Event';
import Footer from './components/Footer';
import Comm from './pages/Comment';
// import FrontPage from './pages/FrontPage';
// import Ably from './components/Ably';


function App() {
  return (
      <div className='min-h-screen overflow-x-auto bg-floral-pattern backdrop-blur'>
        {/* <FrontPage /> */}
        <Card />
        <Home />
        <Couple /> 
        <Event />
        {/* <Comm /> */}
        <Footer />
      </div>    
  );
}

export default App;
