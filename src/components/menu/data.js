import image1 from "../assets/PASTA.png";

const items = [
    { 
      id: 1, 
      text: 'See More', 
      title: "MEAT", 
      subItems: ["Ramstek", "Biftek", "Mish Pule", 'Biftek', 'Skanderbeg' , 'mish pule'], 
      image: image1, 
      link: "/meat" 
    },

    { 
      id: 2, 
      text: 'See More',
      title: "PASTA", 
      subItems: ["Ramstek", "Biftek", "Mish Pule"], 
      image: image1, 
      link: "/pasta" 
    },

    { 
      id: 3, 
      text: 'See More', 
      title: "SANDWICHES", 
      subItems: ["Ramstek", "Biftek", "Mish Pule"], 
      image: image1, 
      link: "/sandwiches" 
    }

  ];

export { items }  