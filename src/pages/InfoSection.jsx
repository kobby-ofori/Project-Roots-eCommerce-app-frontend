import React from "react";
import "./InfoSection.css"; // Import your CSS file

const InfoSection = () => {
  return (
    <div className="info-section">
      <h2>Welcome to ROOTS</h2>
      <p>
        Thank you for choosing ROOTS, your one-stop destination for authentic
        Ghanaian traditional attires and fabrics. Please take a moment to read
        through our terms and policies.
      </p>

      <section>
        <h3>Terms and Conditions</h3>
        <ol>
          <li>
            <strong>Location:</strong> Our office is located in Lakeside
            Community 1, Ashaley Botwe, Accra, Ghana.
          </li>
          <li>
            <strong>Payment:</strong>
            <ul>
              <li>Payment can be made on delivery.</li>
              <li>We offer Cash on Delivery (COD) services.</li>
            </ul>
          </li>
          <li>
            <strong>Delivery:</strong>
            <ul>
              <li>Delivery is available to all locations within Accra.</li>
              <li>Delivery is estimated to take 2 to 3 days after purchase.</li>
            </ul>
          </li>
          <li>
            <strong>Order Cancellation:</strong>
            <ul>
              <li>
                Orders can be canceled within 24 hours after online purchase.
              </li>
            </ul>
          </li>
          <li>
            <strong>Refund Policy:</strong>
            <ul>
              <li>Items are refundable within 3 hours after delivery.</li>
              <li>
                Refunds are only possible if the client contacts our customer
                service to report and confirm refundable terms.
              </li>
            </ul>
          </li>
          <li>
            <strong>Online Store Opening:</strong>
            <ul>
              <li>Vendors can open an online store with as little as $1.</li>
              <li>The amount is for mobile data that the vendor uses.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h3>Privacy Policy</h3>
        <ol>
          <li>
            <strong>Data Collection:</strong>
            <ul>
              <li>
                We collect minimal personal information to process orders.
              </li>
              <li>
                Your data is secured and will not be shared with third parties.
              </li>
            </ul>
          </li>
          <li>
            <strong>Security:</strong>
            <ul>
              <li>
                We implement industry-standard security measures to protect your
                information.
              </li>
            </ul>
          </li>
          <li>
            <strong>Communication:</strong>
            <ul>
              <li>
                We may contact you for order-related updates and promotions.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h3>Terms of Use</h3>
        <ol>
          <li>
            <strong>Acceptance:</strong> By using our services, you agree to
            abide by our terms and conditions.
          </li>
          <li>
            <strong>User Responsibilities:</strong>Users are responsible for the
            accuracy of the information provided.
          </li>
        </ol>
      </section>

      <section>
        <h3>Sales and Refunds</h3>
        <ol>
          <li>
            <strong>Sales:</strong> All sales are final unless canceled within
            24 hours.
          </li>
          <li>
            <strong>Refunds:</strong>Refunds are possible within 3 hours after
            delivery. Legal
          </li>
        </ol>
      </section>

      <section>
        <h3>Legal</h3>
        <ol>
          <li>
            <strong>Location:</strong> Any legal matters are subject to the
            jurisdiction of the location of our office.
          </li>
          <li>
            <strong>Dispute Resolution:</strong>Any disputes will be resolved
            through negotiation or mediation.
          </li>
        </ol>
      </section>

      <section>
        <h3>Site Map</h3>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>InfoSection</li>
          <li>Authorization</li>
          <li>Post Product</li>
          <li>Contact Us</li>
        </ul>
      </section>
    </div>
  );
};

export default InfoSection;
