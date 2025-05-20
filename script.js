function log(msg) {
  const output = document.getElementById("output");
  output.textContent += msg + "\n";
}

// Reprodutor Musical
function selecionarMusica() {
  const musica = document.getElementById("musica").value;
  log("🎶 Música selecionada: " + musica);
}

function tocar() {
  log("🎵 Tocando música...");
}

function pausar() {
  log("⏸ Música pausada.");
}

// Aparelho Telefônico
function ligar() {
  const numero = document.getElementById("numero").value;
  log("📞 Ligando para " + numero + "...");
}

function atender() {
  log("📲 Atendendo chamada...");
}

function correioVoz() {
  log("💬 Correio de voz iniciado.");
}

// Navegador na Internet
function exibirPagina() {
  const url = document.getElementById("url").value;
  log("🌐 Exibindo página: " + url);
}

function novaAba() {
  log("🆕 Nova aba aberta.");
}

function atualizar() {
  log("🔄 Página atualizada.");
}
