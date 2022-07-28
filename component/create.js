import React from "react";

export default function Create() {
  return (
    <>
    <div className="container">
    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#discountModal">
      Show Discount
    </button>  
  </div>
  
  <div className="modal fade" id="discountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body text-center">
          <div className="icon text-danger">
            <i className="fas fa-gift"></i>
          </div>
          <div className="notice">
            <h4>Get 50% Discount</h4>
            <p>For the next 24 hours you can get any product at half-price.</p>
            
            <p>Use promo code <span className="badge badge-info">50-OFF</span> at checkout.</p>
          </div>
          <div className="code"></div>
        </div>
        <div className="modal-footer d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Nevermind</button>
          <button type="button" className="btn btn-danger">Get Code</button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
