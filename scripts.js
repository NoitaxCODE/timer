let days = document.getElementById('timer-days'),
    hours = document.getElementById('timer-hour'),
    minutes = document.getElementById('timer-minute'),
    counter = 1,
    counterMinutos = 1,
//EN ESTA VARIABLE PONGO EL TIEMPO DEL TEMPORIZADOR
    fechaUno = new Date('2021/03/14 07:30:00'),
    fechaDos = new Date(),
    showDays = ((fechaUno.getTime() - fechaDos.getTime())/3600000)/24,
    showHours = (showDays - Math.floor(showDays))*24,
    showMinutes = (showHours - Math.floor(showHours))*60;

//LE AGREGO UN 0 A LOS MENOSRES DE 10
if(showDays<10){
  days.innerText = `0${Math.floor(showDays)}`
}else{
  days.innerText = Math.floor(showDays)
}

if(showHours<10){
  hours.innerText = `0${Math.floor(showHours)}`
}else{
  hours.innerText = Math.floor(showHours)
}

if(showMinutes<10){
  minutes.innerText = `0${Math.floor(showMinutes)}`
}else{
  minutes.innerText = Math.floor(showMinutes)
}

let currentDays = Number(days.innerText),
    currentHours = Number(hours.innerText),
    currentMinutes = Number(minutes.innerText);

//UNA FUNCION QUE SE AUTOEJECUTA CADA 1 MINUTO Y DESCUENTA EL TIEMPO
switch (fechaUno<fechaDos){
  case true:
    days.innerText = '00'
    hours.innerText = '00'
    minutes.innerText = '00'
  break;
  default:
    const restSecond = setInterval(()=>{
      if(currentMinutes === 0){
        if(currentHours === 0){
          if(currentDays > 0){
            currentDays -= 1
            if(currentDays<10){
              days.innerText = `0${currentDays}`
              hours.innerText = 23
              minutes.innerText = 59
              currentHours = 23
              currentMinutes = 59
            }else{
              days.innerText = currentDays
              hours.innerText = 23
              minutes.innerText = 59
              currentHours = 23
              currentMinutes = 59
            }
          }else{
            clearInterval(restSecond)
            minutes.innerText = '00'
          }
        }else{
          currentHours -=1
          if(currentHours<10){
            hours.innerText = `0${currentHours}`
            minutes.innerText = 59
            currentMinutes = 59
          }else{
            hours.innerText = currentHours
            minutes.innerText = 59
            currentMinutes = 59
          }
        }
      }else{
        currentMinutes -= 1
        if(currentMinutes<10){
          minutes.innerText = `0${currentMinutes}`
        }else{
          minutes.innerText = currentMinutes
        }
      }
    }, 60000)
}
