import { useQuery } from '@tanstack/react-query';
import React,{ useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import { UserContext } from '../../../Context/Context';

const AllBuyers = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);


    
  

  const {
    data: users = [],
    refetch,
    
  } = useQuery({
    queryKey: ["user"],
  
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/allbuyers?email=${user?.email}`,
        {
          headers: { authorization: `Barear ${localStorage.getItem("token")}` },
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
  console.log(users);
  // const handleDelete = (id) => {
  //   fetch(`http://localhost:5000/users/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         toast.success("deleted successfuly");
  //         refetch();
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
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
      <div class="container px-4 sm:px-8 max-w-3xl flex justify-left items-base mt-10 content-left overflow-x-auto">
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => 
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <Link class="block relative">
                              <img
                                alt="profil"
                                src="/images/person/8.jpg"
                                class="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </Link>
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          12/09/2020
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Make Admin</span>
                        </span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">delete</span>
                        </span>
                      </td>
                    </tr>
                  )}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllBuyers;