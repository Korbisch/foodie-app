import welcomeImage from '../public/welcome-image.png';
import styled from 'styled-components';
import Img from 'next/image';

const WelcomeSection = () => {
    return (
        <>
            <WelcomeStyling>
                <h1>Let's Start Cooking With Your Favourite Recipes</h1>
                <StartImage>
                    <Img
                        src={welcomeImage}
                        alt="One plate with fried egg and asparagus, a bowl of hummus and a cup of coffee"
                    />
                </StartImage>
            </WelcomeStyling>
            <button>Get Started</button>
        </>
    );
};

export default WelcomeSection;

const StartImage = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: 0;
  border-radius: 26% 61% 57% 38% / 52% 38% 49% 47%;
  transform: rotate(20deg);
  margin-top: 20px;
  @media (min-width: 800px){
    margin-top: 70px;
    width: 60%;
  }
`;

const WelcomeStyling = styled.div`
  padding: 20px;
  min-width: 100px;
  align-items: center;
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`;