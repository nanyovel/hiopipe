
// Buttons plus and minus qty*************************************************
let btnMinus = document.getElementById('btnMinus')
let qty = document.getElementById('qty');
let btnPlus = document.getElementById('btnPlus');
let numerador= qty.value;
numerador= parseInt(numerador)

btnMinus.addEventListener('click', ()=>{
    if(qty.value>0){
        numerador = numerador -50
    }
    qty.value = numerador
})
btnPlus.addEventListener('click', ()=>{
    numerador = numerador +50
    // console.log(numerador)
    qty.value = numerador
})


// Tabs Description and Reviews*************************************************
let anchorTabDescription = document.getElementById('anchorTabDescription')
let anchorTabReviews = document.getElementById('anchorTabReviews')
let boxDescription=document.getElementById('boxDescription');
let boxReviews =document.getElementById('boxReviews')

anchorTabDescription.addEventListener('click',()=>{
    anchorTabDescription.classList.add('active-tab')
    anchorTabReviews.classList.remove('active-tab')
    boxDescription.classList.add('boxVisible');
    boxReviews.classList.remove('boxVisible')

})


anchorTabReviews.addEventListener('click',()=>{
    anchorTabDescription.classList.remove('active-tab')
    anchorTabReviews.classList.add('active-tab')
    boxDescription.classList.remove('boxVisible');
    boxReviews.classList.add('boxVisible')
    
})

// Code for Form
let form = document.getElementById('form');
let inputs = document.querySelectorAll('.boxInput input');

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
    if(fields.name==true&&fields.email==true ){
        console.log('todo okay')
        document.getElementById('boxErrorMessage').style.display = 'none';
        document.getElementById('boxMessage').style.display = 'block'
        setTimeout(()=>{
            document.getElementById('boxMessage').style.display = 'none'
            document.getElementById('nameIconIncorrect').classList.remove('iconActive')
            document.getElementById('nameIconSuccess').classList.remove('iconActive')
            document.getElementById('emailIconIncorrect').classList.remove('iconActive')
            document.getElementById('emailIconSuccess').classList.remove('iconActive')
            
    }, 5000)

    form.reset()
   }else{
    document.getElementById('boxErrorMessage').style.display = 'block';
  s
}

})

