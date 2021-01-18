import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './components/Map';
import Reviews from './components/Reviews';
// import ReviewInput from './components/ReviewInput';
// Review component not yet apprearing on page
import Review from './components/Review';

function App() {
  return (
    <div className='App'>
      <Review />
      {/* <ReviewInput /> */}
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
