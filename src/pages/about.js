import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

class AboutPage extends React.Component {
  render(){
    const { 
      data: { 
        markdownRemark: { 
          frontmatter: {
            heading,
            copy
          } 
        }
      } 
    } = this.props;
    return (
      <Layout>
        <SEO title="About" image="/img/facebook-share.png" imageWidth="1200" imageHeight="630" />
        <div className="page">
          <div className="block text-image">
            <div className="section nav-safe text">
              <div class="copy">
                <h1 className="hidden">About</h1>
                <h2>{heading}</h2>
                <p>{copy}</p>
              </div>
            </div>
            <div className="section media">
              <img src="/img/stage-wov.jpg" alt="World of Vindor Website Preview" />
            </div>
          </div>
          <div className="block">
            <div className="section">
              <blockquote>Differentiate yourself online with a website that exudes your brand's own unique personality.</blockquote>
            </div>
          </div>
          <div className="block image">
            <div className="section media">
              <img src="img/stage-mcalister.jpg" alt="Builder People Website Preview" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: {templateKey: { eq:"about-page" }}) {
      frontmatter {
        heading
        copy
      }
    }
  }
`