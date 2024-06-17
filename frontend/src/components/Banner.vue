<script setup>
defineProps({
  msg: {
    type: String,
    //required: true
  }
})
</script>

<template>
  <!-- banner start -->
  <div class="banner-section mt-100 overflow-hidden">
                <div class="banner-section-inner">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1200">
                                <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                                    <img class="banner-img" src="/src/assets/img/banner/bag-1.jpg" alt="banner-1">
                                    <div class="content-absolute content-slide">
                                        <div class="container height-inherit d-flex align-items-center">
                                            <div class="content-box banner-content p-4">
                                                <p class="heading_18 mb-3">Mini Backpack</p>
                                                <h2 class="heading_34">25% off on <br>all bags</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1200">
                                <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                                    <img class="banner-img" src="/src/assets/img/banner/bag-2.jpg" alt="banner-2">
                                    <div class="content-absolute content-slide">
                                        <div class="container height-inherit d-flex align-items-center">
                                            <div class="content-box banner-content p-4">
                                                <p class="heading_18 mb-3">New Year Sell</p>
                                                <h2 class="heading_34">25% off <br>for women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- banner end -->	
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
