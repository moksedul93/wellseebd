import React from "react";
import "../Header/header.css";

export default function header() {
  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Reliable Accountant</h3>
          <strong>RA</strong>
        </div>

        <ul className="list-unstyled components">
          <li>
            <a href="departments.html">
              <i className="fa fa-th"></i>
              HOMEPAGE
            </a>
          </li>
          <li>
            <a href="classes.html">
              <i className="fa fa-th-large"></i>
              DAILY WORK
            </a>
          </li>
          <li>
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-users"></i>
              Dashboard
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">SELLS COMMISSION</a>
              </li>
              <li>
                <a href="#">GROUP BONUS</a>
              </li>
              <li>
                <a href="#">DAILY INCOME</a>
              </li>
              <li>
                <a href="#">REWARD INCOME</a>
              </li>
              <li>
                <a href="#">REWARD PENDING</a>
              </li>
              <li>
                <a href="#">Process Money</a>
              </li>
              <li>
                <a href="#">Shopping Balance</a>
              </li>
              <li>
                <a href="#">BDT balance</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#ftransferubmenu"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa fa-users"></i>
              TRANSFER
            </a>
            <ul className="collapse list-unstyled" id="ftransferubmenu">
              <li>
                <a href="#">BDT</a>
              </li>
              <li>
                <a href="#">SHOPPING</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#withdrawubmenu"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa fa-users"></i>
              WITHDRAW
            </a>
            <ul className="collapse list-unstyled" id="withdrawubmenu">
              <li>
                <a href="#">BKASH</a>
              </li>
              <li>
                <a href="#">ROCKET</a>
              </li>
              <li>
                <a href="#">NOGOD</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-phone"></i>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
