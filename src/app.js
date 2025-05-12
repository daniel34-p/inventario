import express from "express";
import cors from "cors";
import categoriasRoutes from "./routes/categorias.routes.js";

/* estamos creando el servidor web */
const app = express();

/* seteamos un puerto */
app.set("port", 3000)

/*Middleware*/
app.use(express.json())

app.use(cors());

app.use("/api/categorias", categoriasRoutes)

app.get("/", (req, res)=>{

    res.send("RESTO API EN RENDER")

})

export default app; 