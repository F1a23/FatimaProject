import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const email = useSelector((state) => state.users.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

  return <div>Ho</div>;
};

export default Home;
