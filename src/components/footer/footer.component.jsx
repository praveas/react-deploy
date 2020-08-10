import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <footer class="new_footer_area bg_color">
      <div class="new_footer_top">
        <div class="container"></div>
        <div class="footer_bg">
          <div class="footer_bg_one"></div>
          <div class="footer_bg_two"></div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-7">
              <center>
                <p class="py-2 text-center footer-style">
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <a href="#home">Prabesh Pokharel</a>
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPanel;
