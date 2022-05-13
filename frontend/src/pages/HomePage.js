import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import { Form, FormControl, Button } from "react-bootstrap";
import Cards from "../components/Cards";
// import DataProducts from "../products";

export default function HomePage() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.getAllProductsReducer);
  const { products, error, loading } = productsState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="container">
      <div className="row mt-3">
        <Form className="d-flex">
          <select className="btn btn-secondary me-2" id="menu">
            <option value="kategori">Kategori</option>
            <option value="ikan">Ikan</option>
            <option value="salad">Salad</option>
            <option value="sup">Sup</option>
            <option value="menu-utama">Menu Utama</option>
            <option value="makanan-manis">Makanan Manis</option>
          </select>
          <FormControl type="search" placeholder="Cari menu favorit anda.." className="me-2" aria-label="Search" />
          <Button variant="primary">Cari</Button>
        </Form>
      </div>
      <div className="row">
        {loading ? (
          <h1>Loading..</h1>
        ) : error ? (
          <h1>Something went wrong!</h1>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-4" key={product._id}>
                <Cards product={product} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
