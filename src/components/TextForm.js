import React,{useState} from 'react'


export default function TextForm(props) {
  
  
  const handleUpClick=()=>{
    console.log("Upper was clicked ");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLoClick=()=>{
    console.log("Upper was clicked ");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleRepClick=()=>{
    console.log("Replace   was clicked ");
    let newText=text.replace(" "," space ");
    setText(newText);
  }
  const handleOnChange=(event)=>{
    //console.log("Onchang ");
    setText(event.target.value);
  }
  
  const [text,setText]=useState('Enter Text here');
  //setText("hi bro");
  return (
    <>
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleRepClick}>Replace sentences</button>


        </div>
    </div> 
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).length-1} words and  {text.length} characters</p>
      
      <p>{0.008 * text.split(" ").length} Minutes read for above paragraph</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
