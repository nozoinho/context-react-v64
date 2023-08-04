import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {
  // este layout va a ser para el Dashboard
  // para hacer redireccionamiento a los usuarios que no esten registrados en la aplicacion
  // se hace en el layout para que abarque a todas las paginas que envuelva el layout
  // y tener varias rutas protegidas y agrupadas ordenadamente

  // aqui hacemos las rutas protegidas

  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  // como alternativa al useEffect se tiene el componente Navigate

  /*  useEffect(() => {
    if (!user) {
      navigate("/");
    }
 
    console.log(user);
  }, [user]); */

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LayoutPrivate;
