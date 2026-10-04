import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const RotaPrivada = ({ children, cargoPermitido }) => {
    const storedToken  = localStorage.getItem("token");

    if (!storedToken ) {
        return <Navigate to="/login" replace />;
    }
    const token = jwtDecode(storedToken);

    if (cargoPermitido && token.cargo !== cargoPermitido) {
        return <Navigate to="/" replace />;
    }

    return children;
}   

export default RotaPrivada  