import NavBar from "./NavBar";
import Image from "./Image";
import './App.css';
import sample from './assets/Mars_surface.png';
import rocket from './assets/Rocket.png';
import Text from "./Text";
import Panel from "./Panel";

function App() {

  return (
      <div>
        <NavBar />
        <Text title="Voyager's Dream" subtitle="Photo from the Cosmos"></Text>
        <Image src={sample} alt="sample"></Image>
        <Panel image1={rocket} image2={rocket}></Panel>
      </div>
  );
}

export default App;
