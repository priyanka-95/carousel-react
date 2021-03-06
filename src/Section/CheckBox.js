import React,{useState} from "react";
import styled from "styled-components";
const Maindiv= styled.div`
display:flex;
    input[type="checkbox"]{
        width: 20px; 
        height: 20px; 
      }
      position: absolute;
      width: 600px;
      left: 1398px;
    top: 102px;
`;
const Filterdiv = styled.div`
      display:flex;
      margin-top: 15px;
    padding: 2px 2px 2px 11px;
`;
const CategoryName = styled.div`
      margin-top:4px;
      font-family: times;
    font-weight: 600;
`; 
const category = [
  {
    _id: "perfume",
    category: "Perfume",
  },
  {
    _id: "oil",
    category: "Oil",
  },
  {
    _id: "T-shirt",
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
        <p>Filter by:</p>
      {category.map((el, id) => {
        return (
          <Filterdiv key={el.id}>
              <input type="checkbox"
            onChange={()=>handleToggle(el._id)}
            checked={Checked.indexOf(el._id)===-1 ?false:true}
            ></input>
            {<CategoryName>{el.category}</CategoryName>}
          </Filterdiv>
        );
      })}
    </Maindiv>
  );
}

export default CheckBox;
