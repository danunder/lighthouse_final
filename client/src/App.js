import './App.css';
import Map from './components/Map';
import Reviews from './components/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <h1>Rentopedia</h1>
      <div className='container-fluid review-container'>
        <div className='row'>
          <Reviews />
        </div>
      </div>
      <Map />
    </div>
  );
}

export default App;
