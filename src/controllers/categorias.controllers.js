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

const postCategorias = async(req, res) => {

    try {

        const {CategoriaNombre, Descripcion, Imagen} = req.body;

        const conecction = await getConnection();
        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }

        const result = await conecction.query("INSERT INTO categorias SET ?", category )
        
        res.json({result})

    } catch (error) {
        console.error("Error 500");
    }
}

const getCategori = async (req, res) => {

    try {
        console.log(req.param);
        const {id} = req.params 
        const conecction = await getConnection();
        const result = await conecction.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?" , id)
        res.json(result);
    
    } catch (error) {
        console.error("ERROR 500");
    }

}

export const methodHTTP = {

    getCategorias,
    postCategorias,
    getCategori
}