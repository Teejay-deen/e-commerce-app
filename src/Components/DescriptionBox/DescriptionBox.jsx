import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="decriptionbox-navigator">
        <div className="decriptionbox-nav-box">Description</div>
        <div className="decriptionbox-nav-fade">Reviews (133)</div>
      </div>
      <div className="decriptionbox-description">
        <p>
          E-commerce works by connecting buyers and sellers using various
          electronic channels. For example, you need a channel, such as a
          website or social media, so customers can find products and services
          to purchase. Then a payment processor enables the exchange of the
          goods or services. Once the transaction succeeds, the customer
          receives a confirmation email or SMS, and a printable receipt. If the
          transaction is for goods, then the seller ships the items and sends
          the customer a tracking number via email or SMS. If the transaction is
          for a service, then the service provider can reach out to schedule and
          complete the service.
        </p>
        <p>
          An ecommerce website is your digital storefront on the internet. It
          facilitates the transaction between a buyer and seller. It is the
          virtual space where you showcase products, and online customers make
          selections. Your website acts as the product shelves, sales staff, and
          cash register of your online business channel.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
