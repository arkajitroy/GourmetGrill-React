
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function DetailPage() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async() =>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect( () =>{
    fetchDetails();
  },[params.name])

  return (
    <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
        </div>

        <Info>
          <Button 
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={ () =>{
              setActiveTab('instructions')
          }}>Instructions</Button>
          
          <Button 
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={ () =>{
              setActiveTab('ingredients')
          }}>Ingredients</Button>

          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}> {ingredient.original} </li>
              ))}
            </ul>
          )}
                  

        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    h2{
      margin-bottom : 2rem;
    }

    li{
      font-size: 1.2rem;
      line-height: 2.5rem;
    }

    ul{
      margin-left: 3rem;
      margin-top: 2rem;
    }

    .active{
      background: #153822;
      color: white;
    }

    h3{
      margin-top: 2rem;
      margin-left: 2rem;
    }
`;

const Button = styled.button`
    margin-left: 2rem;
    padding: 1rem 2rem;
    color: black;
    font-weight: bold;
    background: white;
    border: 2px solid black;
`;

const Info = styled.div`
    margin-left: 10rem;
    text-align: justify;
    text-justify: inter-word;
`;

export default DetailPage