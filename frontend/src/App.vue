<script setup>
import { onMounted } from 'vue';
import CartMenu from "@/components/CartMenu.vue"
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from '@/stores/products';
import { useAuthStore } from './stores/auth';
import { useCateoryStore } from './stores/categories';

const prod = useProductStore()
const cat = useCateoryStore()
const navSection = [
    { loc: "Home", route: "/", icon: "las la-home" },
    { loc: "Shop", route: "/shop", icon: "las la-gifts" },
    { loc: "View Cart", route: "/cart", icon: "las la-cart-plus" },
    { loc: "Checkout", route: "/checkout", icon: "las la-cash-register" },
    //{ loc: "Contact Us", route: "/contact", icon: "las la-user" }
];
const auth = useAuthStore()
onMounted(async () => {
    await cat.getCategories()
})

</script>

<template>
    <!-- header start -->
    <header class="sticky-header border-btm-black header-1">
        <div class="header-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-md-4 col-4">
                        <div class="header-logo">
                            <RouterLink to="/" class="logo-main">
                                <h2>TagBiz </h2>
                                <!--img src="/src/assets/img/logo.png" loading="lazy" alt="tagbiz"-->
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-lg-8 d-lg-block d-none">
                        <nav class="site-navigation">
                            <ul class="main-menu list-unstyled justify-content-center">

                                <!--li class="menu-list-item nav-item has-dropdown">
                                    <div class="mega-menu-header">
                                        <a class="nav-link" href="about-us.html">
                                            Pages
                                        </a>
                                        <span class="open-submenu">
                                            <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="submenu-transform submenu-transform-desktop">
                                        <ul class="submenu list-unstyled">
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="about-us.html">About
                                                    Us</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="contact.html">Contact</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="faq.html">FAQ</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="404.html">404 page</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="login.html">Login</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="register.html">Register</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="cart.html">Cart</a>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="checkout.html">Checkout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li-->
                                <li class="menu-list-item nav-item" v-for="(nav, index) in navSection"
                                    v-bind:key="index">
                                    <RouterLink :to="nav.route" class="nav-link" exact>
                                        <i :class="nav.icon"></i> <span>{{ nav.loc }}</span>
                                    </RouterLink>
                                </li>
                                <li class="menu-list-item nav-item has-dropdown">
                                    <div class="mega-menu-header">
                                        <a class="nav-link" href="about-us.html">
                                            <i class="las la-user"></i><span>User</span>
                                        </a>
                                        <span class="open-submenu">
                                            <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="submenu-transform submenu-transform-desktop">
                                        <ul class="submenu list-unstyled">
                                            <template v-if="auth.accessToken">
                                                <li class="menu-list-item nav-item-sub">
                                                    <RouterLink class="nav-link-sub nav-text-sub" to="/login">Profile
                                                    </RouterLink>
                                                </li>
                                                <li class="menu-list-item nav-item-sub">
                                                    <RouterLink class="nav-link-sub nav-text-sub" to="/change_email">Change
                                                        Email</RouterLink>
                                                </li>
                                                <li class="menu-list-item nav-item-sub">
                                                    <a class="nav-link-sub nav-text-sub" @click="auth.logoutAction" type="button">Logout</a>
                                                </li>
                                            </template>
                                            <template v-if="!auth.accessToken">
                                                <li class="menu-list-item nav-item-sub">
                                                    <RouterLink class="nav-link-sub nav-text-sub" to="/register">
                                                        Register</RouterLink>
                                                </li>
                                                <li class="menu-list-item nav-item-sub">
                                                    <RouterLink class="nav-link-sub nav-text-sub" to="/login">Login
                                                    </RouterLink>
                                                </li>
                                                <li class="menu-list-item nav-item-sub">
                                                    <RouterLink class="nav-link-sub nav-text-sub" to="/register">Forgot
                                                        Password</RouterLink>
                                                </li>
                                            </template>
                                            <li class="menu-list-item nav-item-sub">
                                                <RouterLink class="nav-link-sub nav-text-sub" to="/faq">FAQ</RouterLink>
                                            </li>
                                            <li class="menu-list-item nav-item-sub">
                                                <RouterLink class="nav-link-sub nav-text-sub" to="/contact">Contact
                                                </RouterLink>
                                            </li>
                                            <!--li class="menu-list-item nav-item-sub">
                                                <a class="nav-link-sub nav-text-sub" href="wishlist.html">Wishlist</a>
                                            </li-->
                                        </ul>
                                    </div>
                                </li>



                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-2 col-md-8 col-8">
                        <div class="header-action d-flex align-items-center justify-content-end">
                            <a class="header-action-item header-search" href="javascript:void(0)">
                                <svg class="icon icon-search" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.75 0.250183C11.8838 0.250183 15.25 3.61639 15.25 7.75018C15.25 9.54608 14.6201 11.1926 13.5625 12.4846L19.5391 18.4611L18.4609 19.5392L12.4844 13.5627C11.1924 14.6203 9.5459 15.2502 7.75 15.2502C3.61621 15.2502 0.25 11.884 0.25 7.75018C0.25 3.61639 3.61621 0.250183 7.75 0.250183ZM7.75 1.75018C4.42773 1.75018 1.75 4.42792 1.75 7.75018C1.75 11.0724 4.42773 13.7502 7.75 13.7502C11.0723 13.7502 13.75 11.0724 13.75 7.75018C13.75 4.42792 11.0723 1.75018 7.75 1.75018Z"
                                        fill="black" />
                                </svg>
                            </a>
                            <a class="header-action-item header-wishlist ms-4 d-none d-lg-block" href="wishlist.html">
                                <svg class="icon icon-wishlist" width="26" height="22" viewBox="0 0 26 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                        fill="black" />
                                </svg>
                            </a>
                            <a class="header-action-item header-cart ms-4" href="#drawer-cart"
                                data-bs-toggle="offcanvas">
                                <svg class="icon icon-cart" width="24" height="26" viewBox="0 0 24 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z"
                                        fill="black" />
                                </svg>
                            </a>
                            <a class="header-action-item header-hamburger ms-4 d-lg-none" href="#drawer-menu"
                                data-bs-toggle="offcanvas">
                                <svg class="icon icon-hamburger" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-wrapper">
                <div class="container">
                    <form action="#" class="search-form d-flex align-items-center">
                        <button type="submit" class="search-submit bg-transparent pl-0 text-start">
                            <svg class="icon icon-search" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.75 0.250183C11.8838 0.250183 15.25 3.61639 15.25 7.75018C15.25 9.54608 14.6201 11.1926 13.5625 12.4846L19.5391 18.4611L18.4609 19.5392L12.4844 13.5627C11.1924 14.6203 9.5459 15.2502 7.75 15.2502C3.61621 15.2502 0.25 11.884 0.25 7.75018C0.25 3.61639 3.61621 0.250183 7.75 0.250183ZM7.75 1.75018C4.42773 1.75018 1.75 4.42792 1.75 7.75018C1.75 11.0724 4.42773 13.7502 7.75 13.7502C11.0723 13.7502 13.75 11.0724 13.75 7.75018C13.75 4.42792 11.0723 1.75018 7.75 1.75018Z"
                                    fill="black" />
                            </svg>
                        </button>
                        <div class="search-input mr-4">
                            <input type="text" placeholder="Search your products..." autocomplete="off">
                        </div>
                        <div class="search-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-close">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
    <!-- header end -->

    <main id="MainContent" class="content-for-layout mb-4">

        <RouterView />
    </main>
    <CartMenu :cartItems="prod.cartItems" />
    <!-- drawer menu start -->
    <div class="offcanvas offcanvas-start d-flex d-lg-none" tabindex="-1" id="drawer-menu">
        <div class="offcanvas-wrapper">
            <div class="offcanvas-header border-btm-black">
                <h5 class="drawer-heading">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0 d-flex flex-column justify-content-between">
                <nav class="site-navigation">
                    <ul class="main-menu list-unstyled">
                        <li class="menu-list-item nav-item" v-for="(nav, index) in navSection" v-bind:key="index">
                            <RouterLink exact class="nav-link" :to="nav.route">{{ nav.loc }}</RouterLink>
                        </li>

                    </ul>
                </nav>
                <ul class="utility-menu list-unstyled">
                    <li class="utilty-menu-item">
                        <a class="announcement-text" href="tel:+1-078-2376">
                            <span class="utilty-icon-wrapper">
                                <svg class="icon icon-phone" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg>
                            </span>
                            Call: +1 078 2376
                        </a>
                    </li>
                    <li class="utilty-menu-item">
                        <a class="announcement-login announcement-text" href="login.html">
                            <span class="utilty-icon-wrapper">
                                <svg class="icon icon-user" width="24" height="24" viewBox="0 0 10 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 0C3.07227 0 1.5 1.57227 1.5 3.5C1.5 4.70508 2.11523 5.77539 3.04688 6.40625C1.26367 7.17188 0 8.94141 0 11H1C1 8.78516 2.78516 7 5 7C7.21484 7 9 8.78516 9 11H10C10 8.94141 8.73633 7.17188 6.95312 6.40625C7.88477 5.77539 8.5 4.70508 8.5 3.5C8.5 1.57227 6.92773 0 5 0ZM5 1C6.38672 1 7.5 2.11328 7.5 3.5C7.5 4.88672 6.38672 6 5 6C3.61328 6 2.5 4.88672 2.5 3.5C2.5 2.11328 3.61328 1 5 1Z"
                                        fill="#000" />
                                </svg>
                            </span>
                            <span>Login</span>
                        </a>
                    </li>
                    <li class="utilty-menu-item">
                        <a class="header-action-item header-wishlist" href="wishlist.html">
                            <span class="utilty-icon-wrapper">
                                <svg class="icon icon-wishlist" width="26" height="22" viewBox="0 0 26 22" fill="#000"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                        fill="#000" />
                                </svg>
                            </span>
                            <span>My wishlist</span>
                        </a>
                    </li>
                    <li class="utilty-menu-item">
                        <button type="button" class="currency-btn btn-reset" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img class="flag" src="/src/assets/img/flag/usd.jpg" alt="img">
                            <span>USD</span>
                            <span class="utilty-icon-wrapper">
                                <svg class="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </button>

                        <ul class="currency-list dropdown-menu dropdown-menu-end px-2">
                            <li class="currency-list-item ">
                                <a class="currency-list-option" href="#" data-value="USD">
                                    <img class="flag" src="/src/assets/img/flag/usd.jpg" alt="img">
                                    <span>USD</span>
                                </a>
                            </li>
                            <li class="currency-list-item ">
                                <a class="currency-list-option" href="#" data-value="CAD">
                                    <img class="flag" src="/src/assets/img/flag/cad.jpg" alt="img">
                                    <span>CAD</span>
                                </a>
                            </li>
                            <li class="currency-list-item ">
                                <a class="currency-list-option" href="#" data-value="EUR">
                                    <img class="flag" src="/src/assets/img/flag/eur.jpg" alt="img">
                                    <span>EUR</span>
                                </a>
                            </li>
                            <li class="currency-list-item ">
                                <a class="currency-list-option" href="#" data-value="JPY">
                                    <img class="flag" src="/src/assets/img/flag/jpy.jpg" alt="img">
                                    <span>JPY</span>
                                </a>
                            </li>
                            <li class="currency-list-item ">
                                <a class="currency-list-option" href="#" data-value="GBP">
                                    <img class="flag" src="/src/assets/img/flag/gbp.jpg" alt="img">
                                    <span>GBP</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- drawer menu end -->

    <CartMenu :cartItems="prod.cartItems" />
</template>
<style>
:root {
    --primary-color: #00234D;
    --secondary-color: #F76B6A;

    --btn-primary-border-radius: 0.25rem;
    --btn-primary-color: #fff;
    --btn-primary-background-color: #00234D;
    --btn-primary-border-color: #00234D;
    --btn-primary-hover-color: #fff;
    --btn-primary-background-hover-color: #00234D;
    --btn-primary-border-hover-color: #00234D;
    --btn-primary-font-weight: 500;

    --btn-secondary-border-radius: 0.25rem;
    --btn-secondary-color: #00234D;
    --btn-secondary-background-color: transparent;
    --btn-secondary-border-color: #00234D;
    --btn-secondary-hover-color: #fff;
    --btn-secondary-background-hover-color: #00234D;
    --btn-secondary-border-hover-color: #00234D;
    --btn-secondary-font-weight: 500;

    --heading-color: #000;
    --heading-font-family: 'Poppins', sans-serif;
    --heading-font-weight: 700;

    --title-color: #000;
    --title-font-family: 'Poppins', sans-serif;
    --title-font-weight: 400;

    --body-color: #000;
    --body-background-color: #fff;
    --body-font-family: 'Poppins', sans-serif;
    --body-font-size: 14px;
    --body-font-weight: 400;

    --section-heading-color: #000;
    --section-heading-font-family: 'Poppins', sans-serif;
    --section-heading-font-size: 48px;
    --section-heading-font-weight: 600;

    --section-subheading-color: #000;
    --section-subheading-font-family: 'Poppins', sans-serif;
    --section-subheading-font-size: 16px;
    --section-subheading-font-weight: 400;
}
</style>
