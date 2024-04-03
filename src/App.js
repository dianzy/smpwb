import React, { useState } from 'react';
import './App.css';
function App()
{
  const [user, setuser] = useState(''); 
  const [pass, setPass] = useState(''); 
  const [message, setMessage] = useState(''); 
  const corrus="noob"
  const crp="cryp"
 
  const handleClick=()=>{ 
if(user===corrus && pass===crp){
  setMessage("pass")
}
else{
  setMessage("fail")
}
setuser('');
setPass('');

}

return(
<div className="hrs">
  
  <input type="text"  value={user} onChange={(e)=>setuser(e.target.value)}/>
  <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>


  <button onClick={handleClick}> Sub </button>
  <p>{message}</p>



</div>
);
}




export default App;