import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SideBar from "../components/SideBar";
import styles from "../styles/PrivateRoute.module.css";
import Loading from "../components/Loading";

const PrivateRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

 const lists = JSON.parse(auth.data);
 console.log(lists.products);

  return (
    <>
      {auth.status ? (
        <div className={styles.container}>
          <SideBar />
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default PrivateRoute;
