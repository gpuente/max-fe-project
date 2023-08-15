import { RootProvider } from './providers'
import { AppContainer } from './styles';
import { BackgroundVideo } from './components';


function App() {
  return (
    <>
      <BackgroundVideo />
      <AppContainer>
        <RootProvider />
      </AppContainer>
    </>
  );
}

export default App
