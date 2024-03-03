import { Divider } from "@mui/material";
import React from "react";

const SecondaryNav = () => {
  return (
    <div className="px-28 py-3 bg-white shadow-md">
      <div className="xl:flex grid grid-cols-12 text-sm  justify-between">
        {listItem?.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div>{item?.title}</div>
            {listItem?.length === i + 1 ? null : (
              <Divider orientation="vertical" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryNav;

const listItem = [
  {
    id: 1,
    title: "Groceries",
  },
  {
    id: 2,
    title: "Mobile Phones",
  },
  {
    id: 3,
    title: "Personal Care",
  },
  {
    id: 4,
    title: "Books",
  },
  {
    id: 5,
    title: "Appliances",
  },
  {
    id: 6,
    title: "Electronics",
  },
  {
    id: 7,
    title: "Furniture",
  },
  {
    id: 8,
    title: "Home",
  },
  {
    id: 9,
    title: "Beauty & Wellness",
  },
  {
    id: 10,
    title: "Baby Care & Toys",
  },
  {
    id: 11,
    title: "Pet Supplies",
  },
  {
    id: 12,
    title: "Sports",
  },
  {
    id: 13,
    title: "Deals & Offers",
  },
];
