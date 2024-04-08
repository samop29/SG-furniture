var loder = document.querySelector("#loder");

window.addEventListener("load", function () {
    loder.style.display = "none";
    heroHeading ();
});

var image = document.getElementById('image');
var display1 = document.getElementById('display1');
var display2 = document.getElementById('display2');
var display3 = document.getElementById('display3');
var display4 = document.getElementById('display4');
var display5 = document.getElementById('display5');
var imgurls = ['assets/sofa\ \(1\).webp', 'assets/sofa\ \(2\).webp', 'assets/sofa\ \(3\).webp', 'assets/sofa\ \(4\).webp', 'assets/sofa\ \(5\).webp',]
display1.addEventListener('click', () => {
    image.src = imgurls[0];
})
display2.addEventListener('click', () => {
    image.src = imgurls[1];
})
display3.addEventListener('click', () => {
    image.src = imgurls[2];
})
display4.addEventListener('click', () => {
    image.src = imgurls[3];
})
display5.addEventListener('click', () => {
    image.src = imgurls[4];
})

var insideI = document.getElementById('imi');
var bubble = document.getElementById('talkbubble');
let isScaled = false;

insideI.addEventListener('click', () => {
    if (!isScaled) { //true
        bubble.style.transform = 'scale(1)';
        insideI.style.transform = 'rotate(45deg)';
        isScaled = true;
    } else {
        bubble.style.transform = 'scale(0)';
        insideI.style.transform = 'rotate(0deg)';
        isScaled = false;
    }
});
var insideI2 = document.getElementById('imi2');
var bubble2 = document.getElementById('talkbubble2');
let isScaled2 = false;

insideI2.addEventListener('click', () => {
    if (!isScaled2) { //true
        bubble2.style.transform = 'scale(1)';
        insideI2.style.transform = 'rotate(45deg)';
        isScaled2 = true;
    } else {
        bubble2.style.transform = 'scale(0)';
        insideI2.style.transform = 'rotate(0deg)';
        isScaled2 = false;
    }
});
var insideI3 = document.getElementById('imi3');
var bubble3 = document.getElementById('talkbubble3');
let isScaled3 = false;

insideI3.addEventListener('click', () => {
    if (!isScaled3) { //true
        bubble3.style.transform = 'scale(1)';
        insideI3.style.transform = 'rotate(45deg)';
        isScaled3 = true;
    } else {
        bubble3.style.transform = 'scale(0)';
        insideI3.style.transform = 'rotate(0deg)';
        isScaled3 = false;
    }
});
var tl = gsap.timeline();
function heroHeading (){
    tl.from(".hero-heading,.hero-discription",{
        opacity:0,
        delay:0.4,
        duration:0.5,
        stagger:0.5
    })
    tl.from(".hero-img img",{
        top:350,
        opacity:0,
        duration:0.3,
        // delay:1
    })
    tl.to(".hero-img img ",{
        duration:0.3,
        scale:1.1,
        yoyo: true, 
        repeat: 1, 
        onComplete: function() {
            gsap.set(".hero-img img", { scale: 1 });
    }
    })
    gsap.from(".chair-img img",{
        opacity:0,
        scale:0,
        duration:0.5,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"top 45%"
        }
    })
    gsap.from(".chair-heading,.chair-pera,#button",{
        opacity:0,
        left:340,
        duration:0.4,
        delay:0.3,
        stagger:0.4,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"top 45%"
        }
    })
    gsap.from(".imspan,.imp",{
        left:-450,
        duration:0.4,
        delay:1,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 55%"
        }
    })
    gsap.from(".page3-content-box1,.page3-content-box3,.page3-content-box2,.page3-content-box4",{
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 40%" 
        }
    
    })
    gsap.from(".page3-box1 img",{
        opacity:0,
        // scale:0,
        duration:0.5,
        delay:0.4,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 20%",
        }
    
    })
    gsap.to(".page3-box1 img ",{
        duration:0.5,
        delay:0.2,
        scale:1.2,
        yoyo: true, 
        repeat: 1, 
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 20%",
        },
        onComplete: function() {
            gsap.set(".hero-img img", { scale: 1 });
        }
    })
    gsap.from("#page4-child img",{
        opacity:0,
        scale:0,
        delay:0.7,
        stagger:0.1,
        scrollTrigger:{
            trigger:".page4",
            scroller:"body",
            start:"top 40%" 
        }
    })
    gsap.from(".page4-box2 span,.page4-box2 p",{
        right: -350,
        opacity:0,
        duration:0.7,
        delay:0.4,
        scale:0,
        scrollTrigger:{
            trigger:".page4",
            scroller:"body",
            start:"top 40%" 
        }
    })
    gsap.from(".bullets li",{
        right: -350,
        opacity:0,
        duration:0.7,
        delay:0.4,
        scale:0
    })
}






