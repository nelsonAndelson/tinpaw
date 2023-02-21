import dogs from "./data";

class Dog {
  constructor(dogData) {
    Object.assign(this, dogData);
  }

  getDogHtml() {
    return `
        <img src="${this.avatar}" alt="dog-bella" />
        <div class="card-body-footer">
          <h3>${this.name}, ${this.age}</h3>
          <p>${this.bio}</p>
        </div>
        `;
    // <img src="images/badge-like.png" alt="" srcset="" class="prompt" />
  }
}

export default Dog;
