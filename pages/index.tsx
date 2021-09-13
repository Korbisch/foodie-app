import type { NextPage } from 'next'
import Header from "../components/Header";
import styled from 'styled-components'
import WelcomeSection from "../components/WelcomeSection";
import MainBenefits from "../components/MainBenefits";


const Home: NextPage = () => {
  return (
    <>
        <AppHeader>
            <Header/>
        </AppHeader>
        <WelcomeSection/>
        <MainBenefits/>
    </>
  )
};

export default Home

const AppHeader = styled.header`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  font-size: calc(5px + 2vmin);
  color: #225386;
  padding-left: 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;