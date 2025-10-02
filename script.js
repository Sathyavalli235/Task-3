window.addEventListener('scroll',function(){
    const header=this.document.querySelector('.header');
    if(window.scrollY>50){
        header.style.backgroundColor='blue';
    }
    else{
        header.style.backgroundColor='aqua';
    }
})