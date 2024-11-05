// Define datas alvo diferentes para cada contagem regressiva
const countdownDates = {
    countdownA: new Date("2024-11-07T18:30:00").getTime(),  // Data alvo para A
    countdownB: new Date("2024-11-14T18:30:00").getTime(),   // Data alvo para B
    countdownC: new Date("2024-11-21T18:30:00").getTime(),   // Data alvo para C
    countdownD: new Date("2024-11-28T18:30:00").getTime()    // Data alvo para D
  };
  
  // Função para atualizar a contagem regressiva de um elemento específico
  function startCountdown(elementId, targetDate) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById(elementId).innerHTML = "Tempo esgotado!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById(elementId).innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
  }
  
  // Inicia uma contagem regressiva para cada elemento com data específica
  startCountdown("countdownA", countdownDates.countdownA);
  startCountdown("countdownB", countdownDates.countdownB);
  startCountdown("countdownC", countdownDates.countdownC);
  startCountdown("countdownD", countdownDates.countdownD);
  