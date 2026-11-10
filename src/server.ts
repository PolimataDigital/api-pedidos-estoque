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

app.get("/produtos/:id", async (req,res) =>{
    try{
        const id = req.params.id;
        const padrao = /^[1-9][0-9]*$/;

        if(!padrao.test(id)){
            return res.status(400).json({
                erro: "Entrada inválida!"
            })
        }

        const idBigInt = BigInt(id);

        if(idBigInt>9223372036854775807n){
            return res.status(400).json({
                erro: "Entrada inválida!"
            })
        }
        const resultado = await pool.query(
            'SELECT id,nome,sku,preco,estoque FROM produtos WHERE id= $1',
            [idBigInt]
        )
        if(resultado.rows.length===0){
            return res.status(404).json({
                erro: "Produto não existe!"
            })
        }else{
            res.json(resultado.rows[0])
        }
    }
    catch(erro){
        console.error("Erro no servidor!",erro);

        res.status(500).json({
            erro: "Erro do servidor!"
        })
    }
})