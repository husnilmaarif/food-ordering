import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Cards({ product }) {
  const [varient, setVarient] = useState("Kecil");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function tambahPesanan() {
    dispatch(addToCart(product, quantity, varient));
  }

  return (
    <>
      <div className="card bg-dark text-light shadow mb-3" style={{ margin: "40px" }}>
        <img src={product.image} className="card-img-top" alt="Nasi Goreng" onClick={handleShow} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <h4 className="bg-primary text-light">Harga: Rp {product.prices[0][varient] * quantity} ribu</h4>

          <div className="d-flex mt-2 mb-2">
            <div className="w-100">
              <p>Porsi</p>
              <select
                className="w-100 text-center"
                value={varient}
                onChange={(e) => {
                  setVarient(e.target.value);
                }}
              >
                {product.varients.map((varient) => {
                  return <option value={varient}>{varient}</option>;
                })}
              </select>
            </div>

            <div className="w-100">
              <p>Jumlah</p>
              <select
                className="w-100 text-center"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </div>
          </div>

          <button className="btn-primary w-100" onClick={tambahPesanan}>
            Tambah ke pesanan
          </button>
        </div>
        <small className="bg-light text-dark">Kategori #{product.category}</small>
      </div>

      {/* lihat detail produk */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={product.image} className="img-fluid" alt="Nasi Goreng" />
          <p>{product.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
