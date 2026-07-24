// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SHOP SIZES =====
document.querySelectorAll('.size').forEach(size => {
    size.addEventListener('click', function() {
        const container = this.closest('.shop-sizes');
        container.querySelectorAll('.size').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===== FAVORITE BUTTONS =====
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.textContent = this.textContent === '♡' ? '❤️' : '♡';
    });
});

// ===== ADD TO CART =====
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = '✓ Добавлено';
        this.style.background = '#05C84A';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
    });
});

// ===== SUBSCRIBE FORM =====
document.querySelector('.subscribe-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const btn = this.querySelector('button');
    
    if (input.value.trim()) {
        const originalText = btn.textContent;
        btn.textContent = '✓ Подписано!';
        btn.style.background = '#05C84A';
        input.value = '';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }
});

// ===== ARROW BUTTONS (SCROLL) =====
document.querySelectorAll('.arrow-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = this.closest('.section-header');
        if (!container) return;
        
        const grid = container.parentElement.querySelector('.match-cards, .video-grid, .shop-grid');
        if (!grid) return;
        
        const scrollAmount = 300;
        const isPrev = this.classList.contains('prev');
        
        grid.scrollBy({
            left: isPrev ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    });
});

// ===== DROPDOWN TOUCH SUPPORT =====
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            const menu = this.parentElement.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        }
    });
});

// Close dropdowns on outside click
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (!menu.parentElement.contains(e.target)) {
                menu.style.display = 'none';
            }
        });
    }
});

// ===== COUNTDOWN TIMERS =====
document.querySelectorAll('.countdown').forEach(el => {
    const parts = el.textContent.trim().split(':');
    let hours = parseInt(parts[0]) || 0;
    let minutes = parseInt(parts[1]) || 0;
    let seconds = parseInt(parts[2]) || 0;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
            }
        }
        el.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    }, 1000);
});

console.log('⚽ ФК Unplayed — создаем историю с нуля!');