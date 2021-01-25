import React, { useState } from 'react';
import { FaCommentsDollar } from 'react-icons/fa';

import './styles.css'


export default function TenancyForm(props) {

  const {startDate, endDate, onNext} = props

  const [errorMessage, setErrorMessage] = useState('')

  // verifies that the dates check out
  const validateTenancy = () => {
    const months = ["buffer", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentYear = Math.floor((new Date()).toString().split(' ')[3]);
    const currentMonth = months.indexOf((new Date()).toString().split(' ')[1]);
    const startYear = Math.floor((startDate).split('-')[0]);
    const startMonth = Math.floor((startDate).split('-')[1]);
    const endYear = Math.floor((endDate).split('-')[0]);
    const endMonth = Math.floor((endDate).split('-')[1]);

    if (!startYear || !startMonth || !endYear || !endMonth) {
      setErrorMessage(<div className='alert alert-danger'>Some fields are empty</div>);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);

    } else if ((endYear > currentYear) || (endYear >= currentYear && endMonth > currentMonth)) {
      setErrorMessage(<div className='alert alert-danger'>Move out date cannot be set in the future</div>);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);

    } else if ((startYear > endYear) || (startYear >= endYear && startMonth > endMonth)) {
      setErrorMessage(<div className='alert alert-danger'>You are a time traveler! You moved out of your flat before you even moved in!</div>);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);

    } else {
      onNext();
    }
  };

  return (
    <section className='card-show'>
      <div className='card'>
        <h5 className='card-header'>When did you live here?</h5>
        <div className='card-body'>
          {errorMessage}
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
