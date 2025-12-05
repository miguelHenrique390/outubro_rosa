 function enviarWhatsApp() {
            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let telefone = document.getElementById("telefone").value;
            let comentario = document.getElementById("comentario").value;

            let numero = "5519998588924"; 
            let mensagem = `Olá, meu nome é ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AComentário: ${comentario}`;

            let url = `https://wa.me/${numero}?text=${mensagem}`;

            window.open(url, '_blank');
        }