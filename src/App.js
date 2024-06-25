import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero-section';
import PostSection from './components/PostSection';
import Card from './components/Card';
import SideSection from './components/SideSection';
import HiddenForm from './components/HiddenForm';

function App() {
  
  return (
     <div>
      <Navbar />
      <HeroSection />
      <PostSection />
      
      <div className='mid-section flex mt-10 mx-[10%] justify-between gap-10'>
      <Card />
      <SideSection />
      </div>
      <HiddenForm/>
     </div>
  );
}

export default App;
