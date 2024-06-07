import './App.css';
import Navbar from "./components/navbar";
import Gridabout from "./components/grid-about";
import Card from "./components/card";
import Data from "./components/data";

function App() {
  const products = Data.map(item =>{
    return <Card
      key={item.id}
      item={item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Gridabout />
      <div className='cards'>
        {products}
      </div>
    </div>
  );
}

export default App;
