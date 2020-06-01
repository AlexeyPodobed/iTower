import Swiper from "swiper/js/swiper.esm.bundle";

const sliderPage = document.querySelector('.slider__section');
if (sliderPage){
  const SliderInstancePage = new Swiper(sliderPage , {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumnFill: 'row',
    simulateTouch: true,
    shortSwipes: true,
    followFinger: true,
    speed: 900,
    autoplay: {
        delay: 3000,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
  window.sliderPage = SliderInstancePage;
}

const sliderItems = document.querySelector('.newItems__content');
if (sliderItems){
  const SliderInstanceItems = new Swiper(sliderItems , {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 70,
    freeMode: true,
    speed: 900,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 100,
      },
      800: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 70,
      },
      1600: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 70,
      },
      1800: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1900: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
    }
  });
  window.sliderItems = SliderInstanceItems;
}
const sliderSales = document.querySelector('.saleItems__content');
if (sliderSales){
  const SliderInstanceSales = new Swiper(sliderSales , {
    slidesPerView: 4,
    spaceBetween: 70,
    freeMode: true,
    speed: 900,

    navigation: {
      nextEl: '.slaes__arrow-next',
      prevEl: '.slaes__arrow-prev',
    },

   breakpoints: {
  320: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 100,
  },
  800: {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
  },
  1250: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
  },
  1500: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 70,
  },
  1600: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 70,
  },
  1800: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
  },
  1900: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 50,
  },
}
  });
  window.sliderSales = SliderInstanceSales;
}

const sliderBrands = document.querySelector('.brands__logo');
if (sliderBrands){
  const SliderInstanceBrands = new Swiper(sliderBrands , {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 10,
    freeMode: true,
    speed: 900,

    navigation: {
      nextEl:  '.brands__arrow-left',
      prevEl:  '.brands__arrow-right' ,
    },


    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
       
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 1,
       
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 1,
    
      },
    1100: {
      slidesPerView: 4,
      slidesPerGroup: 1,

    },
    1200: {
      slidesPerView: 6,
      slidesPerGroup: 1,
  
    },
  }
  });
  window.sliderBrands = SliderInstanceBrands;
}


const sliderReview = document.querySelector('.reviews__content');
if (sliderReview){
  const SliderInstanceReview = new Swiper(sliderReview , {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 900,
    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: '.review__arrow-right',
      prevEl: '.review__arrow-left' ,
    },
  });
  window.sliderReview = SliderInstanceReview;
}