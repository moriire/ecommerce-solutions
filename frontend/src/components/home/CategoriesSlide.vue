<template>
  <swiper :spaceBetween="10" :slidesPerView="3" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">

    <swiper-slide>
      <div class="box-part text-center">
					    
					    <i class="fa fa-google-plus fa-3x" aria-hidden="true"></i>
                    
						<div class="title">
							<h4>Google</h4>
						</div>
                        
						<div class="text">
							<span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
						</div>
                        
						<a href="#">Learn More</a>
                        
					 </div>
            <!--img class=".primary-img .display-block img img-thumbnail rounded"  src="https://lcci.pk/wp-content/uploads/2021/03/With-The-Advent-Of-Summer-Electronics-Products-Became-Expensive.jpg"-->
    </swiper-slide>

    <swiper-slide>
            <img class=".primary-img" src="https://5.imimg.com/data5/SELLER/Default/2023/1/SM/GS/DW/44069440/acce-1000x1000.png" alt="product-img">
    </swiper-slide>

    <swiper-slide>
            <img class=".primary-img" src="/src/assets/img/products/tools/3.jpg" alt="product-img">
    </swiper-slide>

    <swiper-slide>
            <img class=".primary-img" src="/src/assets/img/products/tools/4.jpg" alt="product-img">
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style>
.swiper {
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

.box-part{
    background:#FFF;
    border-radius:0;
    padding:60px 10px;
    margin:30px 0px;
}
.text{
    margin:20px 0px;
}

.fa{
     color:#4183D7;
}
</style>