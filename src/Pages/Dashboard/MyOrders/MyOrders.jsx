import { useQuery } from '@tanstack/react-query';
import React,{ useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/Context';

const MyOrders = () => {
  const { user } = useContext(UserContext);
  const [date,setDate] = useState('');
  // const [myBookings,setMyBookings] = useState([]);

  
  const { data: myBookings = [], refetch } = useQuery({
    queryKey: ["myBookings", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/booking?email=${user.email}`
      );
      const data = await response.json();
      return data;
    },
  });
  
  console.log(myBookings);
    return (
      <div className="overflow-x-auto sm:w-8/12">
        <div className="flex justify-between px-10 items-center content-center  my-5">
          <h2 className="font-semibold text-lg">My Appointments</h2>
          <button className="btn">{date}</button>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Price</th>
              <th>Payment</th>
              {/* <th className="text-center">action</th> */}
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking, index) => (
              <tr key={booking._id} className="border">
                <th>{index + 1}</th>
                <td>{booking?.itemName}</td>
                <td>{booking?.mobile}</td>
                <td>{booking?.meetingLocation}</td>
                <td>{booking?.salePrice}</td>
                <td>
                  <Link to={`/checkout/${booking._id}`}>
                    <button className="btn btn-success">PAY</button>
                  </Link>
                </td>
                {/* <td className="text-center">
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn bg-red-500 text-white ml-10">
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;