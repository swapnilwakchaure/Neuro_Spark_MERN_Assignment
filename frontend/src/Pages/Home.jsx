import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Main>
            <Navbar>
                <Header>Events</Header>
                <Button onClick={() => navigate('/create')}>Create Event</Button>
            </Navbar>
        </Main>
    )
}

export default Home;





// styling starts from here

const Main = styled.div``


const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Header = styled.h1`
  color: #0091EA;
`

const Button = styled.button`
  padding: 10px;
  width: fit-content;
  background: none;
  border: 1px solid #0091EA;
  color: #0091EA;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &: hover {
    background: #A7FFEB;
    transition: 0.3s;
  }
`