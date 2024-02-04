import newsImage1 from '../files/img/shop4_post1.jpg'
import newsImage2 from '../files/img/shop4_post2.jpg'
import newsImage3 from '../files/img/shop4_post3.jpg'
import newsImage4 from '../files/img/shop4_post4.jpg'

import companyLogo1 from '../files/img/new_brand1.png'
import companyLogo2 from '../files/img/new_brand2.png'
import companyLogo3 from '../files/img/new_brand3.png'
import companyLogo4 from '../files/img/new_brand4.png'
import companyLogo5 from '../files/img/new_brand5.png'
import companyLogo6 from '../files/img/new_brand6.png'








function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-nextarrow" onClick={onClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-prevarrow" onClick={onClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
    );
  }
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

const productImage = {
    dots: false,
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
}
const productThumbnails = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect:true,
}

const bannerAdsSet = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
const featureProductSet = {
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
const categoryProductSet = {
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
             
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const shopFeatured = {
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
}


const latestNewsArr = [
    {
        img: newsImage1,
        date: "26",
        month: "Feb",
        comment: "4",
        title: "Top New Collection",
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras non placerat mi. Etiam non tellus sem. Aenean pretium...",
    },
    {
        img: newsImage2,
        date: "25",
        month: "Feb",
        comment: "3",
        title: "Fashion Trends",
        desc: "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset...",
    },
    {
        img: newsImage3,
        date: "26",
        month: "Feb",
        comment: "7",
        title: "Right Choices",
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras non placerat mi. Etiam non tellus sem. Aenean pretium...",
    },
    {
        img: newsImage4,
        date: "24",
        month: "Feb",
        comment: "10",
        title: "Perfect Accessories",
        desc: "Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset...",
    },
];

const companyLogoArr = [companyLogo1,companyLogo2,companyLogo3,companyLogo4,companyLogo5,companyLogo6]



const sharedUtils = {

    latestNewsArr,
    settings,
    bannerAdsSet,
    featureProductSet,
    categoryProductSet,
    companyLogoArr,
    productImage,
    productThumbnails,
    shopFeatured
};

export default sharedUtils;


