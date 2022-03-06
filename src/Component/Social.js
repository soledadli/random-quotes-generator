import React from 'react'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Social = ({quote, author}) => {
    const twitterCta = "https://twitter.com/intent/tweet?hashtags=quotes&text="+quote+" - "+author;
    const  bgColor = "49, 59, 114";
  return (
    <a href={twitterCta} className="quote-social" style={{backgroundColor: `rgb(${bgColor})` }}>
    <FontAwesomeIcon icon={faTwitter} style={{backgroundColor: bgColor}}/>
</a>

  )
}

export default Social