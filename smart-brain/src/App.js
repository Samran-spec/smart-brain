
import './App.css';
import ImageLinkForm from './components/imageForm/ImageLinkForm';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* <Navigation/>
      <Logo/>
      <ImageLinkForm/>
      <FaceRecognition/> */}

      
    </div>
  );
}

export default App;
