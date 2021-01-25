import React from 'react';
import { FaCommentsDollar } from 'react-icons/fa';

import './styles.css'


export default function TenancyForm(props) {

  const validate = props.onNext;

  const validateTenancy = () => {
    if (validate === "missing field") {
      console.log("missing field")
    } else if (validate === "future date") {
      console.log("future date")
    } else if (validate === "time travel") {
      console.log("You are a time traveler! You moved out of your flat before you even moved in!");
    } else {
      props.onNext()
    }
  }

  return (
    <section className='card-show'>
      <div className='card'>
        <h5 className='card-header'>When did you live here?</h5>
        <div className='card-body'>
          <h5>Moved in on:</h5>      
          <div className='form-group'>
            <input
              className="form-control"
              type="month"
              value={props.startDate}
              id="tenancy-start-date"
              onChange={e => props.onStartChange(e.target.value)} />
              <h5>Moved out on:</h5>
            <input
              className="form-control"
              type="month"
              value={props.endDate}
              id="tenancy-end-date"
              onChange={event => props.onEndChange(event.target.value)} />
            <button className='btn btn-outline-dark' onClick={props.onBack}>
              Back
            </button>
            <button type='submit' className='btn btn-outline-dark' onClick={() => validateTenancy()} >
              Next Review 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
