// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const orderModal = document.getElementById('orderModal');
const modalClose = document.getElementById('modalClose');
const heroOrderBtn = document.getElementById('heroOrderBtn');
const navOrderBtn = document.getElementById('navOrderBtn');
const orderForm = document.getElementById('orderForm');
const backToTop = document.getElementById('backToTop');

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add scrolled class
  if (currentScroll > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top button
  if (currentScroll > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  lastScroll = currentScroll;
});

// ===== Back to Top =====
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Mobile Hamburger Menu =====
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');

  // Animate hamburger lines
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu on link click
navLinks.querySelectorAll('a:not(.nav-order-btn)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ===== Order Modal =====
function openModal() {
  orderModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  orderModal.classList.remove('active');
  document.body.style.overflow = '';
}

heroOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openModal();
});

navOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openModal();
});

modalClose.addEventListener('click', closeModal);

orderModal.addEventListener('click', (e) => {
  if (e.target === orderModal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Menu card add buttons also open modal
document.querySelectorAll('.menu-card-add').forEach(btn => {
  btn.addEventListener('click', () => {
    // Find the card's item name
    const card = btn.closest('.menu-card');
    const itemName = card.querySelector('h3').textContent;

    openModal();

    // Try to auto-select the corresponding item in dropdown
    const select = document.getElementById('orderItem');
    for (let option of select.options) {
      if (option.text.toLowerCase().includes(itemName.toLowerCase().split(' ')[0])) {
        option.selected = true;
        break;
      }
    }
  });
});

// ===== Order Form Submission =====
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('orderName').value;
  const phone = document.getElementById('orderPhone').value;
  const address = document.getElementById('orderAddress').value;
  const item = document.getElementById('orderItem');
  const itemText = item.options[item.selectedIndex].text;
  const qty = document.getElementById('orderQty').value;
  const notes = document.getElementById('orderNotes').value;

  // Build WhatsApp message
  const message = `🫓 *New Order — Druvita's Daal Baati*\n\n` +
    `👤 Name: ${name}\n` +
    `📞 Phone: ${phone}\n` +
    `📍 Address: ${address}\n` +
    `🍽️ Item: ${itemText}\n` +
    `📦 Quantity: ${qty} Plate(s)\n` +
    `📝 Notes: ${notes || 'None'}\n\n` +
    `🥛 Includes Unlimited Buttermilk!\n` +
    `Thank you for ordering! 🙏`;

  // Show confirmation
  const modalContent = document.querySelector('.modal');
  modalContent.innerHTML = `
    <div style="text-align: center; padding: 20px 0;">
      <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
      <h2 style="font-family: var(--ff-heading); font-size: 1.8rem; margin-bottom: 12px;">
        Order <span style="color: var(--clr-primary);">Received!</span>
      </h2>
      <p style="color: var(--clr-text-muted); margin-bottom: 8px; font-size: 1rem;">
        Thank you, <strong>${name}</strong>! 🙏
      </p>
      <p style="color: var(--clr-text-muted); margin-bottom: 24px; font-size: 0.9rem;">
        We'll call you at <strong>${phone}</strong> to confirm your order shortly.
      </p>
      <div style="padding: 20px; background: var(--clr-bg-card); border-radius: 12px; border: 1px solid var(--clr-border); text-align: left; margin-bottom: 24px;">
        <p style="font-size: 0.85rem; color: var(--clr-text-muted); margin-bottom: 8px;">📦 <strong>${itemText}</strong> × ${qty}</p>
        <p style="font-size: 0.85rem; color: var(--clr-green);">🥛 Unlimited Buttermilk Included!</p>
      </div>
      <button onclick="location.reload()" class="btn-primary" style="border: none; width: 100%; justify-content: center; padding: 16px; font-size: 1rem;">
        Back to Menu
      </button>
    </div>
  `;
});

// ===== Scroll Animations (Intersection Observer) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Active nav link highlight =====
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
  const scrollY = window.pageYOffset + 200;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = 'var(--clr-primary)';
      } else {
        navLink.style.color = '';
      }
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ===== Parallax effect on hero =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && scrolled < window.innerHeight) {
    heroVisual.style.transform = `translateY(${scrolled * 0.08}px)`;
  }
});

// ===== Add stagger delay to menu cards =====
document.querySelectorAll('.menu-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.08}s`;
});

// ===== Add stagger delay to specialty cards =====
document.querySelectorAll('.specialty-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ===== Add stagger delay to testimonial cards =====
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.12}s`;
});

console.log('🫓 Druvita\'s Daal Baati — Website Loaded Successfully!');
console.log('📍 Kukshi, Dhar (MP) | 🥛 Unlimited Buttermilk!');
