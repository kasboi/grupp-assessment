import { useState, useEffect } from "react";
import { DownloadIcon } from "./Icon";

const Table = () => {
  const [rolesData, setRolesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://gamma-api.vercel.app/api/roles");
        if (!response.ok) {
          throw new Error("Failed to fetch roles data");
        }
        const data = await response.json();
        setRolesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const getStatusStyles = (status) => {
    if (status === "Active") {
      return {
        background: "bg-green-200",
        text: "text-green-600",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ),
      };
    } else {
      return {
        background: "bg-orange-200",
        text: "text-orange-600",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        ),
      };
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto mb-24 flex justify-center items-center h-64">
        <div className="text-gray-500">Loading roles data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto mb-24 flex justify-center items-center h-64">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto mb-24">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg btn-mode">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Date Created
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                    >
                      Role Users
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Download</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rolesData.map((role) => (
                    <tr key={role.id} className="hover:bg-gray-100">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-table-${role.id}`}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor={`checkbox-table-${role.id}`}
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {role.name}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                        {role.type}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {role.date}
                      </td>
                      <td className="w-4">
                        <span
                          className={`px-1 py-1 flex items-center justify-center text-base rounded-full ${
                            getStatusStyles(role.status).text
                          } ${getStatusStyles(role.status).background}`}
                        >
                          {getStatusStyles(role.status).icon}
                          <span className="text-sm">{role.status}</span>
                        </span>
                      </td>
                      <td className="py-2 px-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        <div className="flex -space-x-2">
                          {role.users.slice(0, 3).map((userImage, index) => (
                            <img
                              key={index}
                              src={userImage}
                              alt={`User ${index + 1}`}
                              className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            />
                          ))}
                          {role.users.length > 3 && (
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                              <span className="text-xs text-gray-600">
                                +{role.users.length - 3}
                              </span>
                            </div>
                          )}
                          {role.users.length === 0 && (
                            <span className="text-gray-400 text-sm">
                              No users
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                        <DownloadIcon />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
