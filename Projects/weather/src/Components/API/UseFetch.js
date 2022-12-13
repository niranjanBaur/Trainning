import React, { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res);
        // console.log(res,"UseFetch");
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, err };
};

export default UseFetch;
