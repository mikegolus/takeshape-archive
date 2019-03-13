import React from "react"
import { Link } from "gatsby"
import Parallax from "parallax-js"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount () {
    var img = new Image();
    img.src = "https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2614&q=80";
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
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="TAKE SHAPE" image="/src/images/facebook-share.png" imageWidth="1200" imageHeight="630" />
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
        <div className="text-wrapper">
          <div className="text">
            <p className="larger">{data.allMarkdownRemark.edges[0].node.frontmatter.heading}</p>
            <p className="smaller">
              <a href={data.allMarkdownRemark.edges[0].node.frontmatter.projectLink} target="_blank" rel="noopener noreferrer">{data.allMarkdownRemark.edges[0].node.frontmatter.projectButtonText}</a>
              <Link to="/contact">Send us a message</Link>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            heading
            projectButtonText
            projectLink
          }
        }
      }
    }
  }
`