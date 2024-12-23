emailjs.init('-xVtu8QQu3jRdSorh'); // Substitua por seu User ID do EmailJS

document.getElementById('contact-me').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const statusMessage = document.getElementById('status-message');
  statusMessage.style.display = 'none';

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs
    .send('service_eb8c00y', 'template_rcol2za', templateParams)
    .then(() => {
      statusMessage.style.display = 'block';
      statusMessage.textContent = 'Mensagem enviada com sucesso!';
    })
    .catch((error) => {
      statusMessage.style.display = 'block';
      statusMessage.style.color = '#f76c6c';
      statusMessage.textContent = 'Erro ao enviar a mensagem. Tente novamente.';
      console.error('Erro:', error);
    });
});