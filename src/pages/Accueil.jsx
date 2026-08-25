import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import RoomsPreview from '../components/sections/RoomsPreview';
import BistrotPreview from '../components/sections/BistrotPreview';
import SpaPreview from '../components/sections/SpaPreview';
import SeminairePreview from '../components/sections/SeminairePreview';
import EcoLabel from '../components/sections/EcoLabel';
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
      <EcoLabel />
      <SocialWall />
    </main>
  );
}

export default Accueil;