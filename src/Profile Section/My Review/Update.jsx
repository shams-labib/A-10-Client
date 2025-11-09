import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const foodNameRef = useRef();
  const foodImageRef = useRef();
  const restaurantNameRef = useRef();
  const locationRef = useRef();
  const ratingRef = useRef();
  const reviewTextRef = useRef();

  useEffect(() => {
    axiosSecure
      .get(`/review-products/${id}`)
      .then((res) => {
        const data = res.data;
        if (data) {
          foodNameRef.current.value = data.foodName;
          foodImageRef.current.value = data.foodImage;
          restaurantNameRef.current.value = data.restaurantName;
          locationRef.current.value = data.location;
          ratingRef.current.value = data.rating;
          reviewTextRef.current.value = data.reviewText;
        }
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      foodName: foodNameRef.current.value,
      foodImage: foodImageRef.current.value,
      restaurantName: restaurantNameRef.current.value,
      location: locationRef.current.value,
      rating: ratingRef.current.value,
      reviewText: reviewTextRef.current.value,
    };

    axiosSecure
      .put(`/review-products/${id}`, updatedData)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Updated your reviews successfully!",
          icon: "success",
        });
        navigate("/myReview");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-center md:my-[50px]">
      <div className="card w-full max-w-2xl shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Edit your review
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="label-text font-semibold">Update Food Name</span>
            </label>
            <input
              type="text"
              ref={foodNameRef}
              placeholder="Enter food name"
              className="input w-full outline-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Update Food Image URL
              </span>
            </label>
            <input
              type="text"
              ref={foodImageRef}
              placeholder="Enter image URL"
              className="input w-full outline-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Update Restaurant Name
              </span>
            </label>
            <input
              type="text"
              ref={restaurantNameRef}
              placeholder="Enter restaurant name"
              className="input w-full outline-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Update Location</span>
            </label>
            <input
              type="text"
              ref={locationRef}
              placeholder="Enter location"
              className="input w-full outline-none"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Update Star Rating
              </span>
            </label>
            <input
              type="number"
              ref={ratingRef}
              step="0.1"
              min="0"
              max="5"
              placeholder="Enter rating (0-5)"
              className="input w-full outline-none"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Update Review Text
              </span>
            </label>
            <textarea
              ref={reviewTextRef}
              className="textarea textarea-bordered w-full h-32 outline-none"
              placeholder="Write your review here..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit" className="btn btn-primary w-full">
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
