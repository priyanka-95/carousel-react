import React,{useState} from "react";
//import {data} from '../data.js';
import styled from "styled-components";
const Maindiv= styled.div`
    width:800px;
    input[type="checkbox"]{
        width: 20px; 
        height: 20px; 
      }
`;
const category = [
  {
    _id: 1,
    category: "Perfume",
  },
  {
    _id: 2,
    category: "Oil",
  },
  {
    _id: 3,
    category: "T-shirt",
  },
];

function CheckBox(props) {
    const [Checked,setChecked] = useState ([])
    const handleToggle = ( value)=>{
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if(currentIndex===-1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex,1)
        }
        setChecked(newChecked)
        props.handlefilters(newChecked)
    }
  return (
    <Maindiv>
      {category.map((el, id) => {
        return (
          <div key={el.id}>
            {<div>{el.category}</div>}
            <input type="checkbox"
            onChange={()=>handleToggle(el._id)}
            checked={Checked.indexOf(el._id)===-1 ?false:true}
            ></input>
          </div>
        );
      })}
    </Maindiv>
  );
}

export default CheckBox;
