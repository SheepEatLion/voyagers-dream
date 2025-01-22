import NavBar from "./NavBar";
import Image from "./Image";
import './App.css';
import sample from './assets/Mars_surface.png';
import Text from "./Text";

function App() {

  return (
      <div>
        <NavBar />
        <Text title="Voyager's Dream" subtitle="Photo from the Cosmos"></Text>
        <Image src={sample} alt="sample"></Image>
      </div>
  );
}

export default App;
