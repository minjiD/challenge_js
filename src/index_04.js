const colck = document.querySelector("h2");

function getClock() {
    const today = new Date();
    const christmasDate = new Date("2022-12-25 00:00:00");

    let diffDate = christmasDate - today; //기간 객체
    
    //Date
    let diffDay = Math.floor((christmasDate.getTime() - today.getTime())/(1000 * 60 * 60 * 24));

    //Hour
    diffDate -= diffDay * (1000 * 60 * 60 * 24); //현재 시간을 구하기 위해 구한 일수를 밀리세컨즈로 변경해서 기간에서 뺀다.
    let diffHour = Math.floor(diffDate/(1000 * 60 * 60));
    
    //Minutes
    diffDate -= diffHour * (1000 * 60 * 60); //현재 분을 구하기 위해 구한 시간를 밀리세컨즈로 변경해서 기간에서 뺀다.
    let diffMin = Math.floor(diffDate/(1000 * 60));
    
    //Second
    diffDate -= diffMin * (1000 * 60); //현재 초를 구하기 위해 구한 분을 밀리세컨즈로 변경해서 기간에서 뺀다.
    let diffSec = Math.floor(diffDate/1000);
    diffDate -= diffSec * 1000;

    diffDay = String(diffDay).padStart(2, "0");
    diffHour = String(diffHour).padStart(2, "0");
    diffMin = String(diffMin).padStart(2, "0");
    diffSec = String(diffSec).padStart(2, "0");

    colck.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

getClock();
setInterval(getClock, 1000);