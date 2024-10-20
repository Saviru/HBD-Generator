const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text');


const bdValues = window.location.search;

const bdParems = new URLSearchParams(bdValues);

const bdName = bdParems.get('uid');

click.addEventListener('click', () =>{
    if(click.className === 'click'){
        click.classList.add('active');
        giftBox.classList.add('active');
        shadow.classList.add('active');
        giftContainer.classList.add('active');
        text.classList.add('active');
        text.classList.remove('inactive');
    }
    else{
        click.classList.remove('active');
        giftBox.classList.remove('active');
        shadow.classList.remove('active');
        giftContainer.classList.remove('active');
        text.classList.remove('active');
        text.classList.add('inactive');
    }
})

text.addEventListener('click', () =>{
    window.location.href = `https://tinyurl.com/${bdName}`;
})


