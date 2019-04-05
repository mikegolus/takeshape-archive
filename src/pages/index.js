import React from "react"
import Parallax from "parallax-js"
import { graphql } from "gatsby"
import Div100vh from 'react-div-100vh'

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount () {
    var img = new Image();
    img.src = "https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2614&q=80";
    img.setAttribute("alt","Background Image");
    img.onload = () => {
      this.layer.appendChild(img);
      new Parallax(this.scene, {
        relativeInput: true,
        clipRelativeInput: true,
      });
      document.body.classList.add('page-active');
    };
  }
  render(){
    const { 
      data: { 
        markdownRemark: { 
          frontmatter: {
            heading
          } 
        }
      } 
    } = this.props;
    return (
      <Layout>
        <SEO image="/img/facebook-share.png" imageWidth="1200" imageHeight="630" />
        <style dangerouslySetInnerHTML={{__html: `
          footer { display: none }
        `}}></style>
        <Div100vh className="intro">
          <div className="background">
            <div className="scene" ref={(el) => this.scene = el}>
              <div className="layer" data-depth="0.4" ref={(el) => this.layer = el}></div>
            </div>
          </div>
          <div className="logo-overlay">
            <div className="logo-wrapper">
              <div className="logo">
                <div className="take"></div>
                <div className="shape"></div>
              </div>
            </div>
          </div>
          <h1>{heading}</h1>
        </Div100vh>
      </Layout>
    );
  }
}

export default IndexPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: {templateKey: { eq:"home-page" }}) {
      frontmatter {
        heading
      }
    }
  }
`