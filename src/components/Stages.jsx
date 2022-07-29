import React from 'react';

const Stages = ({ progress }) => {
  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: '#664de5',
    height: '0.125rem',
    position: 'relative',
    zIndex: '10',
    transition: 'width 1s',
  };

  return (
    <div className='stages-container'>
      <div className='stage-numbers-container'>
        <span
          className='stage-number'
          style={{
            color: progress >= 20 ? 'white' : '',
          }}
        >
          1
          <span
            className='stage-number-bg'
            style={{ backgroundColor: progress >= 20 ? '#664de5' : 'white', border: progress >= 20 ? 'none' : '' }}
          ></span>
        </span>
        <span
          className='stage-number'
          style={{
            color: progress >= 50 ? 'white' : '',
          }}
        >
          2
          <span
            className='stage-number-bg'
            style={{ backgroundColor: progress >= 50 ? '#664de5' : 'white', border: progress >= 50 ? 'none' : '' }}
          ></span>
        </span>
        <span
          className='stage-number'
          style={{
            color: progress >= 80 ? 'white' : '',
          }}
        >
          3
          <span
            className='stage-number-bg'
            style={{ backgroundColor: progress >= 80 ? '#664de5' : 'white', border: progress >= 80 ? 'none' : '' }}
          ></span>
        </span>
        <span
          className='stage-number'
          style={{
            color: progress === 100 ? 'white' : '',
          }}
        >
          4
          <span
            className='stage-number-bg'
            style={{ backgroundColor: progress === 100 ? '#664de5' : 'white', border: progress === 100 ? 'none' : '' }}
          ></span>
        </span>
      </div>

      <div className='progress-bar'>
        <div style={progressBarStyle}></div>
      </div>
    </div>
  );
};

export default Stages;
