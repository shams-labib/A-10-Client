import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import View from "./View";

const ViewDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/review-products").then((data) => {
      setMainData(data.data);
    });
  }, [axiosSecure]);

  const foodData = mainData.filter((item) => item._id === id);

  return (
    <div>
      {foodData.map((food) => (
        <View key={food._id} food={food}></View>
      ))}
    </div>
  );
};

export default ViewDetails;
