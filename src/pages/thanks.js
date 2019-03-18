import React from "react"
import Layout from "../components/layout"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default () => (
  <Layout>
    <div className="contact-form">
      <div className="centered-content">
        <p>Thanks! You'll hear from us soon.</p>
        <div class="text">
          <AniLink fade duration={0.2} to="/">Return</AniLink>
        </div>
      </div>
    </div>
  </Layout>
)