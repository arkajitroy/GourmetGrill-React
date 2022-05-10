import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutdoorGrill } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav>
        <MdOutdoorGrill />
        <Logo to={"/"}>GourmetGrill</Logo>
      </Nav>

        <SearchBox/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 4rem;
    font-family: 'Ingrid Darling', cursive;
    color: black;
`;

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: center;
    align-item: center;
    color:#153822;

    svg{
      font-size: 5rem;
    }
`;

export default App;
