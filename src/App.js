import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);
  const [errorMessage,setErrorMessage]=useState('');
  const [successMessage,setSuccesMessage]=useState('');
  function Number1(event){
   setNum1( event.target.value);
  }
  function Number2(event){
setNum2( event.target.value);
  }


  function Addition(){
    if(Validate()){
      let ans ="Result = "+(parseFloat(num1)+parseFloat(num2))
      setResult(ans) 
  }
    
    else
    setResult('');

  
    
  }

  function subtraction(){
    if(Validate()){
      let ans ="Result = "+(parseFloat(num1)-parseFloat(num2))
      setResult(ans) 
  }
    
    else
    setResult('');

  }


  function Multiplication(){
    if(Validate()){
      let ans ="Result = "+(parseFloat(num1)*parseFloat(num2))
      setResult(ans) 
  }
    
    else
    setResult('');

  }
  // DIvisom

   function Division(){
    if(Validate()){
      let ans ="Result = "+(parseFloat(num1)/parseFloat(num2))
      setResult(ans) 
  }
    
    else
    setResult('');

    
  }

// Doing validation 

  function Validate(){
    console.log(num1,num2)
    if(num1===''&&num2===''){
      console.log("hi")
      setErrorMessage("Error: num1 and num2 is empty");
      setSuccesMessage("");
      return false;

   
    }


    else if(num1==='')
      {  setErrorMessage("Error: num1 is empty");
        setSuccesMessage("");
        return false;
      }
     else if(num2==='')
        {
          setErrorMessage("Error: num2 is empty");
          setSuccesMessage("");
          return false;
        }
    
    else
    {
      if(validateNumber(num1,num2)){
        setSuccesMessage("Success : Your result is shown above!");
        setErrorMessage("");
        return true;
    }
    else{
      setErrorMessage(`Error: Inputs should be a number`);
      setResult('');
      return false;
    }
      
    }
  }

  function validateNumber(num1,num2) {
    
    if (!num1.trim() || !num2.trim() ) {
      return false;
    }
  
  
    var pattern = /^[-+]?(\d+(\.\d*)?|\.\d+)$/;
  
  
    return pattern.test(num1) & pattern.test(num2);
  }


  return (
    <div>

        <h1>React Calculator </h1>
        
        <input type="text" id='num1' placeholder='Num 1' onChange={Number1} ></input>
        <br></br>
        <br></br>
        <br></br>
        <input type="text" id='num2' placeholder='Num 2'  onChange={Number2} ></input>
        <br></br>
        <br></br>
    
        <button onClick={Addition}>+</button>
        
        <button onClick={subtraction}>-</button>
        <button onClick={Multiplication}>*</button>
        <button onClick={Division}>/</button>

        <br></br>
        <br></br>
       
        <div className='result'>{result || ""}</div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className='Sucess'>{successMessage}</p>}
    </div>
  );
}

export default App;