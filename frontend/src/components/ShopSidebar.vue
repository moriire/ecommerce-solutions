<script setup>
import { ref } from 'vue';
import { useCateoryStore } from '@/stores/categories';
import { useFilterStore } from '@/stores/filter';
import { useProductStore } from '@/stores/products';
defineProps({
  cartItems: {
    type: Array,
    //required: true
  }
});
const prod = useProductStore()
const cat = useCateoryStore()
const filter = useFilterStore()
const categoryfilter = ref("")
</script>

<template>
  <!-- sidebar start -->
  <div class="col-lg-2 col-md-12 col-12">
    <div class="collection-filter filter-drawer">
      <div class="filter-widget d-lg-none d-flex align-items-center justify-content-between">
        <h4 class="heading_24">Filter By</h4>
          <button type="button" class="btn-close text-reset filter-drawer-trigger d-lg-none"></button>
      </div>

      <div class="filter-widget d-lg-none">
        <div
          class="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
          data-bs-toggle="collapse" data-bs-target="#filter-mobile-sort">
          <span>
            <span class="sorting-title me-2">Sort by:</span>
            <span class="active-sorting">Featured</span>
          </span>
          <span class="faq-heading-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id="filter-mobile-sort" class="accordion-collapse collapse show">
          <ul class="sorting-lists-mobile list-unstyled m-0">
            <li><a href="#" class="text_14">Featured</a></li>
            <li><a href="#" class="text_14">Best Selling</a></li>
            <li><a href="#" class="text_14">Alphabetically, A-Z</a></li>
            <li><a href="#" class="text_14">Alphabetically, Z-A</a></li>
            <li><a href="#" class="text_14">Price, low to high</a></li>
            <li><a href="#" class="text_14">Price, high to low</a></li>
            <li><a href="#" class="text_14">Date, old to new</a></li>
            <li><a href="#" class="text_14">Date, new to old</a></li>
          </ul>
        </div>
      </div>
      <div class="filter-widget">
        <div
          class="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
          data-bs-toggle="collapse" data-bs-target="#filter-collection">
          Categories
          <span class="faq-heading-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id="filter-collection" class="accordion-collapse collapse show">
          <ul class="filter-lists list-unstyled mb-0">
            <li class="filter-item" >
              
              <label class="filter-label">
                <input type="radio" name="category" value="all" checked  @change="filter.filterProductsByCategory" />
                <!--span class="filter-checkbox rounded me-2"></span-->
                <span class="filter-text">All</span>
              </label>
            </li>
            <li class="filter-item" v-for="(category, index) in cat.categories" v-bind:key="index">
              
              <label class="filter-label">
                <input type="radio" name="category" :value="category.category.name" @change="filter.filterProductsByCategory" />
                <!--span class="filter-checkbox rounded me-2"></span-->
                <span class="filter-text">{{ category.category.name }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-widget">
        <div
          class="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
          data-bs-toggle="collapse" data-bs-target="#filter-availability">
          Availability
          <span class="faq-heading-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id="filter-availability" class="accordion-collapse collapse show">
          <ul class="filter-lists list-unstyled mb-0">
            <li class="filter-item">
              <label class="filter-label">
                <input type="radio" value="1" name="availability" @change="filter.filterProductsByAvailability" />
                <span class="filter-text">In Stock</span>
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="radio" value="0" name="availability" @change="filter.filterProductsByAvailability" />
                Out of Stock
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-widget">
        <div
          class="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
          data-bs-toggle="collapse" data-bs-target="#filter-price">
          Price
          <span class="faq-heading-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id="filter-price" class="accordion-collapse collapse show">
          <div class="filter-price d-flex align-items-center justify-content-between">
            <div class="filter-field">
              <input class="field-input" type="number" placeholder="$0" min="0" max="2000.00">
            </div>
            <div class="filter-separator px-3">To</div>
            <div class="filter-field">
              <input class="field-input" type="number" min="0" placeholder="$595.00" max="2000.00">
            </div>
          </div>
        </div>
      </div>
      <!--div class="filter-widget">
        <div
          class="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
          data-bs-toggle="collapse" data-bs-target="#filter-vendor">
          Vendor
          <span class="faq-heading-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id="filter-vendor" class="accordion-collapse collapse show">
          <ul class="filter-lists list-unstyled mb-0">
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                <span class="filter-text">Bynd</span>
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Huemor
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Jordan Crown
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Hubspot
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Ramotion
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Infosolutions
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Ideo
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Codal
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Salesforce
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-widget">
        <div
          class="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
          data-bs-toggle="collapse" data-bs-target="#filter-type">
          Product Type
          <span class="faq-heading-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id="filter-type" class="accordion-collapse collapse show">
          <ul class="filter-lists list-unstyled mb-0">
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                <span class="filter-text">Bodysuit</span>
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Hoodie
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Jacket
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Legging
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Short
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Top
              </label>
            </li>
            <li class="filter-item">
              <label class="filter-label">
                <input type="checkbox" />
                <span class="filter-checkbox rounded me-2"></span>
                Underwear
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-widget">
        <div class="filter-header faq-heading heading_18 d-flex align-items-center border-bottom">
          Related products
        </div>
        <div class="filter-related">
          <div class="related-item d-flex">
            <div class="related-img-wrapper">
              <img class="related-img" src="/src/assets/img/products/furniture/21.jpg" alt="img">
            </div>
            <div class="related-product-info">
              <h2 class="related-heading heading_18">
                <a href="product.html">Tea Table</a>
              </h2>
              <div class="related-review-icon product-icon-star d-flex align-items-center">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
              </div>
              <p class="related-price text_16">$2,546</p>
            </div>
          </div>
          <div class="related-item d-flex">
            <div class="related-img-wrapper">
              <img class="related-img" src="/src/assets/img/products/furniture/22.jpg" alt="img">
            </div>
            <div class="related-product-info">
              <h2 class="related-heading heading_18">
                <a href="product.html">Comfy Sofa</a>
              </h2>
              <div class="related-review-icon product-icon-star d-flex align-items-center">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
              </div>
              <p class="related-price text_16">$1,526</p>
            </div>
          </div>
          <div class="related-item d-flex">
            <div class="related-img-wrapper">
              <img class="related-img" src="/src/assets/img/products/furniture/23.jpg" alt="img">
            </div>
            <div class="related-product-info">
              <h2 class="related-heading heading_18">
                <a href="product.html">Cusion Chair</a>
              </h2>
              <div class="related-review-icon product-icon-star d-flex align-items-center">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
                <img src="/src/assets/img/icon/star.png" alt="img">
              </div>
              <p class="related-price text_16">$1,235</p>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-widget">
        <a href="product.html">
          <img class="rounded" src="/src/assets/img/banner/collection.jpg" alt="img">
        </a>
      </div-->
    </div>
  </div>
  <!-- sidebar end -->
</template>

<style scoped>
</style>
