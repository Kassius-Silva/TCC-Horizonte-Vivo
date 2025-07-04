const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Só anima uma vez
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-target').forEach(element => {
    observer.observe(element);
  });