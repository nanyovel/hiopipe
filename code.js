// Code for slider of image-----------------------------------------------------------------------------------------
// Code for slider of image-----------------------------------------------------------------------------------------
// Code for slider of image-----------------------------------------------------------------------------------------
let qtyProducts = document.querySelector('.boxMain').childElementCount;
let stringQtyProducts = qtyProducts.toString()
document.querySelector('.boxMain').style.width = stringQtyProducts+'00%'

let btn_left = document.getElementById('arrowLeft');
let btn_right = document.getElementById('arrowRigth');
btn_left.addEventListener('click', sliderPlus)
btn_right.addEventListener('click', sliderPlus)

let move=0;
let stringMove;
let stringPorcg = "%";
let completMove;
let depositButton=0;
let depositTouch=0;
let arrowPress;
let arrowClick=false;
let touchUp=false;
let paginationClick=false;
let clickedd;
let locationGlobal =0;

// Functions for scroll arrows
function sliderPlus(e){
    arrowClick=true;
    if(e.target.id == 'arrowLeft'&&move<0){

        clikeddDot(btnsPagination[locationGlobal-1])
        locationGlobal--
        arrowPress = 'left'
    }
    else if(e.target.id == 'arrowRigth' && move>(qtyProducts-1)*(-100)){
        clikeddDot(btnsPagination[locationGlobal+1])
        locationGlobal++
        arrowPress='right'
    }
    

    //So that when clicking on one of the scroll arrows with the mouse, it activates the function that selects the corresponding pagination button 
    clickedd = move*(-1)/100;
    if(arrowPress=='right'){
        clickedd = Math.floor(clickedd)
    }
    else if(arrowPress=='left'){
        clickedd = Math.ceil(clickedd)
    }
    clikeddDot(btnsPagination[clickedd])
   
    // I use depositButton to save the location that remains when I press one of the arrow buttons, and then when I scroll through the tough the app continues at the same point where I left the arrow
    depositButton = move;
    // depositTouch is the same as depositButton but the other way around, that is, it remembers the location it leaves when scrolling with the touch, to use it when pressing the arrows
    depositTouch=0;

    console.log(move)
    document.querySelector('.boxMain').style.left=completMove;
    // oldDistance= locationGlobal
}

// Code to work with pagination
let btnsPagination = document.querySelectorAll('.btnPagination');
btnsPagination.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        btnsPagination.forEach((item)=>{
            item.classList.remove('activep')
            item.style.background = 'rgba(0,0,0, 0.5)'
            item.style.border = 'none'           
        })
        move = index*(-100);
        stringMove = move.toString();
        completMove = stringMove+stringPorcg
        
        document.querySelector('.boxMain').style.left=completMove;
        locationGlobal=index;
        
        item.classList.add('activep')
        item.style.background = 'rgba(0,0,0, 1)'
        item.style.border = '1px solid #fff'
        paginationClick=true;
    })
})
// Function that selects the corresponding pagination button
function clikeddDot(item){
    item.click()
}
clikeddDot(btnsPagination[0])

// Code scroll with touch
let distance=0;
let oldDistance=0;
let boxItem = document.querySelectorAll('.boxItem')
boxItem.keys()
boxItem.forEach((item, index)=>{
    item.addEventListener('touchstart', e=>{
        document.querySelector('.boxMain').classList.remove('efectMoveEase');
        let startX=e.touches[0].clientX
        startX=(Math.round(((startX-document.querySelector('.boxMain').parentNode.getBoundingClientRect().left)/item.clientWidth)*100))
        startX=(100-startX)
 
    item.addEventListener('touchmove', e=>{
        moving = true;
      run = true;
        let movingX= e.touches[0].clientX
        movingX=(Math.round(((movingX-document.querySelector('.boxMain').parentNode.getBoundingClientRect().left)/item.clientWidth)*100))
        movingX=(100-movingX)


        // Moving
        if(arrowClick==false && touchUp==false){
            distance=(startX-movingX)+oldDistance
            console.log('1', distance)
        }
        
        // Moving>moving
        else if(arrowClick==false&&touchUp==true){
            distance  =(startX-movingX)+((locationGlobal*100)*(-1))
            // 
            console.log(distance)
            console.log('2', distance)
            
        }
        
        // Moving>click>moving
        else if(arrowClick==true){
            distance=(startX-movingX)+depositButton
            console.log('3', distance)
        }       
        else if(paginationClick==true){
            distance=(startX-movingX)+(locationGlobal*100)
            console.log('3', distance)
        }       
      
        if(distance!=0&&distance!=-0){

            scrolled(distance)
        }
        
    })
    
    item.addEventListener('touchend', e=>{
        document.querySelector('.boxMain').classList.add('efectMoveEase');
        arrowClick=false
        touchUp=true
        oldDistance=distance
        depositTouch=distance
        // move=depositTouch
        depositTouch=0
        depositButton=0
        if(distance!=0&&distance!=-0){

            ajustScroll(distance)
        }
    })
})
    
function scrolled(distance){
        stringMove= distance.toString()
        completMove=stringMove+stringPorcg
        document.querySelector('.boxMain').style.left=completMove;
    }
})

function ajustScroll(){
    distance=(distance*(-1)/100)
    distance=Math.round(distance)
    locationGlobal= distance-1
    clikeddDot(btnsPagination[locationGlobal+1])
    console.log(distance)
    distance= distance*100
    distance= distance*(-1)
    stringMove= distance.toString()
    completMove=stringMove+stringPorcg
    document.querySelector('.boxMain').style.left=completMove;
    console.log(distance)
    oldDistance=distance
    depositTouch=distance
}

// Code for Form----------------------------------------------------------------------------------------------------
// Code for Form----------------------------------------------------------------------------------------------------
// Code for Form----------------------------------------------------------------------------------------------------
let form = document.getElementById('form');
let inputs = document.querySelectorAll('.boxInput input');
let inputTermsConditions = document.getElementById('inputTermsConditions');

const expresions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const fields = {
	name: false,
	email: false,
}

const validateForm=(e)=>{
    switch(e.target.name){
        case 'name':
            validateFied(expresions.name,e.target,e.target.name)
            break;
            case 'email':
                validateFied(expresions.email,e.target,e.target.name)
        break;
    }

}

const validateFied = (expresion,input, campo)=>{
    // console.log('entro')
    if(expresion.test(input.value)){
        document.getElementById(`${campo}FormInput`).classList.remove('inputIncorrect')
        document.getElementById(`${campo}IconIncorrect`).classList.remove('iconActive')
        document.getElementById(`${campo}IconSuccess`).classList.add('iconActive')
        document.getElementById(`${campo}MessageError`).classList.remove('errorMessageInputActive')
        document.getElementById(`${campo}Title`).classList.remove('titleError')
        fields[campo]=true
    }else{
        document.getElementById(`${campo}FormInput`).classList.add('inputIncorrect')
        document.getElementById(`${campo}IconSuccess`).classList.remove('iconActive')
        document.getElementById(`${campo}IconIncorrect`).classList.add('iconActive')
        document.getElementById(`${campo}MessageError`).classList.add('errorMessageInputActive')
        document.getElementById(`${campo}Title`).classList.add('titleError')
        fields[campo]=false
        
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validateForm)
    input.addEventListener('blur',validateForm)
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(fields.name)
    console.log(fields.email)
   if(fields.name==true&&fields.email==true&& inputTermsConditions.checked ){
    console.log('todo okay')
    document.getElementById('boxErrorMessage').style.display = 'none';
    document.getElementById('boxMessage').style.display = 'block'
    setTimeout(()=>{
        document.getElementById('boxMessage').style.display = 'none'

    }, 5000)

    document.getElementById('messageAceptTerms').style.display = 'none';
    form.reset()
   }else{
    document.getElementById('boxErrorMessage').style.display = 'block';
    
    if(!inputTermsConditions.checked){
        document.getElementById('messageAceptTerms').style.display = 'block';
    }
    if(inputTermsConditions.checked){
        document.getElementById('messageAceptTerms').style.display = 'none';
    }
}

})

document.getElementById('inputTermsConditions').addEventListener('click', ()=>{
    if(inputTermsConditions.checked)
    document.getElementById('messageAceptTerms').style.display = 'none';

})


