import React, { useRef, useState } from 'react'

function Textarea(props) {
    const [text, SetText]=useState('');
    const [emails, SetEmails]=useState([]);
    const [totalparagraphs, Setparagraphs]=useState(0);
    const config=useRef(null);

    const DoOnChange=(e)=>{
        SetText(e.target.value);
        Paragraphs(text)
    }


    const handleUpperCase=()=>{
        SetText(text.toUpperCase());
    }

    const handleLowerCase=()=>{
        SetText(text.toLowerCase())
    }

    const handleCapitalizeCase=()=>{
        const New_C_text=text.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');

        SetText(New_C_text)
    }

    const handleClear=()=>{
        let clear='';
        SetText(clear);
    }

    const ExtractedEmails=(uli)=>{
        const pattern=/[\w.-]+@[\w.-]+\.\w+/g;
        return uli.match(pattern) || [];
    }

    const handleEmails=()=>{
        const ExtractedMails=ExtractedEmails(text);
        SetEmails(ExtractedMails);
    }

    const Paragraphs=(mnc)=>{
        const dependence= mnc.split(/\n+/).filter(para => para.trim().length > 0);;
        
        Setparagraphs(dependence.length);
    }

    const RemoveSpace=()=>{
        let env=text.split(/[ ]+/);
        SetText(env.join(' '));
    }

    const handleCopy=()=>{
        if(config.current){
            navigator.clipboard.writeText(config.current.value)
            .then(()=>{
                alert("Text Copied in Clipboard 😊");
            }).catch((err)=>{
                console.error('failed to copy text:', err);
            })
        }
    }

    const handleSave=()=>{
        const process=new Blob([text], {type: "text/plain;charset=utf-8"});
        const url=URL.createObjectURL(process);

        const link=document.createElement('a');
        link.href=url;

        link.setAttribute('download', 'Document.txt');
        document.body.appendChild(link);
        link.click();


        document.body.removeChild(link);

    }
    const handlehtmlToJsx=()=>{
        let jsx=text.replace(/class/g, "className");
        jsx=jsx.replace(/for=/g, 'htmlFor');

        SetText(jsx);
    }
    
  return (
    <div>
        <>
        <div className='container' style={{color: props.mode==='dark'?'#ffffff':'#000'}}>
        <div className="mb-3">
            <h2 className='my-4'>
                {props.heading}
            </h2>
            <textarea className="form-control" onChange={DoOnChange} value={text} id="myBox" ref={config} rows="8" style={{backgroundColor: props.mode==='dark'?'#404851':'white', color: props.mode==='dark'?"#fff":"#000"} } ></textarea> 
            </div>

            <button type="button" className="btn btn-primary m-2" onClick={handleClear}>Clear Texts</button>

            <button type="button" className="btn btn-primary m-2" onClick={handleUpperCase}>To UpperCase</button>

            <button type="button" className="btn btn-primary m-2" onClick={handleLowerCase}>To LowerCase</button>

            <button type="button" className="btn btn-primary m-2" onClick={handleCapitalizeCase}>Captalize</button>

            <button type="button" className="btn btn-primary m-2" onClick={handleEmails}>Extract Emails</button>

            <button type="button" className="btn btn-primary m-2" onClick={RemoveSpace}>Remove Spaces</button>

            <button type="button" className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>

            <button type="button" className="btn btn-primary m-2" onClick={handleSave}>Download</button>

            <button type="button" className="btn btn-primary m-2" onClick={handlehtmlToJsx}>Convert in Jsx</button>
            

        </div>
        <div className='container my-2' style={{color: props.mode==='dark'?'#ffffff':'#000'}}>
            <h2>Your Text Summary</h2>
            <h5>Preview</h5>
            <p style={{color: "#001aff"}}>{text.length>0?text:"Enter Some Text to Preview it here." }</p>

            <h5>{text.split(" ").length-1} words and {text.length} character</h5>

            <h5>Paragraphs {totalparagraphs}</h5>

            <h5>{0.008*text.split('').length} Minutes Takes to Read</h5>






            <h4>{emails.length>0?"Extracted Emails":' '}</h4>
            <ul className='list-group'>
                {
                emails.map((email, index) => (
                    <li key={index} className='list-group-item'>{email}</li>
                ))}
            </ul>
        </div>

        </>
    </div>
  )
}

export default Textarea;
