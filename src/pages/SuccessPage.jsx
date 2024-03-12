import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>success page</div>
    </div>
  );
};

export default SuccessPage;
