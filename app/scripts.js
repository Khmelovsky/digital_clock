const clockWrap = document.querySelector('.clock');

const timer = () => {

    const now = new Date();
    
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
   
    //console.log(h +':' + m +':' + s)
    const html = `
        <span>${h} :</span>
        <span>${m} :</span>
        <span>${s}</span>
        `;

        clockWrap.innerHTML = html;
};



setInterval(timer,1000);


