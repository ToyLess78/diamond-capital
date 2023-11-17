const expanded = (el) => {
    document.querySelectorAll('[aria-expanded="true"]').forEach(item => {
        item.ariaExpanded = 'false';
    })
    el.ariaExpanded = 'true';
}
document.body.addEventListener('click', (e) => {
    if (e.target.closest('[aria-expanded]')) {
        const li = e.target.closest('[aria-expanded]')
        li.ariaExpanded === 'false' ? expanded(li)
            : li.ariaExpanded = 'false';
    }
})

window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id !== 'preload') {
                entry.target.classList.add('scroll-animation');
                observer.unobserve(entry.target);
            } else if (entry.isIntersecting && entry.target.id === 'preload') {
                document.querySelector('body').classList.replace('overflow-scroll', 'overflow-hidden');
                document.querySelector('object').data = 'img/animate.svg';
                observer.unobserve(entry.target);
            } else if (!entry.isIntersecting && entry.target.id === 'preload') {
                entry.target.classList.add('hidden');
                observer.unobserve(entry.target);
            }
        })
    }, {threshold: 0.5})

    document.querySelectorAll('.need-animation').forEach(img => observer.observe(img))
}
document.getElementById('hide-preload').addEventListener('click', () => {
    document.body.classList.replace('overflow-hidden', 'overflow-scroll');
    document.getElementById('preload').classList.add('hidden');
})