import React,{useState} from 'react';
import {data} from './data';
import styled from 'styled-components';
import CheckBox from '../src/Section/CheckBox'; 

const Productdiv = styled.div`
   display:flex;
   margin-left:80px;
`;
const Maindiv = styled.div`
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
    width:1450px;
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
// const SearchContainer = styled.button`
// float: right;
// padding: 6px 10px;
// margin-top: 8px;
// margin-right: 16px;
// background: #ddd;
// font-size: 17px;
// border: none;
// cursor: pointer;
// }
// `;
const FlexDiv =styled.div`
    display:flex;
`
const ImageDiv = styled.div`
    width:549px;
`;
const ProductListingDiv = styled.div`
    display:flex;
`;
const Slider=()=>{
    const[Filters,setFilters]=useState({
        continents:[],
    })
    const[products,setProducts]= useState(data);
    const  showFiltersResults = (filters)=>{


    }  
    const handlefilters =(filters, cat) =>{
        console.log('filters',filters);
        const newFilters = {...Filters}
        newFilters[cat] = filters

        setFilters(newFilters)
        if(filters.length>0){
        const filteredProducts = data.filter((product)=>{
            return filters.includes(product.category)
        });
        setProducts(filteredProducts);
    }else{
        setProducts(data);
    }
    }
    //let sliderArray =[1,2,3,4];
    let productdetail =[];
    const[x,setX] = useState(0);
    // if(!Array.isArray(slides)||data.length<=0){
    //     return null;
    // }
    const goLeft=()=>{
        console.log(x);
        setX(x === products.length-1 ? 0 :x-1);
    }
    const goRight=()=>{
        console.log(x); 
        setX(x === products.length-1 ? 0 :x+1);
    }
    for(let i=0;i<3;i++){
        (data.length>(i+x))&& 
        (products.length>(i+x))&& 
        productdetail.push(
                <div key={data[i+x].id}>
                    {(
                  <ImageDiv>
                  <CategoryImg alt="" src={data[i+x].image}/>
                 <Cattegorydiv>{data[i+x].category}</Cattegorydiv> 
            <div>{data[i+x].price}</div>
        </ImageDiv>  
                    )}</div>
               )
    }
return(
    <Maindiv>
        <Header/>
        <FlexDiv>
        <SpaceDiv/>
        <CheckBox handlefilters={filters =>handlefilters(filters,"category")}/>
        </FlexDiv>
        <ProductListingDiv>
        {  x!=0 &&
        <LeftButton onClick={goLeft}>left</LeftButton>}
        <Productdiv>
            {productdetail}
        {/* {data.map((el,id)=>{
            console.log('x',x);
            return(
                <div key={el.id}>
                    {id===x &&(
                  <ImageDiv>
                  <CategoryImg alt="" src={el.image}/>
                 <Cattegorydiv>{el.category}</Cattegorydiv> 
            <div>{el.price}</div>
        </ImageDiv>  
                    )}</div>
               )
        })} */}
        </Productdiv>
        {x+3!=data.length &&
        <RightButton onClick={goRight}>right</RightButton>}
        </ProductListingDiv>
    </Maindiv>
)
}
export default Slider;