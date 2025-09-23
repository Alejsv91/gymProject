import { useEffect, useState } from "react";
import { ENDPOINTS } from "../constants/endpoints";

function Gyms() {
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch("http://localhost:8000/gyms/") // ajusta el puerto si usas Docker
      .then((res) => res.json())
      .then((data) => {
        setGyms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gyms:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading gyms...</p>;

  return (
    // <div>
    //   <h1 className="text-2xl font-bold mb-4">Registered Gyms</h1>
    //   <ul className="space-y-2">
    //     {gyms.map((gym) => (
    //       <li key={gym.id} className="border p-4 rounded shadow">
    //         <h2 className="text-xl font-semibold">{gym.name}</h2>
    //         <p>{gym.address}</p>
    //         <p>{gym.phone}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Legal Id
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Owner
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Is Active
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {gyms.map((gym) => {})}
        </tbody>
      </table>
    </div>
  );
}

export default Gyms;
