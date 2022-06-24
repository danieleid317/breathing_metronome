import React , { useState , useEffect } from 'react';

function Metronome() {

  let [ tempo , setTempo ] = useState(70);
  let elements = document.getElementsByClassName("tile");
  let [counter , setCounter ] = useState(1);
  let [ delay , setDelay ] = useState();

  function doit(){
    setCounter(counter => counter+=1);
  }

  function start(){
    setInterval( doit , (60000/tempo) )
  }

  useEffect(() => {
    elements[counter%3].style.backgroundColor = `rgba(${counter*50%255},${counter*30%119}, ${counter*10%73} , ${Math.min(.5,(counter%15*1/15))}`;

  }, [counter]);

  return (
    <>
    {tempo}

    <form>
      <input type="range" min="10" max="150" value={tempo} onChange={e => setTempo(e.target.value)} className="slider" id="myTempo" />
    </form>
    <h2 onClick={start}>Start</h2>
    <div id="visual">
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
    </div>
        {counter}
    </>
  );

}
export default Metronome;
