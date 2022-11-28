import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import { UserContext } from '../../../Context/Context';

const AllSellers = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const { data: sellers = [], refetch } = useQuery({
      queryKey: ["user"],

      queryFn: async () => {
        const res = await fetch(
          `https://usedcycle-server.vercel.app/allsellers?email=${user?.email}`,
          {
            headers: {
              authorization: `Barear ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();
        setLoading(false);
        return data;
      },
    });
    if (loading) {
      return <Spinner></Spinner>;
    }
  const handleDelete = (id) => {
     const agree = window.confirm("Are you sure to delete this Seller?");
    if (agree) {
        fetch(`https://usedcycle-server.vercel.app/allselllers/${id}?email=${user?.email}`, {
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
      const handleVerify = (id) => {
        fetch(`https://usedcycle-server.vercel.app/allselllers/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              toast.success("Updated successfuly");
              refetch();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
      <div className="container px-4 sm:px-8 max-w-3xl flex justify-left items-base mt-10 content-left">
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
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
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
                  {sellers.map((seller) => (
                    <tr key={seller._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Link className="block relative">
                              <img
                                alt="profil"
                                src={seller.img}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {seller.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {seller.userType}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {seller.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <Link
                          className={` inset-0 bg-${
                            seller.verified ? "green" : "orange"
                          }-200 rounded-full p-1 px-3`}
                          onClick={() => handleVerify(seller._id)}
                        >
                          {seller.verified ? "verified" : "unverified"}
                        </Link>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <Link
                            className="relative"
                            onClick={() => handleDelete(seller._id)}
                          >
                            Delete
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

export default AllSellers;