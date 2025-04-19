import { Router } from "express";
import { methodHTTP as categoriasControllers } from "../controllers/categorias.controllers.js";

const router = Router();

router.get("/", categoriasControllers.getCategorias ); 
router.post("/", categoriasControllers.postCategorias ); 

router.get("/:id", categoriasControllers.getCategori ); 
router.delete("/:id", categoriasControllers.deleteCategori ); 
router.put("/:id", categoriasControllers.updateCategorias ); 

export default router;