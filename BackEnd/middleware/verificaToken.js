import jwt from "jsonwebtoken";

function verificaToken(req, res, next) {

    const auth = req.headers.authorization;

    console.log("AUTH:", auth);
    console.log("JWT_SECRET existe?", !!process.env.JWT_SECRET);

    if (!auth) {
        return res.status(401).json({
            message: "Token não enviado"
        });
    }

    const [tipo, token] = auth.split(" ");

    console.log("TIPO:", tipo);
    console.log("TOKEN:", token);

    if (tipo !== "Bearer" || !token) {
        return res.status(401).json({
            message: "Formato do token inválido"
        });
    }

    try {

        const usuario = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("USUARIO:", usuario);

        req.usuario = usuario;

        next();

    } catch (error) {

        console.log("ERRO JWT:", error);

        return res.status(401).json({
            message: "Token inválido"
        });
    }
}

export default verificaToken;