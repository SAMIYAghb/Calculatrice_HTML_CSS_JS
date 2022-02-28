// let display= document.getElementsByClassName("container");
let display= document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName("button"));
buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        //console.log('clicked');
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.innertext);
        switch (e.target.innerText) {
            case 'C': //quant on met c l'ecran se vide
                display.innerText ='';
                break;
            case '←':// va supprimer les numero un par un
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0,-1); 
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);//pour faire des calcules
                } catch (error) { // si tu tape par ex +=*/ error s'affiche 
                    display.innerText = 'error!';
                }
                break;
            default:
                //si on clique sur n'importe quel boutton sa valeur apparait sur l'ecran
                display.innerText += e.target.innerText;
        }
    });
});




