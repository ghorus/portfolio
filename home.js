const ideas = document.querySelectorAll("#job")

ideas.forEach(idea => {
    const split = new SplitType(idea, {
        types:"chars"
    })
})
gsap.from('.char', {
    yPercent: -100,
    stagger: 0.04
})

