function updateclock(){
     const now=new Date();
     const seconds=now.getSeconds();
     const minutes=now.getMinutes();
     const hour=now.getHours();
     const secondDeg=seconds*6;
     const minuteDeg=minutes*6+seconds*0.1;
     const hourDeg=(hour%24)*30+minutes*0.5; 
     document.getElementById("second").style.transform=`translateX(-50%) rotate(${secondDeg}deg)`;
     document.getElementById("minute").style.transform=`translateX(-50%) rotate(${minuteDeg}deg)`;
     document.getElementById("hour").style.transform=`translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(updateclock,1000)
updateclock();