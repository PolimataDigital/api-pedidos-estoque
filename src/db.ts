import { Pool } from "pg";

export const pool = new Pool({
    connectionTimeoutMillis: 5000
});

pool.on("error", (erro) => {
    console.error(erro,'Erro em conexão ociosa do PostgreSQL:')
});