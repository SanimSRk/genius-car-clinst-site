import Products from '../../Products/Products';
import Service from '../Service/Service';
import Banner from './Banner';
import Featurs from './Featurs';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import TeamMember from './TeamMember';

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <HomeAbout></HomeAbout>
      <Service></Service>
      <HomeContact></HomeContact>
      <Products></Products>
      <TeamMember></TeamMember>
      <Featurs></Featurs>
    </div>
  );
};

export default Home;
