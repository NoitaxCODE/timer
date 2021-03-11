let days = document.getElementById('timer-days'),
    hours = document.getElementById('timer-hour'),
    minutes = document.getElementById('timer-minute'),
    counter = 1,
    counterMinutos = 1,
//EN ESTA VARIABLE PONGO EL TIEMPO DEL TEMPORIZADOR
    fechaUno = new Date('2021/03/14 06:30:00'),
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
  console.log("entro en dias")
}else{
  days.innerText = showDays
}

if(showHours<10){
  hours.innerText = `0${showHours}`
  console.log("entro en horas")
}else{
  hours.innerText = showHours
}

if(showMinutes<10){
  minutes.innerText = `0${showMinutes}`
  console.log("entro en minutos")
}else{
  minutes.innerText = showMinutes
}

let currentDays = Number(days.innerText),
    currentHours = Number(hours.innerText),
    currentMinutes = Number(minutes.innerText);

console.log(currentDays)
console.log(currentHours)
console.log(currentMinutes)

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
    }, 50)
}

// const restSecond = setInterval(()=>{
//   if(currentMinutes === 0){
//     if(currentHours === 0){
//       if(currentDays > 0){
//         currentDays -= 1
//         if(currentDays<10){
//           days.innerText = `0${currentDays}`
//           hours.innerText = 23
//           minutes.innerText = 59
//           currentHours = 23
//           currentMinutes = 59
//         }else{
//           days.innerText = currentDays
//           hours.innerText = 23
//           minutes.innerText = 59
//           currentHours = 23
//           currentMinutes = 59
//         }
//       }else{
//         clearInterval(restSecond)
//         minutes.innerText = '00'
//       }
//     }else{
//       currentHours -=1
//       if(currentHours<10){
//         hours.innerText = `0${currentHours}`
//         minutes.innerText = 59
//         currentMinutes = 59
//       }else{
//         hours.innerText = currentHours
//         minutes.innerText = 59
//         currentMinutes = 59
//       }
//     }
//   }else{
//     currentMinutes -= 1
//     if(currentMinutes<10){
//       minutes.innerText = `0${currentMinutes}`
//     }else{
//       minutes.innerText = currentMinutes
//     }
//   }
// }, 50)

// const restSecond = setInterval(()=>{
//   if(fechaUno<fechaDos){
//     hour.innerText = 00;
//     minute.innerText = 00;
//     second.innerText = 00;
//     clearInterval(restSecond)
//   }
//   else if(Number(minute.innerText)===0 && Number(second.innerText)===0 && Number(hour.innerText)>0){
//     counter -= 1
//     counterMinutos -= 1
//     console.log("entro en el primer if")
//     minute.innerText = 59;
//     second.innerText = 59;
//   }
//   else if(counter<1){
//     if(Number(hour.innerText)<=10){
//       hour.innerText = `0${Number(hour.innerText) - 1}`
//       counter = 1
//       second.innerText = 58;
//     }else{
//       hour.innerText = Number(hour.innerText) - 1
//       counter = 1
//       second.innerText = 58;
//     }
//   }
//   else if(counterMinutos < 1){
//     second.innerText = 57
//     counterMinutos = 1
//   }
//   else if(Number(second.innerText) === 0 && Number(minute.innerText)>0){
//     second.innerText = 59;
//     if(Number(minute.innerText)<=10){
//       minute.innerText = `0${Number(minute.innerText)-1}`
//     }else{
//       minute.innerText = Number(minute.innerText)-1
//     }
//   }
//   else if(Number(second.innerText) === 0 && Number(minute.innerText)===0 && Number(hour.innerText)===0){
//     clearInterval(restSecond)
//     console.log("entro en el quinto if (clear)")
//   }else{
//     if (Number(second.innerText)<=10){
//       second.innerText = `0${Number(second.innerText) - 1}`
//     }else{
//       second.innerText = Number(second.innerText) - 1
//     }
//   }
// }, 1000)

// console.log(fechaUno)
// console.log(fechaDos)
