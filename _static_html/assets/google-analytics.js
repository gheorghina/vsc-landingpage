class GoogleAnalytics extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJY2CGXJ0R"></script>
        <script>
            window['ga-disable-{{ site.google_analytics }}'] = window.doNotTrack === "1" || navigator.doNotTrack === "1" ||
                navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1";
            window.dataLayer = window.dataLayer || [];

            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-ZJY2CGXJ0R');
        </script>
  
      `;
    }
  }
  
  customElements.define('header-component', GoogleAnalytics);
