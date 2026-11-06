import express from "express";
import { pool } from "./db.js";

const app= express();

app.get("/health",(req,res) =>{
    res.json({"status":"ok"});
});

app.listen(3000, ()=>{
    console.log("Servidor em perfeito funcionamento.");
    
});

app.get("/produtos", async(req,res)=>{
    try{
        const resultado =await pool.query(
            'SELECT id,nome,sku,preco,estoque FROM produtos ORDER BY id;'
        )
        res.json(resultado.rows)

    }

    catch(erro){
        console.error("Erro no servidor!",erro);

        res.status(500).json({
            erro: "Erro do servidor!"
        })
    }
})