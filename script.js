// Define datas alvo diferentes para cada contagem regressiva
const countdownDates = {
  countdownA: new Date("2024-11-07T18:30:00").getTime(),  // Data alvo para A
  countdownB: new Date("2024-11-14T18:30:00").getTime(),  // Data alvo para B
  countdownC: new Date("2024-11-21T18:30:00").getTime(),  // Data alvo para C
  countdownD: new Date("2024-11-28T18:30:00").getTime()   // Data alvo para D
};

// Função para atualizar a contagem regressiva de um elemento específico
function startCountdown(elementId, targetDate) {
const interval = setInterval(() => {
  const now = new Date().getTime();  // Obtém o tempo atual
  let distance = targetDate - now;  // Calcula a diferença de tempo

  // Se a contagem regressiva já tiver terminado (distância negativa), define como 0
  if (distance < 0) {
    distance = 0;
  }

  // Cálculos para dias, horas, minutos, segundos e milissegundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const miliseconds = Math.floor(distance % 1000);  // Milissegundos restantes

  // Formata os milissegundos para ter sempre 2 dígitos
  const formattedMiliseconds = String(miliseconds).padStart(3, '0').slice(0, 2);

  // Atualiza o HTML com os valores calculados
  document.getElementById(elementId).innerHTML = 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s " + formattedMiliseconds + "ms";
  
  // Caso a contagem tenha chegado a 0, limpa o intervalo para evitar que continue rodando
  if (distance === 0) {
    clearInterval(interval);
  }
}, 100);  // Atualiza a cada 100ms para mostrar milissegundos
}

// Inicia a contagem regressiva para cada elemento com data específica
document.addEventListener("DOMContentLoaded", function() {
startCountdown("countdownA", countdownDates.countdownA);
startCountdown("countdownB", countdownDates.countdownB);
startCountdown("countdownC", countdownDates.countdownC);
startCountdown("countdownD", countdownDates.countdownD);
});
