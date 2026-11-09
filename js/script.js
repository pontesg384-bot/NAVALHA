
const formulario = document.getElementById("form-agendamento");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const profissional = document.getElementById("profissional").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    const mensagem = document.getElementById("mensagem-agendamento");

    mensagem.textContent = "Agendamento solicitado com sucesso, " + nome + 
        "! Serviço: " + servico + 
        ". Profissional: " + profissional +
        ". Data: " + data +
        ". Horário: " + horario;

    formulario.reset();
});
