
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) =>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6538bba3168a4a5fbb190ece46a4b49d&cuisine=${name}`
    );

    const recipes = await data.json();

    localStorage.setItem('Cuisine', JSON.stringify(data.recipes));
    setCuisine(recipes.results);
    console.log(recipes.results);
  }

  useEffect( () =>{
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid
        animate = {{ opacity:1 }}
        initial = {{ opacity:0 }}
        exit = {{ opacity:0 }}
        transition = {{ duration:0.5 }}
    >
        {cuisine.map( (item) =>{
          return(
            <Card key={item.id}>
              <Link to={"/recipe/" +item.id}>
                <img src={item.image} alt=""/>
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled(motion.div)`
    img{
      width: 100%;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    a{
      text-decoration: none;
    }

    h4{
      text-align: center;
      padding: 1rem;
      font-weight: bold;
      color: black;
    }
`;

export default Cuisine