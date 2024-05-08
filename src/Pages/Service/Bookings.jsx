import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import useAxioSecure from '../../Hooks/useSecure';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const axioSecure = useAxioSecure();
  const handileUpdate = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'patch',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const reming = userData?.filter(book => book?._id !== id);
          const updates = userData?.find(books => books?._id === id);
          updates.status = 'confirm';
          const newBooking = [updates, ...reming];
          setUserData(newBooking);
        }
      });
  };

  const hndileClickDelete = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json)
      .then(data => {
        const deletes = userData.filter(delt => delt._id !== id);
        setUserData(deletes);
        console.log(deletes);
      });
  };
  const url = `/booking?email=${user.email}`;
  useEffect(() => {
    axioSecure.get(url).then(res => setUserData(res.data));
    // axios.get(url, { withCredentials: true }).then(datas => {
    //   setUserData(datas.data);
    // });
  }, [url, axioSecure]);

  return (
    <div>
      <h2>this my booking secton :{userData?.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className=" bg-base-200">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            {userData?.map(datas => (
              <tbody key={datas._id}>
                <tr>
                  <th>
                    <button
                      onClick={() => hndileClickDelete(datas._id)}
                      className="text-white text-xl rounded-full btn bg-black"
                    >
                      X
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img
                            src={datas?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {datas?.facility[0].name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{datas.date}</td>
                  <td>${datas.price}</td>
                  <th>
                    {datas.status === 'confirm' ? (
                      <span className="font-bold text-primary">Confirmed</span>
                    ) : (
                      <button
                        onClick={() => handileUpdate(datas?._id)}
                        className="btn btn-ghost ]"
                      >
                        confirm
                      </button>
                    )}
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
