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
         layout="fixed"
         formats={["auto", "webp"]}
         src="../images/donald-boulton.jpg"
         width={70}
         height={70}
         quality={95}
         alt="Profile picture"
       />
     </div>
   )
 }
 
 export default Bio
 