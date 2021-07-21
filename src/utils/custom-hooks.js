import axios from "axios";
import { useState, useEffect } from "react";

function useCountryList(apiURL) {
  const [resData, setResData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Ancient api gods are calling!");
    axios.get(apiURL).then(({ data }) => {
      console.log("Ancient api gods have sent their blessings...");
      setResData(data);
      setLoading(false);
    });
  }, []);

  return { resData, isLoading };
}

function useFadeAnimation(fadeDirection) {
  const [fadeAnimation, setFadeAnimation] = useState("");

  useEffect(() => {
    setFadeAnimation(fadeDirection);
  }, []);

  return { fadeAnimation };
}

export { useCountryList, useFadeAnimation };
