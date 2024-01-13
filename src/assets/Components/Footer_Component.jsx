import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Logo_Component } from "./Logo_Component"
const Footer_Component = () => {
    return <><br /><br />
    <div className="footer-main" style={{background: '#f0f0f0'}}>
        <br /><br /><br />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 pt-2">
                    <Logo_Component/> <br /><br />
                    <p>Follow Us:</p>
                    <i class="bi bi-facebook"></i>&nbsp;&nbsp;&nbsp;
                    <i class="bi bi-twitter"></i>&nbsp;&nbsp;&nbsp;
                    <i class="bi bi-pinterest "></i>&nbsp;&nbsp;&nbsp;
                    <i class="bi bi-vimeo"></i>&nbsp;&nbsp;&nbsp;
            </div>
            <div className="col-md-3 pt-2" style={{listStyle: 'none'}}>
            <h5>USEFULL LINKS</h5><br />
             <li>Shopping Cat</li>&nbsp;
             <li>Wishlist</li>&nbsp;
             <li>Chekout</li>&nbsp;
             <li>Support</li>&nbsp;
            </div>
            <div className="col-md-3 pt-2" style={{listStyle: 'none'}}>
            <h5>ABOUT US</h5><br />
             <li>About</li>&nbsp;
             <li>Terms and conditions</li>&nbsp;
             <li>Products</li>&nbsp;
             <li>Help Center</li>&nbsp;
            </div>
            <div className="col-md-3 pt-2">
            <h5>NEWLETTER</h5><br />
            <p>Subscribe to get all new updates</p>&nbsp;
            <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Enter Your Email"
        style={{
          padding: '8px',
          border: 'none',
          borderBottom: '1px solid #000',
          borderRadius: '0',
          marginRight: '5px',
          background: '#f0f0f0'
        }}
      />
      <button style={{
          all: 'unset',
          backgroundColor: '#f0f0f0',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '50%',
          padding: '5px',
          cursor: 'pointer',
        }}>
        <BiSearch size={20} />
      </button>
    </div>
    <br /><br /><br />
    <br /><br /><br />
            </div>
            </div>
            </div>
            <div class='pt-3' style={{backgroundColor : '#d7d8d8',
        padding: '10px'}}>
      <p align='center'>Copyright © Daxone. All Right Reserved</p>
    </div>
        </div>
    </>
}
export {Footer_Component};