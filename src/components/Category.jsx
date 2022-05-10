
import React from 'react'
import { GiFullPizza , GiNoodles, GiChickenOven, GiTacos} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <GiFullPizza/>
            <h4>Italian</h4>
        </SLink>

        <SLink to={'/cuisine/indian'}>
            <GiChickenOven/>
            <h4>Indian</h4>
        </SLink>

        <SLink to={'/cuisine/chinese'}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </SLink>

        <SLink to={'/cuisine/mexican'}>
            <GiTacos/>
            <h4>Mexican</h4>
        </SLink>
    </List>
  )

}

//STYLING

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: #1d8541;
    color: white;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    font-weight: bold;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
        font-weight: bold;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: #034012;

        h4{
        color: white;
        font-size: 0.8rem;
        font-weight: bold;
        }

        svg{
            color: white;
            font-size: 1.5rem;
        }
    }
`;



export default Category