import axios from 'axios';
import React,{ useContext,useEffect,useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import { UserContext } from '../../../Context/Context';

const MyProducts = () => {
  // const { currentUser } = useContext(DataContext);
  const { user } = useContext(UserContext)
  const [loading,setLoading] = useState(true);
  const [refresh,setRefresh] = useState(false);
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5000/my-products?email=${user?.email}`)
        .then((data) => {
          // console.log(data.data);
          setProducts(data.data);
          setLoading(false);
        });
    },[user,refresh]);
  
      if (loading) {
        return <Spinner></Spinner>;
      }

  const handleDelete = (id) => {
         const agree = window.confirm("Are you sure to Delete this product?");
    if (agree) {
        fetch(`http://localhost:5000/my-products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("deleted successfuly");
              setRefresh(!refresh);
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
     }
      };
  const handleAdvertise = (id) => {
     const agree = window.confirm("Are you sure to advertise this product?");
    if (agree) {
    const choosedProduct = products.find((product) => product._id === id);
      // choosedProduct.status = 'advertise';
    // console.log(choosedProduct);
        fetch(`http://localhost:5000/advertise?email=${user?.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(choosedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Product added to advertised successfuly");
              setRefresh(!refresh);
            } else{
              toast.success("Product is already advertised");
            }
          })
          .catch((error) => {
            console.log(error);
           
          });
           }
      };
    console.log(products);
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
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      advertise
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
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
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Link className="block relative">
                              <img
                                alt="profil"
                                src={product?.img}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.name}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.sellPrice} tk
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p
                          className={`text-gray-900 whitespace-no-wrap ${
                            product.status === "paid" && "bg-gray-300 "
                          } ${
                            product.status === "advertised"
                              ? "bg-gray-300 "
                              : "bg-orange-300"
                          } px-1 rounded-full cursor-pointer`}
                          {...(product.status === "paid"
                            ? { disabled: true }
                            : { onClick: () => handleAdvertise(product._id) })}
                        >
                          {product.status === "advertised"
                            ? "Advertised"
                            : "advertise"}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          {product.status === "paid" ? (
                            <div>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-900 opacity-50 rounded-full"
                              ></span>
                              <span className="relative text-white text-lg">
                                Sold{" "}
                              </span>
                            </div>
                          ) : (
                            <div>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Available </span>
                            </div>
                          )}
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <Link
                            className="relative"
                            onClick={() => handleDelete(product._id)}
                          >
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

export default MyProducts;