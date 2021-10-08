import React from "react";

function Story({ imageSource, storyTitle, moral, story }) {
  return (
    <div>

      <img style={{ width: "90%", height: '70vh' }} src={imageSource} alt="Images" />
      <h1 >  {storyTitle}</h1>      
      <div style={{ paddingLeft:'10%' ,textAlign:'justify',paddingRight:'10%'}}>
        <p style={{fontSize:'20px',}} >{story}</p>
      </div>
    </div>
  );
}
export default Story;
