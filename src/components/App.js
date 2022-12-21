import React from 'react'
import '../styles/App.css';
const App = () => {
  const[data,setData]=useState("");
const handleChange = (event)=> { 
setData(event.target.value)

}
 const handleSubmit =(event) => {
  event.preventDefault();
  console.log("form submitted")
 }



  return (
    <div id="main">
      <form>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"}  value ={ data } onChange = {handleChange}/>

        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
