import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import "./CartIcon.css";

function CartIcon(Props){
    return <div id="cart-icon">
        <Link to="/card">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">{Props.totalQuantity}</span>
        </Link>
    </div>
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.card.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);