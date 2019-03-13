import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div className="contact-form">
      <div className="centered-content">
        <p>Thanks! You'll hear from us soon.</p>
        <div class="text">
          <Link to="/">Return</Link>
        </div>
      </div>
    </div>
  </Layout>
)