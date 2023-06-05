document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = Array.from(
        document.querySelectorAll(".carousel-item")
    );
    const carouselButtons = Array.from(
        document.querySelectorAll(".carousel-button")
    );
    let currentIndex = 0;

    carouselButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const direction = this.dataset.direction;

            if (direction === "next") {
                currentIndex++;
                if (currentIndex >= carouselItems.length) {
                    currentIndex = 0;
                }
            } else {
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = carouselItems.length - 1;
                }
            }

            carouselItems.forEach(function (item) {
                item.classList.remove("active");
            });

            carouselItems[currentIndex].classList.add("active");
        });
    });
});


// Definir a data de término da promoção (exemplo: 31 de dezembro de 2023 às 23:59:59)
const endDate = new Date('2023-12-31T23:59:59');

// Função para atualizar o contador regressivo
function updateCountdown() {
  const now = new Date();
  const difference = endDate - now;

  // Calcular horas, minutos e segundos restantes
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  // Exibir a contagem regressiva no elemento com id "countdown"
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = `Promoção termina em: ${hours}h ${minutes}m ${seconds}s`;

  // Verificar se a promoção terminou
  if (difference <= 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = 'Promoção encerrada!';
  }
}

// Atualizar o contador regressivo a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Chamar a função updateCountdown() inicialmente para exibir imediatamente a contagem regressiva
updateCountdown();
