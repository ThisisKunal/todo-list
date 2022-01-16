import React from 'react';
import "./list.css";

export default function List({itemList , updateItemlist}) {
  const  deleteItemFromList = (key)=>{
     const newList= itemList.filter(itemObj =>{
          return itemObj.key !==key;
      })
      updateItemlist(newList);
  }
    return (
        <div>
           {itemList.map((elem)=>{
              return  <div key={elem.key} className='Item'>
                        <p>{elem.item}</p>
                        <button onClick={()=>deleteItemFromList(elem.key)}>X</button>
                      </div>
           })}
        </div>
    )
}
