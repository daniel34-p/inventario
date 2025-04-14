import express from "express";
import cors from "cors";
import categoriasRoutes from "./routes/categorias.routes.js";

/* estamos creando el servidor web */
const app = express();

/* seteamos un puerto */
app.set("port", 3000)

app.use(cors());

app.use("/api/categorias", categoriasRoutes)

export default app; 