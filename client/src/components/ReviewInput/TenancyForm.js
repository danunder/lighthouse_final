import React from 'react';


export default function TenancyForm(props) {
  return (
    <section className='card'>
      <div className='card'>
        <h5 className='card-header'>When did you live here?</h5>
        <div className='card-body'>          
          <div className='form-group'>
            <input className="form-control" type="month" value="2011-08" id="tenancy-start-date" />
            <input className="form-control" type="month" value="2011-08" id="tenancy-end-date"/>
            <button type='submit' className='btn btn-outline-dark'>
              Next Review{props.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
