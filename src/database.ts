import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://juliaf_user:VQaFobFp1V8cOTdCgllZkKlOOlXBCWCS@dpg-crbp025ds78s73942ta0-a.oregon-postgres.render.com/juliaf";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
