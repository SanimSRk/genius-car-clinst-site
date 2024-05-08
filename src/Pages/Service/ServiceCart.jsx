import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServiceCart = ({ serv }) => {
  const { _id, img, title, price } = serv;
  return (
    <div className="shadow-lg p-6 rounded-lg grid items-end h-full">
      <img src={img} alt="" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex justify-between items-center">
        <h2 className="text-[#FF3811] text-xl font-semibold mt-4">
          Price : ${price}
        </h2>
        <Link to={`/checkout/${_id}`}>
          <FaArrowRightLong className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCart;
