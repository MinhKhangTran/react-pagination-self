import { useEffect, useState } from "react";
import { paginate } from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(paginate(data));
    setData(paginate(data));
    setLoading(false);
  };
  useEffect(() => {
    fetchPerson();
  }, []);
  return { loading, data };
};
