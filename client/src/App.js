import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Map from './components/Map';
// Review component not yet apprearing on page
import Review from './components/Review';

function App() {
  return (
    <div className='App'>
      <Review />
      {/* <h1>Google Maps App</h1>
      <Map /> */}
    </div>
  );
}

export default App;
