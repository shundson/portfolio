import React from "react";
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideItem } from "./components/atoms/slideitem";

export default function SimpleSlider()  {
    let settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    let red = {
      margin: 40,
      height: 300,
      color: "#fff",
      background: "#E15B5B"
  };  

  let pap = {
      margin: 40,
      height: 300,
      color: "#fff",
      background: "#AB5BE1"
  }
  let blu = {
    margin: 40,
    height: 300,
    color: "#fff",
    background: "#5B6DE1"
}
let lblu = {
  margin: 40,
  height: 300,
  color: "#fff",
  background: "#5BCFE1"
}
let ye = {
margin: 40,
height: 300,
color: "#fff",
background: "#D8E15B"
}

let green = {
margin: 40,
height: 300,
color: "#fff",
background: "#5BE16D"
}

    if (window.matchMedia('(max-width: 768px)').matches) {
      //スマホ処理
      settings={
        dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
      };

  //      red = {
  //       margin: 0,
  //       height: 300,
  //       color: "#fff",
  //       background: "#E15B5B"
  //   };  
  
  //    pap = {
  //       margin: 0,
  //       height: 300,
  //       color: "#fff",
  //       background: "#AB5BE1"
  //   }
  //    blu = {
  //     margin: 0,
  //     height: 300,
  //     color: "#fff",
  //     background: "#5B6DE1"
  // }
  //  lblu = {
  //   margin: 0,
  //   height: 300,
  //   color: "#fff",
  //   background: "#5BCFE1"
  // }
  //  ye = {
  // margin: 0,
  // height: 300,
  // color: "#fff",
  // background: "#D8E15B"
  // }
  
  //  green = {
  // margin: 0,
  // height: 300,
  // color: "#fff",
  // background: "#5BE16D"
  // }
  } 
    

    return (
      <Slider {...settings}>
        <div>
          <SlideItem style={blu} IconName="html" name="HTML/CSS"/>
        </div>

        <div>
        <SlideItem style={lblu} IconName="react" name="React"/>
        </div>

        <div>
        <SlideItem style={pap} IconName="ruby" name="Ruby on Rails"/>
        </div>

        <div>
        <SlideItem style={ye} IconName="jquery" name="jQuery"/>
        </div>

        <div>
        <SlideItem style={red} IconName="adobexd" name="Adobe XD"/>
        </div>

        <div>
        <SlideItem style={green} IconName="photoshop" name="Adobe Photoshop"/>
        </div>

        
        

      </Slider>
    );
  }