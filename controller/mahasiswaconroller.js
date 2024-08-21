import db from "../connection.js";
import  response  from "../respone.js";

export const getMahasiswa = (req,res)=>{
    const sql ='SELECT * FROM mahasiswa';
    db.query(sql,(error,result)=>{
        response(200,result,'ambil semua data',res)
    })
}

export const getMahasiswaByNim=(req,res)=>{
    const nim = req.query.nim;
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (error, result) => {
        response(200,result,'ambil data berdasarkan nim',res)
    })
}

export const CreateMahasiswa=(req,res)=>{
    const {nim, nama_lengkap, kelas, alamat} = req.body
    const sql = "INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?, ?, ?, ?)"
    db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
        if(error){
            res.status(400)
            res.send(error)
        }
        res.status(201)
        res.json(result)
    })
}

export const DeleteMahasiswa=(req,res)=>{
    const nim = req.query.nim
    const sql = "DELETE FROM mahasiswa WHERE nim = ?"
    db.query(sql, [nim], (error, result) => {
        if(error){
            res.status(400)
            res.send(error)
        }
        res.status(200)
        res.json("Data berhasil di hapus")
    })
}

export const UpdateMahasiswa=(req,res)=>{
    const nim = req.query.nim;
    const {nama_lengkap, kelas, alamat} = req.body
    if(nim || nama_lengkap || kelas || alamat){
        const query = `UPDATE mahasiswa SET nama_lengkap = "${nama_lengkap}", kelas = "${kelas}", alamat = "${alamat}" WHERE nim = ${nim}`;
        db.query(query, (error, result) => {
            if(error) res.status(400).send(error.message);
            res.json(result);
        })
    }
}

