import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  status: false,
  userCred: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { status: true, userCred: action.payload };
    case "LOGOUT":
      return { status: false, userCred: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userCred) => {
    dispatch({ type: "LOGIN", payload: userCred });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
