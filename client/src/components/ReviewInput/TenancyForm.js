import React from 'react';


export default function TenancyForm(props) {
  return (
    <section className='card'>
      <div className='card'>
        <h5 className='card-header'>When did you live here?</h5>
        <div className='card-body'>          
          <div className='form-group'>
            <input className="form-control" type="month" value={props.startDate} id="tenancy-start-date" onChange={props.onStartChange}/>
            <input className="form-control" type="month" value={props.endDate} id="tenancy-end-date" onChange={props.onEndChange}/>
            <button className='btn btn-outline-dark' onClick={props.onBack}>
              Back
            </button>
            <button type='submit' className='btn btn-outline-dark' onClick={props.onNext} >
              Next Review 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
