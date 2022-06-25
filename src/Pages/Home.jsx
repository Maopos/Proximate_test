import styles from "../styles/Home.module.css";
import { useState } from "react";
import Alert from "../components/Alert";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  // States
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { setAuth, loading, setLoading } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([user, password].includes("")) {
      setError(true);
      setMessage("All fields are required...");

      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    try {
      const { data } = await clienteAxios.post("/login", {
        user,
        password,
      });

      if (!data.status) {
        setError(true);
        setMessage(data.message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
        setUser("");
        setPassword("");
        return;
      }

      setLoading(true);

      const info = JSON.parse(data.data);
      localStorage.setItem("token", info.userToken);

      const res = await clienteAxios.post("/getproducts", {
        userToken: info.userToken,
      });

      setAuth(res.data);

      navigate("/private");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title2}>
        Use your credentials to <span className={styles.span}>Login.</span>
      </h3>
      {/* 1075258635 testProximate */}
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">User</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Type the user code..."
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles.input}
              placeholder="Type the user password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.button}>Login</button>
        </form>
      </div>
      {message ? <Alert msg={message} error={error} /> : null}
    </div>
  );
};

export default Home;
