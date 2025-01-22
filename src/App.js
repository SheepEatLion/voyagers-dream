import NavBar from "./NavBar";
import Image from "./Image";
import './App.css';
import sample from './assets/Mars_surface.png';

function App() {

  return (
      <div>
        <NavBar />
        <Image src={sample} alt="sample"></Image>
      </div>
  );
}

export default App;
