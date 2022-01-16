
import './App.css';
import React ,{useState} from 'react';
import List from './component/List';
function App() {
  const [currentItem, setcurrentItem] = useState(null)
  const [itemList, updateItemlist] = useState([])
 const onChnageHandler =(e)=>{
   setcurrentItem(e.target.value)
 };
 const addItemTolist = ()=>{
   updateItemlist([...itemList,{ item: currentItem, key: Date.now()}])
   setcurrentItem("");
   console.log(itemList)
 }
  return (
    <div className="App">
     <div className='App-header'>
        <div className='Wrapper'>
           <div className='Input-Wrapeer'>
             <input placeholder='AddItem' value={currentItem}  onChange={onChnageHandler} required/>
             <button onClick={addItemTolist}>+</button>
           </div>
           <List itemList={itemList} updateItemlist={updateItemlist}/>
        </div>
     </div>
    
    </div>
  );
}

export default App;
