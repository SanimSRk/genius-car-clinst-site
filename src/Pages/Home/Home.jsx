import Service from '../Service/Service';
import Banner from './Banner';
import HomeAbout from './HomeAbout';

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <HomeAbout></HomeAbout>
      <Service></Service>
    </div>
  );
};

export default Home;
