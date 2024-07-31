class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    

      <header id="topx" class="ct-div-block top">
         <div id="div_block-601-8" class="ct-div-block tco">
            <div id="div_block-616-8" class="ct-div-block tcr">
               <a id="link-580-8" class="ct-link lw" href="./index.html" target="_self">
                  <div id="code_block-581-8" class="ct-code-block lwc">
                     <img class="header-logo" src="./imgs/logo.svg" alt="">
                     <style type="text/css">
                        .header-logo {
                        width: 190px;
                        }
                     </style>
                     <style type="text/css">
                        @media only screen and (max-width: 768px) {
                        .header-logo {
                        width: 150px;
                        }
                        }
                     </style>
                     <style type="text/css">
                        .header-logo-scroll {
                        width: 170px;
                        }
                     </style>
                     <style type="text/css">
                        @media only screen and (max-width: 768px) {
                        .header-logo-scroll {
                        width: 110px;
                        }
                        }
                     </style>
                  </div>
               </a>
            </div>
            <div id="div_block-31-12606" class="ct-div-block tcc">
               <div id="div_block-25-12606" class="ct-div-block mm-ov"></div>
            </div>
            <div id="div_block-605-8" class="ct-div-block tcl">
               <div id="div_block-584-8" class="ct-div-block mm">
                  <div id="div_block-655-8" class="ct-div-block mm-co">
                     <div id="code_block-585-8" class="ct-code-block mmm">
                        <div class="t-menu">
                           <ul id="menu-top-menu" class="menu">
                              <li id="menu-item-14199" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-14199"><a href="/" aria-current="page">About</a></li>
                              <li id="menu-item-14119" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-14119">
                                 <a class='menu-item-has-children' href="./services.html">Services</a>
                                 <ul class="sub-menu" style="display: none;">
                                    <li id="menu-item-14209" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14209"><a href="./in-person-color-analysis.html">In Person Color Analysis</a></li>
                                    <li id="menu-item-14208" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14208"><a href="./virtual-color-analysis.html">Virtual Color Analysis</a></li>
                                    <li id="menu-item-14207" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14207"><a href="./style-coaching.html">Style Coaching</a></li>
                                    <li id="menu-item-14206" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14206"><a href="./color-analysis-workshop.html">Color Analysis Workshop</a></li>
                                 </ul>
                              </li>
                              <li id="menu-item-14184" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14184"><a href="./gallery.html">Gallery</a></li>
                              <li id="menu-item-13907" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13907"><a href="./blog.html">Blog</a></li>
                              <li id="menu-item-14179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14179"><a href="./faq.html">FAQ</a></li>
                              <li id="menu-item-14176" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14176"><a href="./contact.html">Contact</a></li>
                           </ul>
                        </div>



                     </div>
                  </div>
               </div>
               <div id="div_block-650-8" class="ct-div-block mm-i">
                  <div id="code_block-651-8" class="ct-code-block ">
                     <div class="cc-w">
                        <span class="cc-ico fc-3 mr"><i class="fal fa-envelope"></i></span>
                        virtualstylecompanion@tuta.com          
                     </div>
                  </div>
               </div>
               <a id="link-27-12606" class="ct-link hml" href="/" target="_self">
                  <div id="div_block-28-12606" class="ct-div-block hml-i">
                     <div id="text_block-30-12606" class="ct-text-block"></div>
                  </div>
               </a>
               <div id="code_block-36-12606" class="ct-code-block cta-m">
                  <div class="t-cta">
                     <ul id="menu-top-cta" class="menu">
                        <li id="menu-item-13838" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13838"><a href="./contact.html">Get in touch</a></li>
                     </ul>
                  </div>
               </div>
               <div id="code_block-587-8" class="ct-code-block hmw">
                  <div class="ham">
                     <div class="hm hm1"></div>
                     <div class="hm hm2"></div>
                     <div class="hm hm3"></div>
                  </div>


               </div>
            </div>
         </div>
      </header>
       






    `;
  }
}

customElements.define('header-component', Header);