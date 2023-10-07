import strawberry from "./assets/strawberrie.jpg";
import patato from "./assets/patato.jpg";
import tomato from "./assets/tomato.jpg";
import apple from "./assets/applePic.webp";
import carrot from "./assets/carrot.jpg";
import parsley from "./assets/parsley.jpg";
import mint from "./assets/mint.jpg";

export const cropsData = [
  {   id: 1,
      type: "veggie",
      img: tomato,
      alt: 'tomato',
      title: "Tomato",
      buttonTitle: "Add to garden"
  },
  {   id: 2,
      type: "fruit",
      img: apple,
      alt: "apple",
      title: "Apple",
      buttonTitle: "Add to garden"
  },
  {   id: 3,
      type: "fruit",
      img: strawberry,
      alt: "strawberry",
      title: "Strawberry",
      buttonTitle: "Add to garden"
  },
  {   id: 4,
      type: "veggie",
      img: patato,
      alt: "patato",
      title: "Patato",
      buttonTitle: "Add to garden"
  },
  {   id: 5,
      type: "herb",
      img: mint,
      alt: "mint",
      title: "Mint",
      buttonTitle: "Add to garden"
  },
  {   id: 6,
      type: "herb",
      img: parsley,
      alt: "parsley",
      title: "Parsley",
      buttonTitle: "Add to garden"
  },
  {   id: 6,
      type: "veggie",
      img: carrot,
      alt: "carrot",
      title: "Carrot",
      buttonTitle: "Add to garden"
  }
]