import { useQuery } from '@tanstack/react-query';
import React,{ useContext,useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import { UserContext } from '../../../Context/Context';

const ReportedItems = () => {
   const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);


  const { data: reports = [], refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/report`);
      const data = await res.json();
      setLoading(false);
      return data;
    },
  });
  if (loading) {
    return <Spinner></Spinner>;
  }
  
  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure to delete this report?");
    if (agree) {
      
      fetch(`http://localhost:5000/report/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfuly");
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    };
    console.log(reports);
  // const handleRoleToAdmin = (id) => {
  //   fetch(`http://localhost:5000/users/admin/${id}?email=${user.email}`, {
  //     method: "PATCH",
  //     headers: {
  //       authorization: `Barear ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         toast.success("Role Changed successfuly");
  //         refetch();
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const handleRoleToSub = (id) => {
  //   fetch(`http://localhost:5000/users/subscriber/${id}?email=${user.email}`, {
  //     method: "PATCH",
  //     headers: {
  //       authorization: `Barear ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         toast.success("Role Changed successfuly");
  //         refetch();
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
    return (
      <div className="container px-4 sm:px-8 max-w-3xl flex justify-left items-base mt-10 content-left overflow-x-auto">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Product Img
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Seller
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                     Reporter
                    </th>
                   
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((item) => (
                    <tr key={item._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Link className="block relative">
                              <img
                                alt="profil"
                                src={item?.img}
                                className="mx-auto object-cover  h-16 w-16 "
                              />
                            </Link>
                          </div>
                          </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.sellerName}
                            </p>
                          </div>
                        
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap bg-green-300 px-1 rounded-full">
                          {item.reporterName}
                        </p>
                      </td>
                      
                      
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <Link className="relative" onClick={()=>handleDelete(item._id)}>
                            delete
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReportedItems;