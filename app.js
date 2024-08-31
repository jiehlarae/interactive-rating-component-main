const ratingState = document.querySelector('#ratingState');
const btns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('#submitBtn');
const startState = document.querySelector('#startState')
const rateScore = document.querySelector('#rateScore');
let ratingValue = '';

ratingState.style.display = 'none';

for (let btn of btns) {
    btn.addEventListener('click', function () {
        for (let b of btns) {
            b.style.backgroundColor = '';
            b.style.color = '';
        }

        btn.style.backgroundColor = '#fff';
        btn.style.color = '#262E38';
        ratingValue = btn.innerText;
    })
}

submitBtn.addEventListener('click', function () {
    startState.style.display = 'none';
    ratingState.style.display = 'block';
    rateScore.innerText = ratingValue;
})