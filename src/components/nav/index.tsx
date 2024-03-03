import { AddShoppingCart, Search } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <div className="main-container">
      <div className=" py-3 navbar-background">
        <div className="px-10 grid grid-cols-4 h-14 w-full justify-items-center items-center">
          <div className=" col-span-1">
            <img className="h-12 w-full object-cover" src="/new-logo.png" />
          </div>
          <div className="col-span-3  flex justify-items-end w-full  ">
            <div className="w-[52rem]">
              <TextField
                fullWidth
                size="small"
                placeholder="Search for a product/item"
                className="!bg-white !rounded-lg"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 pl-4">
              <Button className="login-button" variant="contained">
                Login
              </Button>
              <Button
                variant="contained"
                className="!bg-white !text-black"
                startIcon={<AddShoppingCart />}
              >
                Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
