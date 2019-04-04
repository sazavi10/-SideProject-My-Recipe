import React from 'react';

const Arrows = (props) => {
  return (
    <div className='buttons'>
        <div className="nextarrow" onClick={props.goToNextSlide}>
            <i className="fas fa-arrow-circle-right"></i>
        </div>
        <div className="prevarrow" onClick={props.goToPrevSlide}>
            <i className="fas fa-arrow-circle-left"></i>
        </div>
    </div>
  );
}

export default Arrows;