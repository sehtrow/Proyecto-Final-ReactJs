import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const useGetDeals = () => {
  const [deals, setDeals] = useLocalStorage("gamesdeals", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getDeals() {
    try {
      const response = await axios.get(
        "https://www.cheapshark.com/api/1.0/deals?sortBy=Savings"
      );
      const result = response.data;
      setDeals(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return { deals, loading, error, getDeals };
};

export default useGetDeals;
