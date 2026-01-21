console.log("Admin do restaurante rodando!");

const SUPABASE_URL = "https://dokczdvfyudnhofjphl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_aYa1L80xClhEU2RIjlPl_A_IffoDTqJ";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase conectado:", supabase);
