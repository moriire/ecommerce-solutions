<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/pagination';
//import './style.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const modules = [Autoplay,
  //Pagination, 
  Navigation];
</script>
<template>
  <!-- testimonial start -->
  <div class="testimonial-section mt-100 overflow-hidden home-section">
    <div class="testimonial-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-12 col-12" data-aos="fade-right" data-aos-duration="700">
            <div class="section-header">
              <h2 class="section-heading primary-color">What customer say</h2>
              <p class="section-subheading">
                The services provided by the officials was smooth and satisfactory. Products and
                goods delivered were up to satisfaction.
              </p>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1 col-md-12 col-12" data-aos="fade-left" data-aos-duration="700">
            <div class="testimonial-container position-relative">
              <div class="testimonial-slideshow common-slider">
                <swiper :spaceBetween="40" :centeredSlides="true" :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }" :navigation="true" :modules="modules" class=".mySwiper ">
                  <swiper-slide class="testimonial-item" v-for="test in 6" v-bind:key="test">
                    <div class="testimonial-icon-wrap d-flex align-items-center">
                      <div class="testimonial-icon-quote">
                        <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                            fill="#00234D" />
                        </svg>
                      </div>
                      <div class="testimonial-icon-star d-flex align-items-center ms-3">
                        <img src="/src/assets/img/icon/star.png" alt="img">
                        <img src="/src/assets/img/icon/star.png" alt="img">
                        <img src="/src/assets/img/icon/star.png" alt="img">
                        <img src="/src/assets/img/icon/star.png" alt="img">
                        <img src="/src/assets/img/icon/star.png" alt="img">
                      </div>
                    </div>
                    <p class="testimonial-review my-4 text_16">{{ test }}
                      “ I am purchasing furniture from Bisum since the last 6 years. I love
                      their
                      prompt service and so far I have faced no complaints with their
                      furniture.”
                    </p>
                    <div class="testimonial-reviewer d-flex align-items-center">
                      <div class="reviewer-img">
                        <img src="/src/assets/img/testimonial/john.jpg" alt="img">
                      </div>
                      <div class="reviewer-info ms-4">
                        <h4 class="reviewer-name heading_18 mb-2 primary-color">Floyd Miles
                        </h4>
                        <p class="reviewer-desig text_14 m-0">Executive, Hypebeast</p>
                      </div>
                    </div>
                  </swiper-slide>

                </swiper>
              </div>
            </div>
            <!--div class="testimonial-container position-relative">
              <div class="testimonial-slideshow common-slider" sdat-slick='{
                                            "slidesToShow": 1, 
                                            "slidesToScroll": 1,
                                            "dots": false,
                                            "arrows": true
                                        }'>
                <div class="testimonial-item">
                  <div class="testimonial-icon-wrap d-flex align-items-center">
                    <div class="testimonial-icon-quote">
                      <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                          fill="#00234D" />
                      </svg>
                    </div>
                    <div class="testimonial-icon-star d-flex align-items-center ms-3">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                    </div>
                  </div>
                  <p class="testimonial-review my-4 text_16">
                    “ I am purchasing furniture from Bisum since the last 6 years. I love
                    their
                    prompt service and so far I have faced no complaints with their
                    furniture.”
                  </p>
                  <div class="testimonial-reviewer d-flex align-items-center">
                    <div class="reviewer-img">
                      <img src="/src/assets/img/testimonial/john.jpg" alt="img">
                    </div>
                    <div class="reviewer-info ms-4">
                      <h4 class="reviewer-name heading_18 mb-2 primary-color">Floyd Miles
                      </h4>
                      <p class="reviewer-desig text_14 m-0">Executive, Hypebeast</p>
                    </div>
                  </div>
                </div>
                <div class="testimonial-item">
                  <div class="testimonial-icon-wrap d-flex align-items-center">
                    <div class="testimonial-icon-quote">
                      <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                          fill="#00234D" />
                      </svg>
                    </div>
                    <div class="testimonial-icon-star d-flex align-items-center ms-3">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                    </div>
                  </div>
                  <p class="testimonial-review my-4 text_16">
                    “ I am purchasing furniture from Bisum since the last 6 years. I love
                    their
                    prompt service and so far I have faced no complaints with their
                    furniture.”
                  </p>
                  <div class="testimonial-reviewer d-flex align-items-center">
                    <div class="reviewer-img">
                      <img src="/src/assets/img/testimonial/john.jpg" alt="img">
                    </div>
                    <div class="reviewer-info ms-4">
                      <h4 class="reviewer-name heading_18 mb-2 primary-color">Floyd Miles
                      </h4>
                      <p class="reviewer-desig text_14 m-0">Executive, Hypebeast</p>
                    </div>
                  </div>
                </div>
                <div class="testimonial-item">
                  <div class="testimonial-icon-wrap d-flex align-items-center">
                    <div class="testimonial-icon-quote">
                      <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 28.99L11.7 0H19.5L12.22 28.99H0ZM20.28 28.99L32.11 0H39.91L32.5 28.99H20.28Z"
                          fill="#00234D" />
                      </svg>
                    </div>
                    <div class="testimonial-icon-star d-flex align-items-center ms-3">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                      <img src="/src/assets/img/icon/star.png" alt="img">
                    </div>
                  </div>
                  <p class="testimonial-review my-4 text_16">
                    “ I am purchasing furniture from Bisum since the last 6 years. I love
                    their
                    prompt service and so far I have faced no complaints with their
                    furniture.”
                  </p>
                  <div class="testimonial-reviewer d-flex align-items-center">
                    <div class="reviewer-img">
                      <img src="/src/assets/img/testimonial/john.jpg" alt="img">
                    </div>
                    <div class="reviewer-info ms-4">
                      <h4 class="reviewer-name heading_18 mb-2 primary-color">Floyd Miles
                      </h4>
                      <p class="reviewer-desig text_14 m-0">Executive, Hypebeast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- testimonial end -->






</template>
<style>
.swiper,
.swiper-slide,
.row {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>