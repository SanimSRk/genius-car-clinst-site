import TemBanner from './TemBanner';
const TeamMember = () => {
  return (
    <div className="my-[120px]">
      <div className="lg:w-2/3 lg:mx-auto md:w-2/3 md:mx-auto grid justify-center text-center">
        <p className="text-[#FF3811] font-semibold">Team</p>
        <h2 className="text-4xl font-bold my-5">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>
      <div className="mt-12">
        <TemBanner></TemBanner>
      </div>
    </div>
  );
};

export default TeamMember;
