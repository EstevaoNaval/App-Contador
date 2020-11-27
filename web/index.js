function AtualizarContagem(){
    var inputData = document.querySelector("#inputDate");
    var inputHora = document.querySelector("#inputHour");
    var inputName = document.querySelector("#inputName");

    function Contar(){

        if (inputData != "" && inputHora != ""){
            let dataFinal = new Date(parseInt(inputData.value.slice(0,4)),parseInt(inputData.value.slice(5,7)) - 1,parseInt(inputData.value.slice(8,10)));
            dataFinal.setHours(inputHora.value.slice(0,2));
            dataFinal.setMinutes(inputHora.value.slice(3,5));
            dataFinal.setSeconds("00");
            
    
            let dataCorrente = new Date();
    
            let variacaoData = dataFinal - dataCorrente;
    
            let dias, horas, minutos, segundos;

            if(dataCorrente < dataFinal){
                variacaoData = variacaoData/1000;
                segundos = Math.floor(variacaoData % 60);
    
                variacaoData = variacaoData/60;
                minutos = Math.floor(variacaoData % 60);
    
                variacaoData = variacaoData/60;
                horas = Math.floor(variacaoData % 24);
    
                dias = Math.floor(variacaoData/24)
    
                document.querySelector("#outputDay").innerHTML = dias;
                document.querySelector("#outputHour").innerHTML = horas;
                document.querySelector("#outputMinute").innerHTML = minutos;
                document.querySelector("#outputSecond").innerHTML = segundos;
    
                dataCorrente.setSeconds(dataCorrente.getSeconds() + 1);
            }else{
                alert("IT'S DONE!!!")
                PararContagem(timer);
            }
        }else{
            alert("Digite uma data, hora e/ou nome válido");
            PararContagem(timer);
        }
    }

    function PararContagem(Timer){
        clearInterval(Timer);
        inputData.value = "";
        inputHora.value = "";
        inputName.value = "";
    }

    var timer = setInterval(Contar, 1000);
}










