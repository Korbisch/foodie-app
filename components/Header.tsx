import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <h1>Foodie</h1>
            <Signup>
                <Button>Log in</Button>
                <Button primary>Sign up</Button>
            </Signup>
        </>
    );
};

export default Header;

const Signup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; 
  margin-right: 1rem;
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 30px;
  font-weight: lighter;
  margin: 10px;
  cursor: pointer;
  background-color: ${props => props.primary ? 'lightblue' : 'white'};
  box-shadow: ${props => props.primary ? '0 8px 15px rgba(0, 0, 0, 0.2)' : ''};
  
  &:hover {
    background-color: ${props => props.primary ? 'aqua' : 'whitesmoke'};
    transform: ${props => props.primary ? 'scale(1.1)' : ''};
    box-shadow: ${props => props.primary ? '' : '0 8px 15px rgba(0, 0, 0, 0.2)'};
  }
`;