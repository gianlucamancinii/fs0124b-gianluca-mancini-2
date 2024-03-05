function startHandler() {
    document.addEventListener('scroll', () => {
        let btn2 = document.getElementById('btn2');
        let btn = document.getElementById('btn');
        let navbar = document.getElementById('navbar');
        let verticalPoint = btn2.offsetTop + btn2.offsetHeight; 
        let scrollPoint = document.documentElement.scrollTop;
        if (scrollPoint > verticalPoint) {
            navbar.style.backgroundColor = 'white';
            btn.style.backgroundColor= 'green';
        } else {
            navbar.style.backgroundColor = '#ffc017';
            btn.style.backgroundColor= '#000';

        }
    });
}
window.onload = startHandler;