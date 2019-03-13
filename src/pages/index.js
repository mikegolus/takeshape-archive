import React from "react"
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
    console.log(data);
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
              <a href="http://www.worldofvindor.com/" target="_blank" rel="noopener noreferrer">Our most recent project</a>
              <a href="mailto:yourfriends@takeshape.rocks?subject=What's up my dudes?">Send us a message</a>
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
          }
        }
      }
    }
  }
`