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
                
                document.querySelector("#outputNameEvent").innerHTML = inputName.value;
                document.querySelector("#outputDay").innerHTML = dias;
                document.querySelector("#outputHour").innerHTML = horas;
                document.querySelector("#outputMinute").innerHTML = minutos;
                document.querySelector("#outputSecond").innerHTML = segundos;
    
                dataCorrente.setSeconds(dataCorrente.getSeconds() + 1);
            }else{
                TocarAlarme();
                PararContagem(timer);
                alert(`Uhuuu!!! ${inputName.value} has arrived.`)
                LimparValoresTela();
            }
        }else{
            alert("Digite uma data, hora e/ou nome válido");
            PararContagem(timer);
        }
    }

    function PararContagem(Timer){
        clearInterval(Timer);
    }

    function LimparInputEOutput(){
        inputData.value = "";
        inputHora.value = "";
        inputName.value = "";

        document.querySelector("#outputDay").innerHTML = "000";
        document.querySelector("#outputHour").innerHTML = "00";
        document.querySelector("#outputMinute").innerHTML = "00";
        document.querySelector("#outputSecond").innerHTML = "00";
    }

    function TocarAlarme(){
        let Alarme = document.querySelector("audio");
        Alarme.play();
    }

    var timer = setInterval(Contar, 1000);
}










