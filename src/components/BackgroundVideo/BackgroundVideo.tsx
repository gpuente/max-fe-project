import { Container } from './styles';
import video from '../../assets/bg-video.mp4';

export const BackgroundVideo: React.FC = () => (
  <Container>
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </Container>
);
