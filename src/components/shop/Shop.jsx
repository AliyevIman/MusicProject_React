import { Container, Grid, iconButtonClasses } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import {
  AddToCart,
  ClearAll,
  RemoveCart,
} from "../../Redux/Actions/CartAction";
import "../shop/Shop.scss";
import { useEffect } from "react";
import PdfViewerComponent from "../ticketPDF/PdfViewerComponent";
import { useState } from "react";
import { EffectCoverflow } from "swiper";
import { Alarm } from "@mui/icons-material";
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
  //   constructor(props){
  //     super(props);
  //     this.state ={};
  // }
  // console.log(cartitems);

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







  };
const handleUSer=()=>{
  userInfo ? generatePDF() : Swal.fire(
    'Zehmet olmasa qeydiyyatdan keciniz '
  )
}


  return (
    <section className="shop">
      <Container>
        {cartitems.length > 0 ? (
          <Grid mt={5} container spacing={2}>
            <Grid item xs={8}>
              <table
                style={{ color: "white" }}
                className="table table-bordered text-center "
              >
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sub Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
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
                      <td className="d-flex justify-content-center">
                        <button
                          onClick={() =>
                            dispatch(handlerAddToCart(cart.id, -1))
                          }
                          className="btn btn-lg "
                        >
                          -
                        </button>
                        <input
                          style={{ width: "40%" }}
                          className="form-control"
                          type="number"
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
                            <span>{cart.discount}$</span>
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
                </tbody>
              </table>
            </Grid>
            <Grid sx={{ color: "white" }} item xs={4}>
              <div className="text-center card p-4">
                <p>
                  Total :
                  {cartitems
                    .reduce(
                      (total, b) =>
                        total +
                        (b.discount > 0 ? b.discount : b.price) * b.quantity,
                      0
                    )
                    .toFixed(2)}
                  ${" "}
                </p>
                  <button onClick={()=>handleUSer()} className="btn btn-outline-success w-100 my-3 d-block">
                    Sifarisi tamamla
                  </button>
                <button
                  onClick={() => dispatch(ClearAll())}
                  className="btn btn-outline-danger"
                >
                  Remove All
                </button>
              </div>
            </Grid>
          </Grid>
        ) : (
          <h1 className="p">Cart Is Empty</h1>
        )}
      </Container>
    </section>
  );
};

export default Shop;
