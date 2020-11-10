class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */
    "Copyright © 2020 kevin Soto.";
    
  }
}
costomElements.define("mi-footer", MiFooter);
