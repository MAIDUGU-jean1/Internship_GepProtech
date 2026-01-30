import { useLoading } from "../context/LoadingContext";
import '../styles/page-loader.css';

const PageLoader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default PageLoader;
