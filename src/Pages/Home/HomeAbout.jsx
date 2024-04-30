import person from '..//../assets/images/about_us/person.jpg';
import parts from '..//../assets/images/about_us/parts.jpg';
const HomeAbout = () => {
  return (
    <div className="my-[120px] ">
      <div className="hero min-h-screenbg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className=" lg:w-1/2 md:w-full h-full">
            <img
              src={person}
              className="h-full rounded-lg w-[80%] shadow-2xl"
            />

            <div className=" ">
              <img
                className="w-1/2 -mt-28 h-full ml-[40%]  "
                src={parts}
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-1/2 md:-full ">
            <h2 className="text-xl font-bold text-orange-500">About Us</h2>
            <h1 className="text-5xl  font-bold mt-4">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 mt-7">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811] text-white mt-8">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
