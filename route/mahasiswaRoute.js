import express from "express";
import { 
    getMahasiswa,
    getMahasiswaByNim,
    CreateMahasiswa,
    DeleteMahasiswa,
    UpdateMahasiswa }
 from "../controller/mahasiswaconroller.js";

//? Initial Router
const router = express.Router();

//* GET
router.get('/',getMahasiswa)
router.get('/find',getMahasiswaByNim)

//*POST
router.post('/create',CreateMahasiswa)

//* DELETE
router.delete('/delete',DeleteMahasiswa)

//* UPDATE
router.put('/update',UpdateMahasiswa)

export default router