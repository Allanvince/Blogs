const stats = document.querySelector('.skills');
const counters = document.querySelectorAll('.counter');
let bol = false;


const sectionOffset = stats.offsetTop + stats.offsetHeight;


window.addEventListener('mouseover', () => {
    const pageOffset = window.innerHeight + pageYOffset;

    if(pageOffset > sectionOffset && bol === false){
        counters.forEach((counter) => {
            function updateCount(){
                
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                if(count < target){
                    counter.innerText = count + 1;

                    setTimeout(updateCount, speed);
                }
                else{
                    counter.innerText = target;
                }
            }
            updateCount();
            
            bol = true;
        });
    }
});