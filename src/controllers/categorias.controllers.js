import getConnection from "./../db/database.js"
const getCategorias = async (req, res) => {

    try {

        const conecction = await getConnection();
        const result = await conecction.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
    
        res.json(result);

    } catch (error) {
        console.error("Error 500");
    }
    
}

export const methodHTTP = {

    getCategorias

}