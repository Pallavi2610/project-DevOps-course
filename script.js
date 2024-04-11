var tl=gsap.timeline();

tl.from("nav .logo,nav a, nav i",{
    opacity:0,
    y:-40,
    stagger:.3,
})
tl.from(".page1 h1,.page1 p",{
    opacity:0,
    y:10,
    stagger:.3,
    // scale:1,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        // end:"top 30%",
        scrup:1,
    }
})
tl.from(".page1 img",{
    opacity:0,
    // rotate:20,
    stagger:.3,
    // scale:1.05,
})

var tl2=gsap.timeline();
tl2.from(".about h1,.about p",{
    y:50,
    // scale:1.1,
    duration:0.8,
    stagger:.3,
    opacity:0,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        // end:"top 30%",
        scrup:true,
    }  
})
var tl4=gsap.timeline();
tl4.from(".page3 h1,.page3 img,.page3 a,.three img",{
    y:50,
    // scale:1.1,
    // duration:0.8,
    stagger:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        // end:"top 30%",
        scrup:true,
    }

})
var tl5=gsap.timeline();
tl5.from(".page4 h1,.course,.page4 h2",{
    y:50,
    // scale:1.1,
    // duration:0.8,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        // end:"top 30%",
        scrup:true,
    }
    
})