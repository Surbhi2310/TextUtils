import React, {useState} from "react";
export default function TextForm(props){
    const handleUpClick =()=>{
       // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase!","success");
    }
    const handleLoClick =()=>{
        let newText=text.toLowerCase();
         setText(newText)
         props.showAlert("Converted To LowerCase!","success");
    }
    const handleClearClick =()=>{
        let newText=" ";
         setText(newText)
         props.showAlert("Text Cleared!","success");
    }
    const handleTiClick =()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText)
        props.showAlert("Converted To Capitalized!","success");
    }
    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!","success");
    }
    const handleExtraSpaces =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpace Removed!","success");
    }
    const [text, setText] = useState('');
    return(
        <>
        <div className="container" style= {{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading} </h1>
             <div className="mb-3">
             <textarea className="form-control" onChange = {handleOnChange} style= {{backgroundColor: props.mode === 'dark'?'#393442':'white', color: props.mode === 'dark'?'white':'#042743'}} value = {text} id="myBox" rows="8"></textarea>
             </div>
             <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
             <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
             <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
             <button className="btn btn-primary mx-1 my-1" onClick={handleTiClick}>Capitalize</button>
             <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
             <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Space</button>
        </div> 
         <div className="container my-3" style= {{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Length</p>
            <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes To Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
   
    );
}
