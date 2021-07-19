import axios from "axios";
import { useState, useEffect } from "react";

function useCountryList(apiURL) {
  const [resData, setResData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiURL).then(({ data }) => {
      setResData(data);
    });
  }, []);

  return { resData, isLoading };
}

export { useCountryList };
