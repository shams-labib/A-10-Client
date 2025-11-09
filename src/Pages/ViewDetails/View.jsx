import { FaLocationDot, FaStar } from "react-icons/fa6";

const View = ({ food }) => {
  const {
    foodName,
    foodImage,
    restaurantName,
    location,
    rating,
    reviewText,
    userEmail,
    userName,
    userPhoto,
    createdAt,
  } = food;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">
        <div className="relative group">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg transition-all duration-300"
          />

          <span className="absolute top-4 right-4 bg-red-600 text-white text-sm md:text-base px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <FaStar /> {rating}
          </span>
        </div>

        <div className="mt-6 space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {foodName}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {restaurantName}
            </span>
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaLocationDot className="text-red-600 text-lg" />
            {location}
          </p>

          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-1">
              <FaStar className="text-yellow-500" /> Customer Review:
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              “{reviewText}”
            </p>
          </div>

          <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-md gap-4">
            <img
              src={userPhoto}
              alt={userName}
              className="w-14 h-14 rounded-full border-2 border-red-600 object-cover"
            />

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">
                {userName}
              </h4>
              <p className="text-sm text-gray-500">{userEmail}</p>
              <p className="text-xs text-gray-400">
                Reviewed on: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <button className="btn bg-gradient-to-r from-amber-500 to-orange-600 hover:bg-red-700 text-white w-full text-lg rounded-lg mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
