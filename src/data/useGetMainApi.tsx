import { useCheckAuth } from "@/hooks/useCheckAuth";
import { useEffect, useState } from "react";

export default function useGetMainApi() {
  const isAuth = useCheckAuth();

  const [data, setData] = useState();

  useEffect(() => {
    if (isAuth) {
      const fetchData = async () => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_MAIN_API!);
          const result = await response.json();
          setData(result);
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    }
  }, []);

  return { data };
}
