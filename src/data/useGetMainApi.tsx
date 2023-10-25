import { useCheckAuth } from "@/hooks/useCheckAuth";
import { useEffect, useState } from "react";

interface DataListings {
  data: {
    avatar: string;
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }[];
  page: number;
  per_page: number;
  support: { url: string; text: string };
  total: number;
  total_pages: number;
}

export default function useGetMainApi() {
  const isAuth = useCheckAuth();

  const [data, setData] = useState<DataListings>();

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
