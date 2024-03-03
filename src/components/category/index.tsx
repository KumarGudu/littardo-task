import React from "react";

const index = () => {
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-12">
        {listItem?.map((item, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#EDB25A]">
              <img src={item?.image} className="h-14 w-14 object-contain" />
            </div>
            <h6 className="mb-2 text-sm font-bold ">{item?.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
const listItem = [
  {
    id: 1,
    title: "Groceries",
    image: "/shoes.png",
  },
  {
    id: 2,
    title: "Mobile Phones",
    image: "/shoes.png",
  },
  {
    id: 3,
    title: "Personal Care",
    image: "/make.png",
  },
  {
    id: 4,
    title: "Books",
    image: "/book.png",
  },
  {
    id: 5,
    title: "Appliances",
    image: "/book.png",
  },
  {
    id: 6,
    title: "Electronics",
    image: "/furn.png",
  },
  {
    id: 7,
    title: "Furniture",
    image: "/furn.png",
  },
  {
    id: 8,
    title: "Home",
    image: "/make.png",
  },
  {
    id: 9,
    title: "Beauty & Wellness",
    image: "/make.png",
  },
  {
    id: 10,
    title: "Baby Care & Toys",
    image: "/make.png",
  },
  {
    id: 11,
    title: "Pet Supplies",
    image: "/pett.png",
  },
  {
    id: 12,
    title: "Sports",
    image: "/img-1.png",
  },
];
