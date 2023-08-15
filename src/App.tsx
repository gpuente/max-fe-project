import { RootProvider } from './providers'
import { BackgroundVideo, AppContainer } from './styles';
import video from './assets/bg-video.mp4';


function App() {
  return (
    <>
      <BackgroundVideo>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </BackgroundVideo>
      <AppContainer>
        <RootProvider />
      </AppContainer>
    </>
  );
}

export default App
