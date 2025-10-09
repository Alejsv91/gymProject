import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../constants/endpoints";
import { deleteGym } from "../../services/gymservices";

function Gyms() {
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${ENDPOINTS.gyms}`)
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
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {gyms.map((gym) => (
            <tr key={gym.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-600">{gym.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {gym.legal_id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{gym.owner}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {gym.is_active ? "Active" : "Inactive"}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{gym.email}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{gym.phone}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <button
                  onClick={() => navigate(`${ENDPOINTS.gymEdit(gym.id)}`)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button onClick={() => deleteGym(gym.id)}>Delete gym</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => navigate("/gym/create")}
          className="mt-6 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Register new gym
        </button>
      </div>
    </div>
  );
}

export default Gyms;
