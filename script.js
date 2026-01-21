console.log("Admin do restaurante rodando!");
console.log("window.supabase =", window.supabase);

const SUPABASE_URL = "https://dokczdvfyudnhofjphl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_aYa1L80xClhEU2RIjlPl_A_IffoDTqJ";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("sb conectado:", sb);

const resultado = document.getElementById("resultado");
const btnEstoque = document.getElementById("btnEstoque");

btnEstoque.addEventListener("click", async () => {
  resultado.innerHTML = "Carregando ingredientes...";

  const { data, error } = await sb
    .from("ingredientes")
    .select("*")
    .limit(50);

  if (error) {
    console.error(error);
    resultado.innerHTML = "Erro ao buscar ingredientes: " + error.message;
    return;
  }

  if (!data || data.length === 0) {
    resultado.innerHTML = "Nenhum ingrediente cadastrado.";
    return;
  }

  let html = "<h3>Ingredientes</h3><ul>";
  data.forEach(item => {
    html += `<li>${JSON.stringify(item)}</li>`;
  });
  html += "</ul>";

  resultado.innerHTML = html;
});

