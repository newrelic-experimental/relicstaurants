import { Outlet } from 'react-router';
import { Main, StyledAppContainer } from './app-container-styled';
import { Footer } from './footer';
import { Header } from './header';

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppContainer>
  );
};

export default AppContainer;
