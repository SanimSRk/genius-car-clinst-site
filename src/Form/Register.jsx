import { Link } from 'react-router-dom';
import regiserImg from '..//assets/images/login/login.svg';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { fullName, email, password } = data;
    createUser(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    updateUserProfile(fullName)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left lg:w-full">
            <img className="w-full" src={regiserImg} alt="" />
          </div>
          <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 shadow-2xl bg-base-100">
            <h2 className="text-4xl font-semibold text-center pt-4 text-[#FF3811]">
              Register Now
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  {...register('fullName', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register('email', { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-[#FF3811] btn text-white "
                  type="submit"
                  value="Register"
                />
              </div>

              <h2 className="text-center ">
                Already have an account?
                <Link to={'/login'}>
                  <a className="text-blue-600 font-semibold">Login</a>
                </Link>{' '}
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
