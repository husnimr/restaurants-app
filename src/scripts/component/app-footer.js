class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>
      &copy; Copyright 2024 &dash;<a href="https://github.com/husnimr">Husni Mubarok R</a>
    </p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
