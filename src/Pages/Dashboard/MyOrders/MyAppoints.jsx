import { useQuery } from '@tanstack/react-query';
import React,{ useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/Context';

const MyAppoints = () => {
  const { user } = useContext(UserContext);
  const [date,setDate] = useState('');
  
  const {data:myAppoints=[],refetch} = useQuery({
    queryKey: ["myAppoints",user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/user/bookedAppointments?email=${user.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      )
      const data = await response.json();
      return data;
    }
  })
  
  console.log(myAppoints);
    return (
      <div className="overflow-x-auto w-full">
        <div className="flex justify-between px-10 items-center content-center  my-5">
          <h2 className="font-semibold text-lg">My Appointments</h2>{" "}
          <button className="btn">{date}</button>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Price</th>
              <th>Payment</th>
              {/* <th className="text-center">action</th> */}
            </tr>
          </thead>
          <tbody>
            {myAppoints.map((appoint, index) => (
              <tr key={appoint._id} className="border">
                <th>{index + 1}</th>

                <td>{appoint.treatmentName}</td>
                <td>{appoint.AppointedDate}</td>
                <td>{appoint.slot}</td>
                <td>{appoint.price}</td>
                <td>
                  <Link to={`/checkout/${appoint._id}`}>
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

export default MyAppoints;