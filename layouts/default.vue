<template>
  <div class="app">
    <header>
      <div class="header-left">
        <img src="@/assets/image/logo.png" alt="SMART CHOICES" class="logo">
        <p class="text">Fly, shoot 4K video and grab hi-res photos</p>
      </div>
      <a href="/" class="btn">Popular Drones</a>
    </header>
    <main>
      <Nuxt />
      <Alert />
    </main>

    <footer>
        <div class="footer-main">
           <a href="/" rel="noopener noreferrer">
                <img src="@/assets/image/footerLogo.png" alt="SMART CHOICES" class="footer-logo">
            </a> 
            <div class="content">
                <p>MARKETING DISCLOSURE: This website is a market place. As such you should know that the owner has a monetary connection to the product and services advertised on the site.</p>
                <p>The owner receives payment whenever a qualified lead is referred but that is the extent of it.</p>
                <p>ADVERTISING DISCLOSURE: This website and the products & services referred to on the site are advertising marketplaces.This website is an advertisement and note a news publication.Any photographs of persons used on thissite are models. The owner of this site and of the products and services referred to on this site only provides a service whereconsumers can obtain and compare.</p>
                    <p>2020 All Rights Reserved.</p>
            </div>
            <ul class="footer-nav-list clearfix">
                <li>
                    <nuxt-link to="/disclosure">Disclosure</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/terms">Terms of Use</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About Us</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">Contact Us</nuxt-link>
                </li>
            </ul>
     </div>
    </footer>
    
  </div>
</template>
<script>
import Alert from '@/components/Alert.vue'
export default {
  components: {
    Alert
  } 
}
</script>
<style lang="scss">

@import '~/assets/css/default.scss'

</style>
