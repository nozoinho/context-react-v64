import { createContext, useContext, useState } from "react";

//export const UserContext = createContext(false);
// creamos contexto del usuario
// el usuario activo se va a compartir entre toda la aplicacion
// 'false' significa que no existe el usuario, es el valor inicializado
// para utilizarlo se necesita useContext y dentro se coloca
// el nombre de la propiedad nombrada que usa CreateContext, en este caso UserContext
// console.log(useContext(UserContext));

// para modificar el valor de createContext, en este caso 'false'
// componente para pasar informacion del usuario y sea modificable en cualquier componente anidado
// Al user createContext se habilita el uso de Provider

// aqui debe tener todas las paginas por eso pasamos el children

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  // ev value estamos pasando el objeto de user + setUser
  // el .Provider permite al UserContext generalizar la información que se coloque en value
  // para transmitirla entre toda la aplicacion
  // ahora importamos el UserProvider en el main.jsx y envolvemos toda la aplicacion
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
// esta variable es para centralizar la llamada del UserContext y facilitar la programacion
// y no estar importando varios componentes
//bastará con importar al useContext
