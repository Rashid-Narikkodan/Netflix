import { Outlet } from "react-router-dom";
import Background from "../../assets/images/netflix-bg.jpg";

const Auth = () => {

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
        <div className="flex justify-center h-screen items-center">
            <Outlet />
        </div>
    </div>
  );
};

export default Auth;
