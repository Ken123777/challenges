import React from 'react';

const NameForm = (props) => {

  return (
    <div>
      <h3 className="text-center">Enter your name here</h3>
      <form>
        <div className="row">
          <div className="small-4 small-centered columns text-center">
            <input type="text" onSubmit={props.formChangerProp}/>
            <input className="submit-button" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NameForm;
