import { Outlet } from 'react-router-dom';
import Naver from '../Copment/Headers/Naver';
import Footer from '../Footer/Footer';

const MainRout = () => {
  return (
    <div>
      <div className="">
        <Naver></Naver>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainRout;
