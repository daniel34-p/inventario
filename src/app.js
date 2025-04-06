import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";

/* estamos creando el servidor web */
const app = express();

/* seteamos un puerto */
app.set("port", 3000)

app.use("/api/categorias", categoriasRoutes)

export default app; 