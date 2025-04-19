import { Router } from "express";
import { methodHTTP as categoriasControllers } from "../controllers/categorias.controllers.js";

const router = Router();

router.get("/", categoriasControllers.getCategorias ); 
router.post("/", categoriasControllers.postCategorias ); 

export default router;