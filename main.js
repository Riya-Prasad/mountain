

const tl = gsap.timeline({          //timeline means a series of animation
    scrollTrigger: {
        trigger: '.background',     //when to start animation
        start: 'top top',           // first top for div(here background) top and second for when it'll touch screen top
        scrub: 1
    }
});


const ele = gsap.utils.toArray('.parallax').forEach(ele => {    //when we want same animation for too many elements
    const depth = ele.dataset.depth;                            //it'll decide how fast the ele would move
    const shifting = -(depth * (ele.offsetHeight*1.3));          //shifting calculation
    tl.to(ele, {
        y: shifting,            //shifting way
        ease: 'none'
    }, 0)
    .to('#overlay', {
        opacity: 0,
        ease: 'none'
    }, 0)
})


const t12 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top center",
        toggleAction: 'play pause resume reverse'
    }
});

t12.from('.block', {
    stagger: .3,
    opacity: 0,
    delay: .1,
    duration: 1,
    ease: "Expo.easeInOut"
})

.from('.block .img', {
    y: 100,
    stagger: .1, 
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut"
})



