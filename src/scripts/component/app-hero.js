class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
          <img src="./images/heros/hero-image_4.jpg"
            alt="Gambar macam-macam makanan yang diterapkan di komponen hero">
      <div class="inner">
          <h1 class="title">Indonesian Resto</h1>
          <p class="subtitle">
              Visit some of the restaurants in Indonesia
          </p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
