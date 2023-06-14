import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    // queryFn: async () => {
    //   const response = await fetch(`http://localhost:5000/classes`);
    //   return response.json();
    // },
    queryFn: async () => {
      const response = await axiosSecure(`/classes`);

      return response.data;
    },
  });

  return [classes, isLoading, refetch];
};
export default useClasses;
