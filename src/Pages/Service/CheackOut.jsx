import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const CheackOut = () => {
  const [booking, setBooking] = useState();
  const data = useLoaderData();
  const { service_id, price, img, facility } = data;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { fullName, phone, email, date, title } = data;
    const orader = {
      date,
      fullName,
      service_id,
      price,
      phone,
      email,
      img,
      title,
      facility,
    };

    fetch(`http://localhost:5000/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orader),
    })
      .then(res => res.json())
      .then(data => setBooking(data));
  };

  return (
    <div>
      <h2>hellow owrld :{data?.length}</h2>
      <div className="my-[120px]">
        <div className="hero min-h-screen ">
          <div className="hero-content bg-base-200 p-24 w-full flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="flex gap-6">
                  <div className="form-control w-1/2 ">
                    <label className="label">
                      <span className="label-text">Your Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="input input-bordered"
                      required
                      {...register('fullName', { required: true })}
                    />
                  </div>
                  <div className="form-control w-1/2 ">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Last Name"
                      className="input input-bordered"
                      required
                      {...register('date', { required: true })}
                    />
                  </div>
                </div>
                <div className="flex gap-6 my-4">
                  <div className="form-control w-1/2 ">
                    <label className="label">
                      <span className="label-text">Your phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your phone "
                      className="input input-bordered"
                      required
                      {...register('phone', { required: true })}
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Your email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your emial"
                      className="input input-bordered"
                      required
                      {...register('email', { required: true })}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="textarea w-full h-[300px] textarea-bordered "
                    placeholder="Your Message"
                    {...register('textAreya', { required: true })}
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="text-white btn bg-[#FF3811]"
                    type="submit"
                    value="Order Confirm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheackOut;
