class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    


    <section id="section-100-12607" class=" ct-section sec bg4 bg5">
         <div class="ct-section-inner-wrap">
            <div id="div_block-106-12607" class="ct-div-block c1">
               <div id="code_block-615-8" class="ct-code-block mb-mc f-col">
                  <img class="footer-logo" src="./imgs/logo.svg" alt="">
                  <style type="text/css">
                     .footer-logo {
                     width: 150px;
                     }
                  </style>
                  <style type="text/css">
                     @media only screen and (max-width: 768px) {
                     .footer-logo {
                     width: 110px;
                     }
                     }
                  </style>
               </div>
               <div id="code_block-695-8" class="ct-code-block mb-mc f-col">
                  <div class="f-menu">
                     <ul id="menu-footer-menu-1" class="menu">
                        <li id="menu-item-14200" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-14200"><a href="./" aria-current="page">About</a></li>
                        <li id="menu-item-14183" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14183"><a href="./gallery.html">Gallery</a></li>
                        <li id="menu-item-14121" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14121"><a href="./blog.html">Blog</a></li>
                        <li id="menu-item-14180" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14180"><a href="./faq.html">FAQ</a></li>
                        <li id="menu-item-14123" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14123"><a href="./contact.html">Contact</a></li>
                     </ul>
                  </div>
               </div>
               <div id="code_block-107-12607" class="ct-code-block mb-mc f-col">
                  <div class="f-menu">
                     <ul id="menu-footer-menu-2" class="menu">
                        <li id="menu-item-14201" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14201"><a href="./services.html">Services</a></li>
                        <li id="menu-item-14205" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14205"><a href="./in-person-color-analysis.html">In Person Color Analysis</a></li>
                        <li id="menu-item-14204" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14204"><a href="./virtual-color-analysis.html">Virtual Color Analysis</a></li>
                        <li id="menu-item-14202" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14202"><a href="./color-analysis-workshop.html">Color Analysis Workshops</a></li>
                        <li id="menu-item-14203" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14203"><a href="./vsc-go-live.html">VSC Go Live Notification</a></li>
                     </ul>  
                  </div>
               </div>
               <div id="div_block-86-12607" class="ct-div-block f-col">
                  <div id="code_block-83-12607" class="ct-code-block mb-x">
                     <a class="fcc-w" href="mailto:virtualstylecompanion@tuta.com" target="_blank">
                     <span class="fc-1 mr"><i class="fal fa-envelope"></i></span>
                     virtualstylecompanion@tuta.com          
                     </a>  
                  </div>
                  <div id="code_block-90-12607" class="ct-code-block fsoc_w mb-x">	
                     <a class="fsoc" href="https://www.instagram.com/virtualstylecompanion/" target="_blank">
                     <i class="fab fa-instagram"></i>		          
                     </a>  
                     <a class="fsoc" href="https://twitter.com/vscompanion" target="_blank">
                     <i class="fab fa-twitter"></i>		          
                     </a>  
                     <a class="fsoc" href="https://www.linkedin.com/company/virtual-style-companion" target="_blank">
                     <i class="fab fa-linkedin-in"></i>		          
                     </a> 
                  </div>
                  <div id="code_block-67-12607" class="ct-code-block cb">
                     <div class="l-menu">
                        <ul id="menu-legal-menu" class="menu">
                           <li id="menu-item-13883" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13883"><a href="./terms-and-conditions.html">Terms and Conditions</a></li>
                        </ul>
                     </div>
                  </div>
                  <div id="code_block-57fc5-8" class="ct-code-block fc-w op5 p-sm">	© 2024 VSC. All rights reserved.</div>
               </div>
            </div>
         </div>
      </section>       
       

 





    `;
  }
}

customElements.define('footer-component', Footer);