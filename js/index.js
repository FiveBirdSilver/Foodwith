const scroll = document.querySelector('.scroll');
const accordion = document.querySelectorAll('.accordion');

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
        const ans = this.nextElementSibling;

        if(ans.style.display == 'flex') {
            ans.style.display = 'none';
        }
        else {
            ans.style.display = 'flex';
        };
    });
};

scroll.addEventListener('click',function(){
    window.scroll(0,0);
});









