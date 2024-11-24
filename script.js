// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Dark Mode Toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Progress Bar
  window.addEventListener('scroll', () => {
    const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollProgress + '%';
  });
  
  // Flashcards
  function showFlashcards() {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = `
      <div class="flashcard">What is the formula for speed? <span>Speed = Distance/Time</span></div>
      <div class="flashcard">What is the capital of India? <span>New Delhi</span></div>
    `;
    document.querySelectorAll('.flashcard span').forEach(flash => flash.style.display = 'none');
    document.querySelectorAll('.flashcard').forEach(flashcard => {
      flashcard.addEventListener('click', () => {
        flashcard.querySelector('span').style.display = 'block';
      });
    });
  }
  
  // Pomodoro Timer
  let pomodoroTime = 1500; // 25 minutes
  let pomodoroInterval;
  function startPomodoro() {
    const timer = document.getElementById('pomodoro-timer');
    pomodoroInterval = setInterval(() => {
      if (pomodoroTime <= 0) {
        clearInterval(pomodoroInterval);
        alert('Pomodoro session complete!');
      } else {
        pomodoroTime--;
        const minutes = Math.floor(pomodoroTime / 60);
        const seconds = pomodoroTime % 60;
        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    }, 1000);
  }
  