let btnSearch = document.getElementById('btnSearch')
let boxSearch = document.querySelector('.boxSearch')
let search = false;
let layer = document.createElement('div');
layer.classList.add('layer');
btnSearch.addEventListener('click', ()=>{
    if(screen.width>570){

        search.classList.toggle('inputSearchSlide')
    }
    else if(screen.width<=570){

        if(boxSearch.classList.contains('boxSearchUbicated')==false){
            boxSearch.classList.add('boxSearchUbicated')
            
            document.querySelector('.container').appendChild(layer)
            search=true;
            console.log('1')
            boxHalfBottom.classList.remove('boxHalfBottomUbicated');
            line1.classList.remove('activeline1')
            line2.classList.remove('activeline2')
            line3.classList.remove('activeline3')

        }
       
        else if(boxSearch.classList.contains('boxSearchUbicated')==true){
           console.log('2')
            boxSearch.classList.remove('boxSearchUbicated')
            document.querySelector('.container').removeChild(layer)
            search=false;
        }
    }
})

let btnSliderMenuHio = document.getElementById('btnSliderMenuHio');
btnSliderMenuHio.addEventListener('click', ()=>{
    document.getElementById('containerSlideMenuHio').classList.toggle('sliderMenuHioBlock')
    console.log('asd')
})

// Code for hambur menu
let boxBarsMenu = document.querySelector('.boxBarsMenu');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let boxHalfBottom = document.querySelector('.boxHalfBottom');

boxBarsMenu.addEventListener('click', ()=>{
        if(search==true){
            boxSearch.classList.remove('boxSearchUbicated');
        }



        if(boxHalfBottom.classList.contains('boxHalfBottomUbicated')==true){
            boxHalfBottom.classList.remove('boxHalfBottomUbicated');
            document.querySelector('.container').removeChild(layer)
            line1.classList.remove('activeline1')
            line2.classList.remove('activeline2')
            line3.classList.remove('activeline3')
        }
        else if(boxHalfBottom.classList.contains('boxHalfBottomUbicated')==false){
            document.querySelector('.container').appendChild(layer)
            boxHalfBottom.classList.add('boxHalfBottomUbicated');
            line1.classList.add('activeline1')
            line2.classList.add('activeline2')
            line3.classList.add('activeline3')

        }
    
})

