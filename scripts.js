let days = document.getElementById('timer-days'),
    hours = document.getElementById('timer-hour'),
    minutes = document.getElementById('timer-minute'),
    counter = 1,
    counterMinutos = 1,
//EN ESTA VARIABLE PONGO EL TIEMPO DEL TEMPORIZADOR
    fechaUno = new Date('2021/03/15 16:30:00'),
    fechaDos = new Date(),
    showDays = Math.floor(((fechaUno.getTime() - fechaDos.getTime())/3600000)/24)-1,
    showHours = Math.floor((fechaUno.getTime() - fechaDos.getTime())/3600000),
    showMinutes = Math.floor((((fechaUno.getTime() - fechaDos.getTime())/3600000) - showHours)*60);

//CORRIJO VALOR DE LOS DIAS Y HORAS
  if(showDays<0){
    showDays = 0;
  }else{
    showDays = showDays;
  }
  if(showHours>=24){
    showHours = 23
  }else{
    showHours = showHours;
  }
  console.log(showDays)
  console.log(showHours)
  console.log(showMinutes)

//LE AGREGO UN 0 A LOS MENOSRES DE 10
if(showDays<10){
  days.innerText = `0${showDays}`
}else{
  days.innerText = showDays
}

if(showHours<10){
  hours.innerText = `0${showHours}`
}else{
  hours.innerText = showHours
}

if(showMinutes<10){
  minutes.innerText = `0${showMinutes}`
}else{
  minutes.innerText = showMinutes
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
