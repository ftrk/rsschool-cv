window.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.courses_list_item'),
        courseItgid = document.querySelector('.itgid_list'),
        courseDmitriLavrik = document.querySelector('.dmitrylavrik_list');

    const progress = document.querySelectorAll('.progress_bar'),
        progressWidth = document.querySelector('.progress_wrap');

    const stars = document.querySelectorAll('.level');
    const checkStars = function(el, w){
        let div = document.createElement('div');
            el.append(div);
            div.style.width = `${w}px`;
            div.style.height = '30px';
            div.style.backgroundImage = 'url(./assets/svg/language/black-icon.svg)';
    };

    stars.forEach(el => {
        let langLvl = +el.dataset.lvl;
        if(langLvl === 6) el.style.backgroundImage = 'url(./assets/svg/language/black-icon.svg)';
        if(langLvl === 5) checkStars(el, 150);
        if(langLvl === 4) checkStars(el, 120);
        if(langLvl === 3) checkStars(el, 90);
        if(langLvl === 2) checkStars(el, 60);
        if(langLvl === 1) checkStars(el, 30);
    });

    progress.forEach(el => el.style.width = progressWidth.getBoundingClientRect().width * +el.dataset.value / 100 + 'px');

    courses.forEach(el => {
        el.addEventListener('click', () => {
            if(el.classList.contains('itgid')) {
                if(courseItgid.classList.contains('active')) courseItgid.classList.remove('active');
                else courseItgid.classList.add('active');
            }
            else {
                if(el.classList.contains('dl')) {
                    if(courseDmitriLavrik.classList.contains('active')) courseDmitriLavrik.classList.remove('active')
                    else courseDmitriLavrik.classList.add('active'); 
                }
            }
        });
    });

    (function showNavigation(){
            const nav = document.querySelector('.nav_list');
            window.onscroll = () => {
            window.pageYOffset > 50
                ? nav.classList.add('inactive')
                : nav.classList.remove('inactive');
        }
    })();

})
