import './App.css';
import Row from "./Row";
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
       isLargeRow
       title="Netflix Originals" fetchUrl={requests.fetchNetflixMovies} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchtopratedMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchdocumentryMovies} />

    </div>
  );
}

export default App;
