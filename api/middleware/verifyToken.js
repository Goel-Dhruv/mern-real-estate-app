import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

   if (!req.cookies) {
    return res.status(401).json({ message: "No cookies found" });
  }
  const token = req.cookies.token;
   console.log(token)
   
  if (!token) return res.status(401).json({ message: "Not Authenticated Middleware!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    req.userId = payload.id;

    next();
  });
};
