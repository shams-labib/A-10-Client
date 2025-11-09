import React from "react";

const MyReviewPage = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">My Reviews</h2>

        <div className="overflow-x-auto">
          <table className="table w-full bg-white shadow rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Restaurant Name</th>
                <th>Posted Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Example row --> */}
              <tr className="hover:bg-gray-50">
                <td>
                  <img
                    src="https://i.ibb.co/cKQycsnB/image.png"
                    alt="Food"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>Pasta Alfredo</td>
                <td>La Italiano</td>
                <td>2025-11-01</td>
                <td className="space-x-2">
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>

              {/* <!-- Add more rows dynamically --> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviewPage;
