import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Map from './components/Map';
// Review component not yet apprearing on page
import Review from './components/Review';
import ReviewForm from './components/Review/ReviewForm';


function App() {
  return (
    <div className='App'>
      
      <ReviewForm />
      <Map>

      </Map>
    </div>
  );
}

export default App;
