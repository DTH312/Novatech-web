
document.addEventListener('DOMContentLoaded', () => {
    // Cart Toggle
    const cartBtn = document.getElementById('cart-btn');
    const cartDropdown = document.getElementById('cart-dropdown');
    
    if(cartBtn && cartDropdown) {
        cartBtn.addEventListener('click', () => {
            cartDropdown.classList.toggle('active');
        });
    }

    // Banner Slider (2s interval)
    const slider = document.getElementById('slider');
    if(slider) {
        let slides = slider.children;
        let index = 0;
        const totalSlides = slides.length;
        
        setInterval(() => {
            index++;
            if (index >= totalSlides) {
                index = 0;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
        }, 2000);
    }
});
