
const menu = document.querySelector('.menu-btn')

function navToggle(e){   
    if (!e.target.classlist.contains('active')){
        e.target.classlist.add('active')
      gsap.to('.line1',0.5,{rotate:"45",y:4,background:"black"})
      gsap.to('.line2',0.5,{rotate:"-45",y:-4,background:"black"})
      gsap.to('#logo',{color:"black"});
      gsap.to('.navbar-animation',{clipPath:"circle(2500px at 100%)"})
    }
    else{ 
        e.target.classlist.remove('active')
      gsap.to('.line1',0.5,{rotate:"0",y:0,background:"white"})
      gsap.to('.line2',0.5,{rotate:"-0",y:0,background:"white"})
      gsap.to('#logo',{color:"white"});
      gsap.to('.navbar-animation',{clipPath:"circle(50px at 100%)"})
    }
}
menu.addEventListener('click',navToggle)