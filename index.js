let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ``;
for(item of buttons){
    item.addEventListener('click',function(e){
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }
        else if(buttonText=='√'){
            screen.value = Math.sqrt(screenValue);
        }
        else if(buttonText=='Del'){
            screenValue = screenValue.substring(0, screenValue.length -1);
            screen.value = screenValue;
        }
        else if(buttonText=='^2'){
            screen.value = Math.pow(screenValue,2);
        }
        else if(buttonText=='log'){
            screen.value = Math.log10(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
    });
}