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


// carousel

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.cards');

  carousels.forEach((carousel) => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = 'grabbing';
    };

    const drag = (e) => {
      if (!isDragging) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    };

    const stopDrag = () => {
      isDragging = false;
      carousel.style.cursor = 'grab';
    };

    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('mouseup', stopDrag);
    carousel.addEventListener('mouseleave', stopDrag);

    carousel.addEventListener('touchstart', startDrag);
    carousel.addEventListener('touchmove', drag);
    carousel.addEventListener('touchend', stopDrag);
  });
});
