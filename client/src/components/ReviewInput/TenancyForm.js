import React from 'react';


export default function TenancyForm(props) {
  return (
    <section className='card'>
      <div className='card'>
        <h5 className='card-header'>When did you live here?</h5>
        <div className='card-body'>          
          <div className='form-group'>
            <input className="form-control" type="month" value={props.startDate} id="tenancy-start-date" />
            <input className="form-control" type="month" value={props.endDate} id="tenancy-end-date"/>
            <button type='submit' className='btn btn-outline-dark'>
              Next Review{props.onNext}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
