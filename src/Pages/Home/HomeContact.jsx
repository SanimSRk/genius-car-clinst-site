import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarClock, LuPhone } from 'react-icons/lu';

const HomeContact = () => {
  return (
    <div className="my-[120px]">
      <div className="py-[95px] px-[72px] bg-[#151515] flex justify-between ">
        <div className="text-white flex items-center gap-3">
          <div>
            <LuCalendarClock className="text-4xl" />
          </div>
          <div>
            <p>We are open monday-friday</p>
            <h2 className="text-2xl font-bold mb-4"> 7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="text-white flex items-center gap-3">
          <div>
            <LuPhone className="text-4xl" />
          </div>
          <div>
            <p>Have a question?</p>
            <h2 className="text-2xl font-bold mb-4"> +2546 251 2658</h2>
          </div>
        </div>
        <div className="text-white flex items-center gap-3">
          <div>
            <IoLocationOutline className="text-4xl" />
          </div>
          <div>
            <p>We are open monday-friday</p>
            <h2 className="text-2xl font-bold mb-4">
              {' '}
              Need a repair? our address
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
