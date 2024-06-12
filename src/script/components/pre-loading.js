class PreLoading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <div id="containerLoading">
                  <div class="preloader"></div>
              </div>
      `;
  }
}

customElements.define('pre-loading', PreLoading);
