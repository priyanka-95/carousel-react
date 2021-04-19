import React, { useState } from "react";
import { data } from "./data";
import styled from "styled-components";
import CheckBox from "../src/Section/CheckBox";
import "./App.css";

const Productdiv = styled.div`
  display: flex;
  margin-left: 80px;
`;
const Maindiv = styled.div`
  height: 100%;
  align-item: center;
`;
const LeftButton = styled.div`
  position: absolute;
  width: 30px;
  left: 14px;
  height: 20px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  text-transform: capitalize;
  background-color: #ffc0cb;
`;
const RightButton = styled.div`
  width: 30px;
  height: 20px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  text-transform: capitalize;
  background-color: #ffc0cb;
  margin-left: 30px;
`;
const CategoryImg = styled.img`
  width: 400px;
  height: 400px;
`;
const SpaceDiv = styled.div`
  height: 250px;
  width: 1450px;
`;
const Header = styled.div`
  background-color: #ffc0cb;
  width: 2000px;
  height: 40px;
`;
const Cattegorydiv = styled.div`
  font-size: bold;
  font-family: Times;
  text-transform: capitalize;
`;
const FlexDiv = styled.div`
  display: flex;
`;
const ImageDiv = styled.div`
  width: 549px;
  &:nth-child(1) {
    width: 520px;
  }
`;
const ProductWidth = styled.div`
  &:nth-child(2) {
    img {
      width: 520px;
    }
  }
`;
const ProductListingDiv = styled.div`
  display: flex;
`;
const Slider = () => {
  const [Filters, setFilters] = useState({
    continents: [],
  });
  const [products, setProducts] = useState(data);
  const [x, setX] = useState(0);
  const handlefilters = (filters, cat) => {
    console.log("filters", filters);
    const newFilters = { ...Filters };
    newFilters[cat] = filters;

    setFilters(newFilters);
    if (filters.length > 0) {
      const filteredProducts = data.filter((product) => {
        return filters.includes(product.category);
      });
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
    setX(0);
  };
  let productdetail = [];
  const goLeft = () => {
    console.log(x);
    setX(x === products.length - 1 ? 0 : x - 1);
  };
  const goRight = () => {
    console.log(x);
    setX(x === products.length - 1 ? 0 : x + 1);
  };
  for (let i = 0; i < 3; i++) {
    data.length > i + x &&
      products.length > i + x &&
      productdetail.push(
        <ProductWidth key={products[i + x].id}>
          {
            <ImageDiv className="product">
              <CategoryImg alt="" src={products[i + x].image} />
              <Cattegorydiv>{products[i + x].name}</Cattegorydiv>
              <Cattegorydiv>{products[i + x].category}</Cattegorydiv>
              <div>{products[i + x].price}</div>
            </ImageDiv>
          }
        </ProductWidth>
      );
  }
  return (
    <Maindiv>
      <Header />
      <FlexDiv>
        <SpaceDiv />
        <CheckBox
          handlefilters={(filters) => handlefilters(filters, "category")}
        />
      </FlexDiv>
      <ProductListingDiv>
        {x != 0 && products.length > 2 && (
          <LeftButton onClick={goLeft}>{"<"}</LeftButton>
        )}
        <Productdiv>{productdetail}</Productdiv>
        {products.length > (x + 1) * 3 && (
          <RightButton onClick={goRight}>{">"}</RightButton>
        )}
      </ProductListingDiv>
    </Maindiv>
  );
};
export default Slider;
