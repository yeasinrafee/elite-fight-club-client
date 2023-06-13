import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  const {
    isLoading,
    refetch,
    data: instructors = [],
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/instructors`);
      return response.json();
    },
  });

  return [instructors, isLoading, refetch];
};
export default useInstructors;
