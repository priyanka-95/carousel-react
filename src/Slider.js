import React,{useState} from 'react';
import {data} from './data';
import styled from 'styled-components';

const Productdiv = styled.div`
   display:flex;
   margin-left:80px;
`;
const Maindiv = styled.div`
    width:1325px;
    height:100%;
    align-item:center;
`; 
const LeftButton = styled.div`
    position:absolute;
    width: 24px;
    left: 14px;
    cursor: pointer;
    border: 1px solid grey;
    padding: 2px 8px 2px 2px;
    border-radius: 5px;
    text-transform: capitalize;
    background-color: #FFC0CB;
`
const RightButton = styled.div`
    width: 30px;
    height:20px;
    cursor: pointer;
    border: 1px solid grey;
    padding: 2px 8px 2px 2px;
    border-radius: 5px;
    text-transform: capitalize;
    background-color: #FFC0CB;
`
const CategoryImg = styled.img`
    width:400px;
    height:400px;
`;
const SpaceDiv= styled.div`
    height:250px;
    width:1325px;
`;
const Header = styled.div`
    background-color:#FFC0CB;
    width:2000px;
    height:40px;
`;
const Cattegorydiv = styled.div`
    font-size:bold;
    font-family: Times;
    text-transform: capitalize;
`;
const SearchContainer = styled.button`
float: right;
padding: 6px 10px;
margin-top: 8px;
margin-right: 16px;
background: #ddd;
font-size: 17px;
border: none;
cursor: pointer;
}
`;
const ImageDiv = styled.div`
    width:549px;
`;
const ProductListingDiv = styled.div`
    display:flex;
`;
const Slider=()=>{
    //let sliderArray =[1,2,3,4];
    const[x,setX] = useState(0);
    const goLeft=()=>{
        setX(x+100);
    }
    const goRight=()=>{
        setX(x-100);
    }
return(
    <Maindiv>
        <Header><SearchContainer/></Header>
        <SpaceDiv/>
        <ProductListingDiv>
        <LeftButton onClick={goLeft}>left</LeftButton>
        <Productdiv>
        {data.map(el=>{
            return(
                <div key={el.id}>
                  <ImageDiv>
                  <CategoryImg alt="" src={el.image}/>
                 <Cattegorydiv>{el.category}</Cattegorydiv> 
                  </ImageDiv>  
                </div>
            )
        })}
        </Productdiv>
        <RightButton onClick={goRight}>right</RightButton>
        </ProductListingDiv>
    </Maindiv>
)
}
export default Slider;