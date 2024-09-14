import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "/carousel1.jpg";
import img2 from "/carousel2.jpg";
import img3 from "/carousel3.jpg";
import img4 from "/carousel4.jpg";
import img5 from "/carousel5.jpg";
import img6 from "/carousel6.jpg";
import { GoStarFill } from "react-icons/go";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const categories = [
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: img1,
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
  {
    idCategory: "2",
    strCategory: "Chicken",
    strCategoryThumb: img2,
    strCategoryDescription:
      "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
  },
  {
    idCategory: "3",
    strCategory: "Dessert",
    strCategoryThumb: img4,
    strCategoryDescription:
      "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
  },
  {
    idCategory: "4",
    strCategory: "Lamb",
    strCategoryThumb: img3,
    strCategoryDescription:
      "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
  },
  {
    idCategory: "5",
    strCategory: "Miscellaneous",
    strCategoryThumb: img5,
    strCategoryDescription:
      "General foods that don't fit into another category",
  },
  {
    idCategory: "6",
    strCategory: "Pasta",
    strCategoryThumb: img6,
    strCategoryDescription:
      "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
  },
];
const CarouselCard = () => {
  const [api, setApi] = useState([]);
  //   useEffect(() => {
  //     fetch("categories")
  //       .then((res) => res.json())
  //       .then((data) => setApi(data.categories));
  //   }, []);
  return (
    <div className="my-20">
      <p className="md:text-5xl text-3xl font-semibold text-center mb-10 md:mb-14">
        New & Trending Menu
      </p>
      <Carousel responsive={responsive}>
        {categories.map((apidata, idx) => (
          <div className="mr-3 border border-slate-300 shadow-md rounded-md">
            <img src={apidata.strCategoryThumb} alt="" className="p" />
            <div className="p-2 leading-loose flex flex-col">
              <div className="flex gap-2 items-center font-medium text-base mt-1 ">
                <GoStarFill className="text-yellow-300" />
                <p className="text-base text-yellow-400 font-medium">4.5/5</p>
              </div>
              <p className="text-lg font-bold ">Heathy Food Name</p>
              <p className="text-lg font-bold ">$ 100</p>
              <button className="bg-green-400 text-white w-full  rounded-md py-2 ">
                Add to cart
              </button>
              <div className="text-center">
                <p className="text-red-500">
                  Protein 49g <span className="px-3 mr-2">/Carbs 23g </span> / Fat
                  23g
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
