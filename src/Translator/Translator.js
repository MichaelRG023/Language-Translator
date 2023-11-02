import { useState } from "react";





const Translator=()=>{
    const [inputText,setInputText] = useState('');
    const [outputLang,setOutputLang]= useState('ar');
    const [OutputText, setOutputText] = useState('');
    const [isTranslated, setIsTranslated] =useState();

    const translate = () => {
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key ,
		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
	},
	body: [
		{
			Text: 'I would really like to drive your car around the block a few times.'
		}
	]
};
  fetch(`${process.env.REACT_APP_BASE_URL}de${process.env.REACT_APP_Query_Params}`,options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

       

    return(
       <section className="translator">
        <div className="row-wrapper">
            <div className="translator-container input-lang">
                <div className="top-row">
                    <button 
                    className="btn btn-primary btn-translate"
                    onClick={translate}
                    >
                    Translate
                    </button>
                </div>
                <form  className="input-form">
                    <textarea
                    className="text-box"
                    placeholder="Enter text (any language)"
                    onChange={e => setInputText(e.target.value)}
                    >

                    </textarea>
                </form>
            </div>
            <div className="translator-container output-lang>">
                <div className="top-row">
                    <select 
                    name="languages"
                     id="languages"
                     className="form-select form-select-sm"
                     >
                        <option value="ar">Arabic</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                     </select>
                    <p className="text-box output-box">
                        {OutputText}
                    </p>
                 </div>
              </div>
            </div>
         </section>

       
    )
}

export default Translator;