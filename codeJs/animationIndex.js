const starsBck = document.querySelector('#stars');
const moonBck = document.getElementById('moon');
const btnIndexBck = document.querySelector('.btn_index');

const bck = new TimelineMax();

bck.fromTo(
    moonBck,
    1.8,
    { y: '-150px', opacity: 0 },
    { y: '280px', opacity: 1, ease : Power2.easeInOut }
)
.fromTo(
    starsBck,
    1.3,
    { opacity: 0 },
    { opacity: 1, ease : Power2.easeInOut }
)
.fromTo(
    btnIndexBck,
    1,
    { y: '0px', opacity: 0 },
    { y: '-20px', opacity: 1, ease : Power2.easeInOut }
)
