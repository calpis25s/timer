const min=document.getElementById('minute');
const sec=document.getElementById('second');
const btn=document.getElementById('start');
const input=document.getElementById('input');
const text=document.getElementById('timer');
const sound = new Audio('決定ボタンを押す4.mp3');

text.style.display='none';
input.style.display='block';

btn.addEventListener('click',()=>{
    if(min.value=='')min.value=0;
    if(sec.value=='')sec.value=0;
    text.style.display='block';
    input.style.display='none';
    let timer = parseInt(min.value*60)+parseInt(sec.value);
    var minu = Math.floor(timer / 60);
    var seco = timer % 60;
    text.innerText = String(minu).padStart(2, '0')+":"+String(seco).padStart(2, '0');
    const timerid=setInterval(time,1000);
    function time(){
        if (timer > 1) {
            timer--;
            const minu = Math.floor(timer / 60);
            const seco = timer % 60;
            text.innerText = String(minu).padStart(2, '0')+":"+String(seco).padStart(2, '0');
        } else {
            sound.play();
            clearInterval(timerid);
            text.style.display = 'none';
            input.style.display = 'block';
        }
}
});
