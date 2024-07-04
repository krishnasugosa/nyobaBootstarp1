const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
});

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-btn')
        }
    });
});

const hidden = document.querySelectorAll('.title1');
const hidden2 = document.querySelectorAll('.cards');
hidden.forEach((el)=> observer.observe(el));
hidden2.forEach((el)=> observer2.observe(el));

const toogle1 = document.querySelector('.a2');
const toogle2 = document.querySelector('.a3');
const navbar = document.querySelector('.navbar-inner');

toogle1.addEventListener('click',()=>{
   navbar.classList.add('show2');
   toogle1.classList.add('hidden');
   toogle2.classList.add('show-On');
});

toogle2.addEventListener('click',()=>{
    navbar.classList.remove('show2');
    toogle1.classList.remove('hidden');
    toogle1.classList.add('hidden-toggle');
    toogle2.classList.remove('show-On');
});