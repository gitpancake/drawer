import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetIPFSData = () => {
  const [ipfsData, setIPFSData] = useState<string[]>([]);

  const fetchWinners = useCallback(async () => {
    try {
      const response = await axios.get<string>("https://ipfs.io/ipfs/QmbEtEejuPoEYvqYzV9VLhvjyYoTFhEdxpoUs73saPuY3d");

      const mappedResults = response.data.split("\n").map((name) => {
        const modifiedName = name.split("").join("").split(" ")[1];

        return modifiedName;
      });

      setIPFSData(mappedResults);
    } catch (ex) {
      console.error(ex);
    }
  }, []);

  useEffect(() => {
    fetchWinners();
  }, [fetchWinners]);

  return {
    ipfsData,
  };
};
