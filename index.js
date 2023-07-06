window.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelectorAll('.progress_bar'),
    progressWidth = document.querySelector('.progress_wrap');
    
    progress.forEach(el => el.style.width = progressWidth.getBoundingClientRect().width * +el.dataset.value / 100 + 'px');
})

