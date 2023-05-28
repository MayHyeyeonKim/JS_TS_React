import React from 'react';

function Box(props) {
  const clickMe = () => {
    alert("you pushed the button")
  }
  return (
    <div className="box">
      Box {props.num}
      {props.name}
      <button onClick={clickMe}>click</button>
    </div>
  );
};

export default Box