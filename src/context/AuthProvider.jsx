import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // States
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth = async () => {
      const userToken = localStorage.getItem("token");

      if (!userToken) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await clienteAxios.post("/getproducts", {
          userToken,
        });

        setAuth(data);

        navigate("/private");
      } catch (error) {
        setAuth({});
      } finally {
        setLoading(false);
      }
    };
    adminAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
