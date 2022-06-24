import React , { useState , useEffect } from 'react';

function Metronome() {
  let [ delay , setDelay ] = useState();
  let [ tempo , setTempo ] = useState(53);
  let elements = document.getElementsByClassName("tile");

  let [counter , setCounter ] = useState(3);
  let previos;
  useEffect(() => {

    elements[(counter)%9].classList.toggle("marker");

  }, [counter]);


  function doit(){

    setInterval( function() {setCounter(cc => cc+=1)} , (60000/tempo))

  }



  return (
    <>
    {tempo}

    <form>
      <input type="range" min="10" max="150" value={tempo} onChange={e => setTempo(e.target.value)} className="slider" id="myTempo" />
    </form>
    <h2 onClick={doit}>Start</h2>
    <div id="visual">
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
      <div className="tile" ></div>
    </div>
        {counter}
    </>
  );

}
export default Metronome;
