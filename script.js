document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Search Logic
    const searchInput = document.getElementById('commandSearch');
    const cards = document.querySelectorAll('.cmd-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            cards.forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                if (name.includes(value) || desc.includes(value)) {
                    card.style.display = "flex";
                    card.style.opacity = "1";
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => { if(card.style.opacity === "0") card.style.display = "none"; }, 300);
                }
            });
        });
    }

    // 2. Copy Command
    document.querySelectorAll('.copy-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const cmdName = this.parentElement.querySelector('h3').textContent;
            navigator.clipboard.writeText('$' + cmdName);
            this.style.color = '#bb86fc';
            setTimeout(() => { this.style.color = ''; }, 1000);
        });
    });

    // 3. Background Glow Effect
    document.addEventListener('mousemove', (e) => {
        const sphere = document.querySelector('.glow-sphere');
        if (sphere) {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            sphere.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });
});
