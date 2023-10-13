import HowTo from '@pages/HowTo/HowTo';
import Introduction from '@pages/Introduction/Introduction';
import ExamplesSection from '@pages/Examples/Examples';
import Donation from '@components/Donation';
import Navigation from '@components/Navigation';
import ButtonsConfig from '@components/ButtonsConfig';

function Landing() {
  return (
    <div className="w-full min-h-screen flex gap-2 p-2 relative">
      <Navigation />
      <div className="flex flex-col w-full min-h-screen card lg:px-36 gap-2">
        <Introduction />
        <HowTo />
        <ExamplesSection />
      </div>
      <Donation />
      <ButtonsConfig />
    </div>
  );
}

export default Landing;
