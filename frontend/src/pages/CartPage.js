import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import { Button, Modal } from "react-bootstrap";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <div className="container mb-5" bg="secondary">
        <h3 className="mt-5 text-start">Daftar Pesanan ({cartItems.length})</h3>
        <table className="table table-striped table-hover mt-3">
          <thead className="table-primary">
            <tr>
              <td>No.</td>
              <td>Gambar</td>
              <td>Nama Makanan</td>
              <td>Banyak</td>
              <td>Harga</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} width={100} />
                  </td>
                  <td>
                    {item.name} ({item.varient})
                  </td>
                  <td>
                    <button className="btn-danger" onClick={() => dispatch(addToCart(item, item.quantity - 1, item.varient))}>
                      -
                    </button>
                    <span> {item.quantity} </span>
                    <button className="btn-info" onClick={() => dispatch(addToCart(item, item.quantity + 1, item.varient))}>
                      +
                    </button>
                  </td>
                  <td>
                    {item.quantity} porsi * {item.prices[0][item.varient]}k = {item.price}k
                  </td>
                  <td>
                    <div>
                      <i className="fa-solid fa-trash" style={{ color: "red", cursor: "pointer" }} onClick={() => dispatch(deleteFromCart(item))}></i>
                    </div>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button className="btn btn-danger">SubTotal = Rp {subTotal}K</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary col-md-12" onClick={handleShow}>
          <i className="fa-solid fa-coins"></i> Bayar
        </button>
      </div>

      {/* bayar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "skyblue" }}>Gopay</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "blue" }}>
          <p className="text-light">Masukkan nomor handphone</p>
          <input type="text" placeholder="no hp" className="form-control" />
          <p className="mt-2 text-light">Masukkan pin anda</p>
          <input type="password" placeholder="******" className="form-control" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="info" className="text-light">
            Konfirmasi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartPage;
