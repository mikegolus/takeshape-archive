import React from "react"
import { Link } from "gatsby"
import { navigate } from 'gatsby-link'
import Parallax from "parallax-js"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render(){
    return (
      <Layout>
        <SEO title="Contact" image="/img/facebook-share.png" imageWidth="1200" imageHeight="630" />
        <div className="contact-form">
          <form
            className="centered-content"
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <Link to="/" className="image">
              <img src="/img/ts-logo-small.png" />
            </Link>
            <p>Are you interested in working with us? Do you just want to say hey? Send us a message.</p>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={'name'}>
                Your name
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'name'}
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'email'}>
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'email'}
                  name={'email'}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'message'}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={'message'}
                  onChange={this.handleChange}
                  id={'message'}
                  required={true}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="field send">
              <button className="button is-link" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}