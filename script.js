 // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Profile tabs
  const tabData = {
    gp: [
      { icon: '📊', label: 'Painel Gestão de Pessoas' },
      { icon: '💼', label: 'Holerite e Contracheque' },
      { icon: '📅', label: 'Calendário e Feriados' },
      { icon: '🏢', label: 'Agendamento de Salas' },
    ],
    beneficios: [
      { icon: '🏥', label: 'Plano de Saúde' },
      { icon: '🎓', label: 'Auxílio Educação' },
      { icon: '🚗', label: 'Vale Transporte' },
      { icon: '🍽️', label: 'Vale Refeição' },
    ],
    carreira: [
      { icon: '📈', label: 'Promoções e Progressões' },
      { icon: '📝', label: 'Concursos e Processos' },
      { icon: '🎓', label: 'Capacitações' },
      { icon: '⭐', label: 'Avaliação de Desempenho' },
    ],
    saude: [
      { icon: '💊', label: 'Assistência Médica' },
      { icon: '🦷', label: 'Assistência Odontológica' },
      { icon: '🧘', label: 'Qualidade de Vida' },
      { icon: '📋', label: 'Perícias e Laudos' },
    ],
  };

  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.tab;
      const grid = document.getElementById('profileGrid');
      grid.innerHTML = tabData[key].map(item => `
        <a href="#" class="profile-item">
          <div class="p-icon">${item.icon}</div>
          <span>${item.label}</span>
        </a>
      `).join('');
    });
  });

  // Smooth fade-in on scroll for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section, .info-banner').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
  