import React, { useState } from 'react'

function App() {
  const[value,setValue]=useState('');
  const[clas,setClass]=useState("")
  const[arr, setArr] = useState([])
  const[isedit, setIsedit] = useState(false)
  
  
  const obj = {value: value, clas:clas} 

  function myfunction(e){
    e.preventDefault()
    setValue("")
    setClass("")
    setArr([...arr, obj])
  }
  function deletetext(index){
    // const dellet = arr.filter((e,i)=> i !== index)
    // setArr(dellet)
    arr.splice(index,1)
    setArr([...arr])
  }
  function edittext(index){
    setIsedit((prev)=>!prev);
    setClass(arr[index].clas);
    setValue(arr[index].value);

  }

  return (
    <div>
    <form onSubmit={myfunction}>
      <input type="text" value={value} name='name'  onChange={(e)=>{setValue(e.target.value)} }  placeholder='any value'/>
      <input type="text"  value={clas} name='name' onChange={(e)=>{setClass(e.target.value)}}   placeholder='any class'/>
      <button type='submit'>{isedit === false ? "submit" : "update"}</button>
      </form>
      {
        arr.map((elm,index) => (
          <div>
          <h3 key={index}>Value: {elm.value},Class: {elm.clas}</h3>
          <button onClick={()=> edittext(index)}>edit</button>
          <button onClick={() => deletetext(index)}>dellet</button>
          </div>
        ))
      }

    </div>
  )
}

export default App;