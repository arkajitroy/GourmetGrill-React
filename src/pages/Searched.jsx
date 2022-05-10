
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) =>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6538bba3168a4a5fbb190ece46a4b49d&query=${name}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    }

    useEffect( () =>{
        getSearched(params.search);
    },[params.search]);

    return (
        <Grid>
            {searchedRecipes.map ((item) =>{
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' +item.id}>
                            <img src={item.image} alt={item.id}/>
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}


// STYLING 

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
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

export default Searched