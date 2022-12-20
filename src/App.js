
import './App.css';
import Baner from './Components/Baner/Baner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {acttion,original,trending,comedy,horror,romance,documentary} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Baner /> 
      <RowPost title="Netflix Orginal" url={original}/>
      <RowPost title="Trending" url={trending}/>
      <RowPost  title="Actions" isSmall url={acttion} />
      <RowPost  title="Comedy" isSmall url={comedy} />
      <RowPost  title="Horror" isSmall url={horror} />
      <RowPost  title="Romance" isSmall url={romance} />
      <RowPost  title="Doocumentries" isSmall url={documentary} />

    </div>
  );
}

export default App;
