import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  const {
    isLoading,
    refetch,
    data: instructors = [],
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const response = await fetch(
        `https://elite-fight-club-server.vercel.app/instructors`
      );
      return response.json();
    },
  });

  return [instructors, isLoading, refetch];
};
export default useInstructors;
