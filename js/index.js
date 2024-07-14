const img = document.getElementById('person');

window.onmousemove = (e) => {
    let x = (e.clientX - window.innerWidth) * -.01;
    let y = (e.clientY - window.innerHeight) * -.01;
    img.style = `--x: ${x}deg; --y: ${y}deg;`
}

const audio = document.querySelector('audio');
window.addEventListener('click', ()=> {
    const volume = 0.08;
    audio.volume = volume;
    audio.play();
})
