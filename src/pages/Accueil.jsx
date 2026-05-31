import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import RoomsPreview from '../components/sections/RoomsPreview';
import BistrotPreview from '../components/sections/BistrotPreview';
import SpaPreview from '../components/sections/SpaPreview';
import SeminairePreview from '../components/sections/SeminairePreview';
import SocialWall from '../components/sections/SocialWall';

function Accueil() {
  return (
    <main>
      <Hero />
      <Welcome />
      <RoomsPreview />
      <BistrotPreview />
      <SpaPreview />
      <SeminairePreview />
      <SocialWall />
    </main>
  );
}

export default Accueil;