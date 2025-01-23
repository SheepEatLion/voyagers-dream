import NavBar from "./NavBar";
import Image from "./Image";
import './App.css';
import sample from './assets/Mars_surface.png';
import sample1 from './assets/SampleImage1.jpg';
import sample2 from './assets/SampleImage2.jpg';
import Text from "./Text";
import Panel from "./Panel";
import Footer from "./Footer";

function App() {

  return (
      <div>
        <NavBar />
        <Text title="Voyager's Dream" subtitle="Photo from the Cosmos"></Text>
        <Image src={sample} alt="sample"></Image>
        <Panel image1={sample1} image2={sample2}></Panel>
        <Footer></Footer>
      </div>
  );
}

export default App;
