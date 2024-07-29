/*const themeDark = document.getElementById('darkMode');
const themeLight = document.getElementById('lightMode');


themeDark.addEventListener('click',()=>{
    document.body.classList.add('dark-mode')
})

themeLight.addEventListener('click',()=>{
    document.body.classList.add('light-mode')
})*/
document.addEventListener('DOMContentLoaded', function() {
           
    document.querySelector('#darkMode').onclick = function() {
        document.querySelector('#bodyMode').style.background = 'black';
        document.querySelector('p').style.color = 'white';
        document.querySelector('.web-text').style.color = 'white';
        document.querySelector('.web-text2').style.color = 'white';
        document.querySelector('.web-text3').style.color = 'white';
        document.querySelector('h1').style.color = 'skyblue';
        document.querySelector('h2').style.color = 'lightblue';
        document.querySelector('#h2-text').style.color = 'lightblue';
        document.querySelector('#h2-text1').style.color = 'lightblue';
        document.querySelector('h3').style.color = 'lightblue';
        document.querySelector('#h3-text').style.color = 'lightblue';
        document.querySelector('#h3-text1').style.color = 'lightblue';
        
    }
    

    document.querySelector('#lightMode').onclick = function() {
        document.querySelector('#bodyMode').style.background = '';
        document.querySelector('p').style.color = 'black';
        document.querySelector('h1').style.color = '';
        document.querySelector('.web-text').style.color = '';
        document.querySelector('.web-text2').style.color = '';
        document.querySelector('.web-text3').style.color = '';
        document.querySelector('h2').style.color = '';
        document.querySelector('#h2-text').style.color = '';
        document.querySelector('#h2-text1').style.color = '';
        document.querySelector('h3').style.color = '';
        document.querySelector('#h3-text').style.color = '';
        document.querySelector('#h3-text1').style.color = '';
        
    }
   
});

