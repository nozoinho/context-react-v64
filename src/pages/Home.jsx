import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { setUser } = useUserContext();

  // cuando el usuario se loguea normalmemte es redireccionado a una pagina
  // en este caso seria el Dashboard
  // usamos useNavigate

  // permite hacer redireccionamiento dentro de un componente
  const navigate = useNavigate();

  const handleLogin = () => {
    //setUser(true);
    setUser({
      name: "Polo",
      email: "polo@test.com",
    });
    navigate("/dashboard");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Home;
