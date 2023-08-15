import { Container } from './styles';
import video from '../../assets/bg-video.mp4';
import image from '../../assets/bg-image.jpg';

export const BackgroundVideo: React.FC = () => (
  <Container>
    <video autoPlay muted loop playsInline>
      <source src={video} type="video/mp4" />
      <img src={image} alt="background" />
    </video>
  </Container>
);
