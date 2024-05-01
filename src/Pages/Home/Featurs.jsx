import check from '..//..//assets/icons/check.svg';
import deliveryt from '..//..//assets/icons/deliveryt.svg';
import person from '..//..//assets/icons/person.svg';
import quote from '..//..//assets/icons/check.svg';
import Wrench from '..//..//assets/icons/Wrench.svg';
import group from '..//..//assets/icons/group.svg';

const Featurs = () => {
  return (
    <div className="mb-4">
      <div className="lg:w-2/3 md:w-2/3 lg:mx-auto md:mx-auto text-center">
        <p className="text-[#FF3811] font-semibold">Core Features</p>
        <h2 className="text-4xl font-bold my-4">Why Choose Us</h2>
        <p>
          {' '}
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="shadow-md rounded-lg py-7 px-6 justify-center grid">
          <img src={group} alt="" />
          <h2 className="font-bold mt-3">Expert Team</h2>
        </div>
        <div className="shadow-md rounded-lg py-7 px-6 justify-center grid">
          <img src={quote} alt="" />
          <h2 className="font-bold mt-3">Timely Delivery</h2>
        </div>
        <div className="shadow-md rounded-lg py-7 px-6 justify-center grid">
          <img src={person} alt="" />
          <h2 className="font-bold mt-3">24/7 Support</h2>
        </div>
        <div className="shadow-md rounded-lg py-7 px-6 justify-center grid">
          <img src={Wrench} alt="" />
          <h2 className="font-bold mt-3">Best Equipment</h2>
        </div>
        <div className="shadow-md rounded-lg py-7 px-6 justify-center grid">
          <img src={check} alt="" />
          <h2 className="font-bold mt-3">100% Guranty</h2>
        </div>
        <div className="shadow-md rounded-lg py-7 px-6 justify-center grid">
          <img src={deliveryt} alt="" />
          <h2 className="font-bold mt-3">Timely Delivery</h2>
        </div>
      </div>
    </div>
  );
};

export default Featurs;
