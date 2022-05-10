import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Splide , SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Link } from 'react-router-dom';


function Vegies() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() =>{
    getVeggie();
  },[]);

  const getVeggie = async () =>{

    // we will set out states in our local storage
    const check = localStorage.getItem('Vegies');

    if(check){
      setVeggie(JSON.parse(check));
    }else{

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegan`
      );

      const data = await api.json();  // converting all the data to json format

      localStorage.setItem('Vegies', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
      
    }
  };

  return(
    <div>


      <Wrapper>
        <h3>Vegetarian Picks</h3>

        <Splide options = {{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: "free",
          gap : "3rem"
        }}>
          {veggie.map( (recipe) =>{
            return(
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" +recipe.id}>
                      <p>{recipe.title}</p>
                      <img src ={recipe.image} alt ={recipe.title}/>
                      <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>

      </Wrapper>

    </div>
  );
}

const Wrapper = styled.div `
  margin: 4rem 2rem;
`;

const Card = styled.div `
  min-height: 20rem;
  margin-top: 2rem;
  border-radius : 2rem;
  overflow: hidden;
  position: relative;
  ${'' /* cursor: pointer; */}

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-allign: center;
    font-weight: regular;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
  };
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`;

export default Vegies;