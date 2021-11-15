days_elem = document.getElementById('days');
hours_elem = document.getElementById('hours');
minutes_elem = document.getElementById('minutes');
seconds_elem = document.getElementById('seconds');

const dest_date = "17 Feb 2022";
function countdown(){
    const final_date = new Date(dest_date);
    const current_date = new Date();
    const total_seconds = (final_date - current_date) / 1000;
    const days = Math.floor(total_seconds/3600/24);
    const hours = Math.floor(total_seconds/3600) % 24;
    const minutes = Math.floor(total_seconds/60) % 60;
    const seconds = Math.floor(total_seconds) % 60;

    days_elem.innerHTML = formatTime(days);
    hours_elem.innerHTML = formatTime(hours);
    minutes_elem.innerHTML = formatTime(minutes);
    seconds_elem.innerHTML = formatTime(seconds);    
}

function formatTime(time){
    if(time < 10){
        return `0${time}` 
    }else{
        return time;
    }
}
function year_increment(time){
    if(days==0){
        return 
    }
}
countdown();
setInterval(countdown,1000);
