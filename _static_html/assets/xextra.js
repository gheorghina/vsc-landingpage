       jQuery(window).scroll(function() {    
         var scroll = jQuery(window).scrollTop();
         
         if (scroll >= 40) {
             jQuery(".top").addClass("top-scroll");
             jQuery(".tco").addClass("tco-scroll");
             jQuery(".header-logo").addClass("header-logo-scroll");
         } else {
             jQuery(".top").removeClass("top-scroll");
             jQuery(".tco").removeClass("tco-scroll");
             jQuery(".header-logo").removeClass("header-logo-scroll");
         }
         });	
       
       

jQuery('.sub-menu').hide();
    jQuery('.menu-item-has-children').hover(function() {
    jQuery(this).children('.sub-menu').stop().slideToggle(500);
});


jQuery(".ham").click(function() {
    jQuery('.mm').toggleClass('mm-ta');
    jQuery('.mm-ov').fadeToggle(200);		
});
                       
jQuery(document).ready(function() {
    jQuery('.ham').click(function() {
    jQuery('.hm').toggleClass('mm-open');
});
});
                     	
jQuery(".mm-ov").click(function() {
    jQuery('.mm').toggleClass('mm-ta');
    jQuery('.hm').toggleClass('mm-open');
    jQuery('.mm-ov').fadeToggle(200);		
});
                     	
jQuery(".ham").click(function() {
    jQuery('body').toggleClass('no-scroll');
});


         
         ScrollTrigger.batch(".stgg", {
         onEnter: elements => {
         gsap.from(elements, {
           autoAlpha: 0,
         duration: 0.7,
           y: 40,
           stagger: 0.4
         });
         },
         once: true
         });
         
         
         gsap.to(".prx", {
           yPercent: 20,
           ease: "none",
           scrollTrigger: {
             trigger: ".prx",
             start: "top top",
             end: "bottom top",
             scrub: 0
           }
         });
         
         
           
         
         
         gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
         const rule = CSSRulePlugin.getRule(".und:before");
         gsap.utils.toArray(".und").forEach(el => {
         gsap.to(el, {
         "--scaleX": 1,
         duration: 1,
         scrollTrigger: {
           trigger: el,
           start: "top center",
           markers: false
         }
         });
         });
         
         
         
         
         
         window.sections = [...document.querySelectorAll('section')];
         window.lastScrollTop = window.pageYOffset;
         
         document.body.style.background = window.sections[0].getAttribute('bg');
         
         window.addEventListener('scroll', onScroll);
         
         function onScroll() {
         const scrollTop = window.pageYOffset;
         
         const section = window.sections
         .map(section => {
           const el = section;
           const rect = el.getBoundingClientRect();
           return {el, rect};
         })
         .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
         document.body.style.background = section.el.getAttribute('bg');
         }
         
         
         const anim_in_1 = gsap.utils.toArray(".ain1");
         anim_in_1.forEach((project) => {
         gsap.fromTo(project, {
         opacity: 0,
         y: 40,
         }, {
         opacity: 1,
         y: 0,
         delay: 0.2,
         duration: 0.7,
         scrollTrigger: {
           trigger: project
         }
         });
         });
         
         const anim_in_2 = gsap.utils.toArray(".ain2");
         anim_in_2.forEach((project) => {
         gsap.fromTo(project, {
         opacity: 0,
         y: 40,
         }, {
         opacity: 1,
         y: 0,
         delay: 0.4,
         duration: 0.7,
         scrollTrigger: {
           trigger: project
         }
         });
         });
         
         
         const anim_in_3 = gsap.utils.toArray(".ain3");
         anim_in_3.forEach((project) => {
         gsap.fromTo(project, {
         opacity: 0,
         y: 40,
         }, {
         opacity: 1,
         y: 0,
         delay: 0.6,
         duration: 0.7,
         scrollTrigger: {
           trigger: project
         }
         });
         });
         
         
         const hsi = document.querySelectorAll('.hsi');
         
         hsi.forEach(function(roller) {
         gsap.to(roller, {
             scrollTrigger: {
                 trigger: roller,    
                 start: 0,
                 end: "",
                 scrub: 0.3,
             },
             xPercent: -20
         });
         });