import { Box, Container, Grid, iconButtonClasses, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { AddToCart, ClearAll, RemoveCart, } from "../../Redux/Actions/CartAction";
import "../shop/Shop.scss";

import Swal from "sweetalert2";
const Shop = () => {
  const { userInfo } = useSelector(st => st.loginUser);
  const { cartitems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handlerAddToCart = (id, symbol) => {
    const findItem =
      cartitems.length > 0 ? cartitems.find((ct) => ct.id === id) : null;
    const quantity = findItem ? findItem.quantity + symbol : 1;
    console.log(quantity);
    if (quantity === 0) {
      dispatch(RemoveCart(id));
    } else {
      {
        dispatch(AddToCart(id, quantity));
      }
    }
  };


  const generatePDF = () => {


    let name = document.querySelectorAll("#nm")
    for (let g = 0; g < name.length; g++) {
      let qty = document.querySelectorAll("#quant")
      let count = qty[g].value;
      for (let i = 0; i < count; i++) {

        var doc = new jsPDF("p", "pt");

        doc.text(20, 20, `This is the ${name[g].textContent}`);


        doc.text(20, 100, "This is the thrid title.");
        doc.addFont("helvetica", "normal");

        doc.save("ticket.pdf");

      }

    }

    dispatch(ClearAll());





  };
  const handleUSer = () => {
    userInfo ? generatePDF() : Swal.fire(
      'Zehmet olmasa qeydiyyatdan keciniz '
    )
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section id="pager-section">
        <div className="album-bg"></div>
        <div className="container">
          <div className="pager-content text-center">
            <h2>Cart</h2>
          </div>
        </div>
      </section>
      <section id="cart">
        <div className="container">
          {cartitems.length > 0 ? (
            <div >
              <div className="top">

                <table
                  style={{ color: "black" }}>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sub Total</th>
                    <th>Action</th>
                  </tr>
                  {cartitems?.map((cart) => (
                    <tr key={cart.id}>
                      <td>
                        <img
                          className="img-fluid"
                          src={cart.photo}
                          alt="liveShowImage"
                        />
                      </td>
                      <td id="nm">{cart.name}</td>
                      <td  style={{ border: 'none' }}>
                        <button
                          onClick={() =>
                            dispatch(handlerAddToCart(cart.id, -1))
                          }
                          className="btn btn-lg "
                        >
                          -
                        </button>
                        <input
                          style={{ width: "20px", border: "none", outline: 'none', resize: 'none', backgroundColor: 'transparent' }}

                          value={cart.quantity}
                          id="quant"
                        />
                        <button
                          onClick={() => dispatch(handlerAddToCart(cart.id, 1))}
                          className="btn btn-lg "
                        >
                          +
                        </button>
                      </td>

                      <td>
                        {cart.discount ? (
                          <>
                            <del>{cart.price}$</del>
                            <p>{cart.discount}$</p>
                          </>
                        ) : (
                          <span>{cart.price}$</span>
                        )}
                      </td>
                      <td>
                        {(
                          (cart.discount > 0 ? cart.discount : cart.price) *
                          cart.quantity
                        ).toFixed(2)}
                      </td>
                      <td>
                        <DeleteOutlineIcon
                          sx={{
                            color: "red",
                            fontSize: "2em",
                            cursor: "pointer",
                          }}
                          onClick={() => dispatch(RemoveCart(cart.id))}
                        ></DeleteOutlineIcon>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="bottom"  >
                  <div className="bottom">

                    <div className="row">
                      <div className="col-lg-7">
                        <Link to="/liveshow" style={{ textDecoration: "none", color: "white" }}>
                          <button className="shoppingButton">
                            Continue shopping
                          </button></Link>
                      </div>
                      <div className="col-lg-5">
                        <h3>
                          Total :
                        </h3>
                        <table>
                          <tr>
                            <td>
                              <div className="row justify-content-between align-items-center">
                                <div className="col-lg-8">Total price</div>
                                <div className="col-lg-4 price" >

                                  {cartitems
                                    .reduce(
                                      (total, b) =>
                                        total +
                                        (b.discount > 0 ? b.discount : b.price) * b.quantity,
                                      0
                                    )
                                    .toFixed(2)}
                                  ${" "}

                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <button onClick={handleOpen} className="btn btn-outline-success w-100 my-3 d-block">
                          Sifarisi tamamla
                        </button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sifarisi tamamlamaq isdeyirsiz?
                            </Typography>
                            <button onClick={()=>handleUSer()} className="btn btn-outline-success w-100 my-3 d-block">
                               Tamamlama 
                            </button>
                            <button onClick={()=>handleClose()} className="btn btn-outline-danger w-100 my-3 d-block">
                               Close
                            </button>
                          </Box>
                        </Modal>
                        <button
                          onClick={() => dispatch(ClearAll())}
                          className="btn btn-outline-danger"
                        >
                          Remove All
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

          ) : (
            <div className="d-grid justify-content-center align-items-center">
              <h3 className="p">Cart Is Empty
              </h3>
              <Link to="/liveshow" style={{ textDecoration: "none", color: "white" }}>
                <button className="shoppingButton">
                  Continue shopping
                </button></Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;