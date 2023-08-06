import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { actions, orginals } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Originals" />
      <RowPost url={actions} title="Action" isSmall/>
    </div>
  );
}

export default App;
