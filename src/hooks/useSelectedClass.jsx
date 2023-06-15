import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    refetch,
    data: selected = [],
  } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selected?email=${user.email}`
      );
      return res.json();
    },
  });

  return [selected, isLoading, refetch];
};

export default useSelectedClass;
