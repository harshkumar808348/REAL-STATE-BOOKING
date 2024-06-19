import { useQuery } from 'react-query';
import { getAllProperties } from '../utils/api';

const useProperties = () => {
  const { data: propertiesData, isLoading, isError, isFetching, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );

  return { propertiesData, isLoading, isError, isFetching, refetch };
};

export default useProperties;
