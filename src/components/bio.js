/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Bio = () => {

   return (
     <div className="bio">
       <StaticImage
         className="bio-avatar"
         objectPosition="50% 50%"
         formats={["auto", "webp"]}
         src="../../static/assets/donald-boulton.jpg"
         quality={95}
         alt="Profile Picture"         
       />
     </div>
   )
 }
 
 export default Bio
 