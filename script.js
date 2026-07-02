// ===================================================================
// Dhruvita(RBM) Daal Baati — Full Food Ordering System
// ===================================================================

// ===== Menu Data =====
const MENU = [
  { id: 'classic', name: 'Classic Daal Baati', icon: '🫓', price: 120, unit: 'plate',
    badge: '🔥 Bestseller', badgeType: 'popular',
    tags: ['Panchmel Dal', '3 Baati', 'Desi Ghee'],
    desc: 'The timeless classic — 3 crispy golden baatis baked in clay oven, soaked in pure desi ghee, served with rich panchmel dal (5 lentils mix) and unlimited buttermilk.' },
  { id: 'churma', name: 'Churma Daal Baati', icon: '🍯', price: 160, unit: 'plate',
    badge: '⭐ Signature', badgeType: 'popular',
    tags: ['Sweet Churma', 'Panchmel Dal', 'Complete Thali'],
    desc: 'The royal Rajasthani trio! Crispy baatis with panchmel dal and sweet churma made from crushed baati, jaggery, and dry fruits. A complete indulgence with unlimited chaas.' },
  { id: 'garlic', name: 'Garlic Daal Baati', icon: '🧄', price: 140, unit: 'plate',
    badge: '🟢 Pure Veg', badgeType: 'veg',
    tags: ['Roasted Garlic', 'Spiced', 'Aromatic'],
    desc: 'Aromatic baatis infused with roasted garlic, paired with a tangy garlic-tempered dal. Bold, flavorful, and full of character — a garlic lover\'s paradise with unlimited buttermilk.' },
  { id: 'masala', name: 'Masala Stuffed Baati', icon: '🌶️', price: 150, unit: 'plate',
    badge: '🟢 Pure Veg', badgeType: 'veg',
    tags: ['Onion Filling', 'Spiced Masala', 'Crunchy'],
    desc: 'Crispy baatis stuffed with a spicy onion-masala filling, baked to perfection. The burst of flavors inside each baati will leave you craving more. Served with dal & unlimited chaas.' },
  { id: 'paneer', name: 'Paneer Stuffed Baati', icon: '🧀', price: 180, unit: 'plate',
    badge: '💎 Premium', badgeType: 'popular',
    tags: ['Fresh Paneer', 'Herbs', 'Rich'],
    desc: 'Indulge in baatis stuffed with creamy spiced paneer, herbs, and a touch of green chili. A premium twist on the classic — rich, satisfying, and served with dal & unlimited buttermilk.' },
  { id: 'mixveg', name: 'Mix Veg Baati', icon: '🥕', price: 150, unit: 'plate',
    badge: '🟢 Pure Veg', badgeType: 'veg',
    tags: ['Seasonal Veggies', 'Healthy', 'Wholesome'],
    desc: 'Wholesome baatis stuffed with a colorful medley of seasonal vegetables, lightly spiced. A nutritious and delicious option served with dal and unlimited fresh buttermilk.' },
  { id: 'dryfruit', name: 'Dry Fruit Baati', icon: '🥜', price: 220, unit: 'plate',
    badge: '👑 Royal', badgeType: 'popular',
    tags: ['Cashews', 'Almonds', 'Pistachios'],
    desc: 'The royal experience — premium baatis loaded with cashews, almonds, and pistachios. Rich, decadent, and luxurious. A festive delight served with panchmel dal & unlimited chaas.' },
  { id: 'cheese', name: 'Cheese Baati', icon: '🧈', price: 170, unit: 'plate',
    badge: '🆕 New', badgeType: 'popular',
    tags: ['Melted Cheese', 'Fusion', "Youngsters' Pick"],
    desc: 'A modern fusion twist! Crispy baatis filled with gooey melted cheese, complemented by traditional panchmel dal. The perfect blend of tradition and modern taste with unlimited buttermilk.' },
  { id: 'methi', name: 'Methi Baati', icon: '🌿', price: 140, unit: 'plate',
    badge: '🟢 Pure Veg', badgeType: 'veg',
    tags: ['Fresh Fenugreek', 'Herbal', 'Healthy'],
    desc: 'Nutritious baatis made with fresh fenugreek (methi) leaves — earthy, aromatic, and packed with health benefits. Served with dal and unlimited buttermilk. A herbal delight!' },
  { id: 'bajra', name: 'Bajra Baati', icon: '🌾', price: 130, unit: 'plate',
    badge: '🟢 Pure Veg', badgeType: 'veg',
    tags: ['Pearl Millet', 'Rustic', 'Traditional'],
    desc: 'Rustic bajra (pearl millet) baatis — a traditional Rajasthani winter specialty. Dense, earthy, and incredibly satisfying when soaked in ghee, served with hot dal & unlimited fresh chaas.' },
  { id: 'makka', name: 'Makka Baati', icon: '🌽', price: 140, unit: 'plate',
    badge: '🟢 Pure Veg', badgeType: 'veg',
    tags: ['Corn Flour', 'Sweet Taste', 'Seasonal'],
    desc: 'Unique corn flour baatis with a naturally sweet and nutty flavor. A seasonal specialty that pairs beautifully with tangy dal. Complete with generous ghee & unlimited buttermilk.' },
  { id: 'special', name: "Dhruvita's Special Thali", icon: '🍱', price: 299, unit: 'thali',
    badge: "👑 Dhruvita's Special", badgeType: 'popular',
    tags: ['4 Baati Types', 'Churma', 'Papad', 'Pickle'],
    desc: 'The ultimate feast! 4 assorted baatis (Classic, Masala, Paneer, Dry Fruit), panchmel dal, sweet churma, papad, pickle, salad, and of course — unlimited buttermilk. A grand celebration plate!' },
];

// ===== Cart State =====
let cart = [];

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartBadge = document.getElementById('cartBadge');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartDrawerClose = document.getElementById('cartDrawerClose');
const cartDrawerBody = document.getElementById('cartDrawerBody');
const cartEmpty = document.getElementById('cartEmpty');
const cartItems = document.getElementById('cartItems');
const cartDrawerFooter = document.getElementById('cartDrawerFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
const cartBrowseBtn = document.getElementById('cartBrowseBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutModalClose = document.getElementById('checkoutModalClose');
const checkoutStep1 = document.getElementById('checkoutStep1');
const checkoutStep2 = document.getElementById('checkoutStep2');
const checkoutStep3 = document.getElementById('checkoutStep3');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutTotals = document.getElementById('checkoutTotals');
const checkoutNextBtn = document.getElementById('checkoutNextBtn');
const checkoutBackBtn = document.getElementById('checkoutBackBtn');
const checkoutForm = document.getElementById('checkoutForm');
const floatingCart = document.getElementById('floatingCart');
const floatingCartCount = document.getElementById('floatingCartCount');
const floatingCartTotal = document.getElementById('floatingCartTotal');
const floatingCartBtn = document.getElementById('floatingCartBtn');
const toastContainer = document.getElementById('toastContainer');
const menuGrid = document.getElementById('menuGrid');
const navOrderBtn = document.getElementById('navOrderBtn');

// ===== Render Menu Cards =====
function renderMenu() {
  menuGrid.innerHTML = MENU.map((item, idx) => `
    <div class="menu-card animate-on-scroll" data-id="${item.id}" style="transition-delay: ${idx * 0.08}s;">
      <div class="menu-card-header">
        <div class="menu-card-icon">${item.icon}</div>
        <span class="menu-card-${item.badgeType}">${item.badge}</span>
      </div>
      <h3>${item.name}</h3>
      <div class="menu-card-tags">
        ${item.tags.map(t => `<span class="menu-tag">${t}</span>`).join('')}
      </div>
      <p class="description">${item.desc}</p>
      <div class="menu-card-footer">
        <div class="menu-card-price">₹${item.price} <small>/ ${item.unit}</small></div>
        <div class="menu-card-order" id="menuOrder-${item.id}">
          <button class="menu-card-add" data-id="${item.id}" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe scroll animations
  document.querySelectorAll('.menu-card.animate-on-scroll').forEach(el => observer.observe(el));
}

// ===== Update Menu Card Button (show qty controls when in cart) =====
function updateMenuCardButton(itemId) {
  const container = document.getElementById(`menuOrder-${itemId}`);
  if (!container) return;

  const cartItem = cart.find(c => c.id === itemId);

  if (cartItem && cartItem.qty > 0) {
    container.innerHTML = `
      <div class="menu-card-qty">
        <button class="qty-btn qty-minus" data-id="${itemId}" data-action="menu-minus">−</button>
        <span class="qty-value">${cartItem.qty}</span>
        <button class="qty-btn qty-plus" data-id="${itemId}" data-action="menu-plus">+</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="menu-card-add" data-id="${itemId}" title="Add to cart">+</button>
    `;
  }
}

// ===== Cart Operations =====
function addToCart(itemId) {
  const menuItem = MENU.find(m => m.id === itemId);
  if (!menuItem) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...menuItem, qty: 1 });
  }

  updateMenuCardButton(itemId);
  updateCart();
  showToast(`${menuItem.icon} ${menuItem.name} added to cart!`);

  // Flash the menu card
  const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
  if (card) {
    card.classList.add('added');
    setTimeout(() => card.classList.remove('added'), 800);
  }
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  updateMenuCardButton(itemId);
  updateCart();
}

function updateQty(itemId, delta) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(itemId);
    return;
  }

  updateMenuCardButton(itemId);
  updateCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function clearCart() {
  const ids = cart.map(c => c.id);
  cart = [];
  ids.forEach(id => updateMenuCardButton(id));
  updateCart();
}

// ===== Update Cart UI =====
function updateCart() {
  const count = getCartCount();
  const total = getCartTotal();

  // Badge
  cartBadge.textContent = count;
  cartBadge.classList.remove('bounce');
  void cartBadge.offsetWidth; // trigger reflow
  cartBadge.classList.add('bounce');

  // Empty / Items toggle
  if (count === 0) {
    cartEmpty.style.display = 'flex';
    cartItems.style.display = 'none';
    cartDrawerFooter.style.display = 'none';
    floatingCart.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    cartDrawerFooter.style.display = 'block';

    // Render cart items
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-icon">${item.icon}</div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price-each">₹${item.price} / ${item.unit}</span>
        </div>
        <div class="cart-item-actions">
          <span class="cart-item-price">₹${item.price * item.qty}</span>
          <div class="qty-controls">
            <button class="qty-btn qty-minus" data-id="${item.id}" data-action="cart-minus">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn qty-plus" data-id="${item.id}" data-action="cart-plus">+</button>
          </div>
          <button class="cart-item-remove" data-id="${item.id}" data-action="remove">🗑 Remove</button>
        </div>
      </div>
    `).join('');

    // Totals
    cartSubtotal.textContent = `₹${total}`;
    cartTotal.textContent = `₹${total}`;

    // Floating cart
    floatingCartCount.textContent = `${count} item${count > 1 ? 's' : ''}`;
    floatingCartTotal.textContent = `₹${total}`;
    if (window.innerWidth <= 768) {
      floatingCart.style.display = 'flex';
    }
  }

  // Save to localStorage
  localStorage.setItem('dhruvita_cart', JSON.stringify(cart));
}

// ===== Cart Drawer Toggle =====
function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

cartToggleBtn.addEventListener('click', openCartDrawer);
cartDrawerClose.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);
floatingCartBtn.addEventListener('click', openCartDrawer);
cartBrowseBtn.addEventListener('click', () => {
  closeCartDrawer();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// ===== Event Delegation for Cart/Menu Buttons =====
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]') || e.target.closest('.menu-card-add');

  if (!btn) return;

  // Add to cart from menu
  if (btn.classList.contains('menu-card-add')) {
    const id = btn.dataset.id;
    addToCart(id);
    return;
  }

  const id = btn.dataset.id;
  const action = btn.dataset.action;

  if (action === 'cart-plus' || action === 'menu-plus') {
    updateQty(id, 1);
  } else if (action === 'cart-minus' || action === 'menu-minus') {
    updateQty(id, -1);
  } else if (action === 'remove') {
    removeFromCart(id);
    showToast('🗑 Item removed from cart');
  }
});

// ===== Toast Notifications =====
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">✓</span> ${message}`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 3000);
}

// ===== Checkout Flow =====
function openCheckout() {
  if (cart.length === 0) return;

  closeCartDrawer();

  // Populate checkout items
  checkoutItems.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <div class="checkout-item-left">
        <span class="checkout-item-icon">${item.icon}</span>
        <div>
          <div class="checkout-item-name">${item.name}</div>
          <div class="checkout-item-qty">× ${item.qty} ${item.unit}${item.qty > 1 ? 's' : ''}</div>
        </div>
      </div>
      <span class="checkout-item-price">₹${item.price * item.qty}</span>
    </div>
  `).join('');

  const total = getCartTotal();
  checkoutTotals.innerHTML = `
    <div class="cart-summary-row">
      <span>Subtotal (${getCartCount()} items)</span>
      <span>₹${total}</span>
    </div>
    <div class="cart-summary-row">
      <span>Delivery Charge</span>
      <span class="cart-free-tag">FREE</span>
    </div>
    <div class="cart-summary-row">
      <span>🥛 Unlimited Buttermilk</span>
      <span class="cart-free-tag">FREE</span>
    </div>
    <div class="cart-summary-row cart-total-row">
      <span>Total</span>
      <span>₹${total}</span>
    </div>
  `;

  // Show step 1
  checkoutStep1.style.display = 'block';
  checkoutStep2.style.display = 'none';
  checkoutStep3.style.display = 'none';

  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

cartCheckoutBtn.addEventListener('click', openCheckout);
checkoutModalClose.addEventListener('click', closeCheckout);
checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) closeCheckout();
});

navOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (cart.length > 0) {
    openCheckout();
  } else {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu
    navLinks.classList.remove('active');
  }
});

// Step navigation
checkoutNextBtn.addEventListener('click', () => {
  checkoutStep1.style.display = 'none';
  checkoutStep2.style.display = 'block';
});

checkoutBackBtn.addEventListener('click', () => {
  checkoutStep2.style.display = 'none';
  checkoutStep1.style.display = 'block';
});

// Form submission
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const address = document.getElementById('custAddress').value;
  const payment = document.getElementById('custPayment');
  const paymentText = payment.options[payment.selectedIndex].text;
  const notes = document.getElementById('custNotes').value;
  const total = getCartTotal();
  const count = getCartCount();

  // Generate order ID
  const orderId = 'RBM' + Date.now().toString(36).toUpperCase().slice(-6);

  // Build order summary
  const itemSummary = cart.map(item =>
    `<p>📦 <strong>${item.name}</strong> × ${item.qty} — ₹${item.price * item.qty}</p>`
  ).join('');

  checkoutStep2.style.display = 'none';
  checkoutStep3.style.display = 'block';
  checkoutStep3.innerHTML = `
    <div class="order-confirmation">
      <div class="success-icon">🎉</div>
      <h2>Order <span style="color: var(--clr-primary);">Confirmed!</span></h2>
      <p style="color: var(--clr-text-muted); margin-bottom: 16px;">Thank you, <strong>${name}</strong>!</p>
      <div class="order-id">#${orderId}</div>

      <div class="order-detail">
        <p>👤 <strong>${name}</strong></p>
        <p>📞 <strong>${phone}</strong></p>
        <p>📍 ${address}</p>
        <p>💳 ${paymentText}</p>
        ${notes ? `<p>📝 ${notes}</p>` : ''}
        <hr style="border: none; border-top: 1px solid var(--clr-border); margin: 12px 0;">
        ${itemSummary}
        <hr style="border: none; border-top: 1px solid var(--clr-border); margin: 12px 0;">
        <p style="font-size: 1.05rem;"><strong>Total: ₹${total}</strong> (${count} items)</p>
        <div class="chaas-note">🥛 Unlimited Buttermilk included with your order!</div>
      </div>

      <p style="color: var(--clr-text-muted); font-size: 0.9rem; margin-bottom: 20px;">
        We'll call you at <strong>${phone}</strong> to confirm. Your order will arrive hot & fresh!
      </p>

      <button class="btn-primary btn-full" onclick="finishOrder()" style="border:none;">
        Back to Menu 🫓
      </button>
    </div>
  `;

  // Clear cart
  clearCart();
});

// Finish order — reload cleanly
window.finishOrder = function() {
  closeCheckout();
  checkoutStep1.style.display = 'block';
  checkoutStep2.style.display = 'none';
  checkoutStep3.style.display = 'none';
  checkoutForm.reset();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== Navbar Scroll =====
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  if (currentScroll > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== Back to Top =====
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Mobile Hamburger =====
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
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

navLinks.querySelectorAll('a:not(.nav-order-btn)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ===== Scroll Animations =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = navbar.offsetHeight;
      window.scrollTo({
        top: target.offsetTop - navHeight - 20,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Active Nav Highlight =====
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

// ===== Parallax Hero =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && scrolled < window.innerHeight) {
    heroVisual.style.transform = `translateY(${scrolled * 0.08}px)`;
  }
});

// ===== Stagger specialty & testimonial cards =====
document.querySelectorAll('.specialty-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.testimonial-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.12}s`;
});

// ===== Keyboard shortcuts =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCartDrawer();
    closeCheckout();
  }
});

// ===== Load cart from localStorage =====
function loadCart() {
  try {
    const saved = localStorage.getItem('dhruvita_cart');
    if (saved) {
      cart = JSON.parse(saved);
      cart.forEach(item => updateMenuCardButton(item.id));
      updateCart();
    }
  } catch (e) {
    cart = [];
  }
}

// ===== Initialize =====
renderMenu();
loadCart();

console.log('🫓 Dhruvita(RBM) Daal Baati — Full Ordering System Loaded!');
console.log('📍 Kukshi, Dhar (MP) | 🥛 Unlimited Buttermilk!');
