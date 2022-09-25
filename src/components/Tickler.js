import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event.target.innerText);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
