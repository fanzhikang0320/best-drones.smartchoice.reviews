<template>
  <div class="container">
    <section class="banner">
      <div class="banner-container">
          <div class="banner-content">
              <h1 class="g">2020’s TOP 5</h1> 
              <h1 class="a">Drones</h1>
          </div>
          <img src="@/assets/image/seal.png" alt="Popular Drones" class="seal">
      </div>
    </section>

    <div class="main-container">
      <section class="description-area">
        <h2 class="area-title">The Best Drones In 2020</h2>
        <div class="content">
          <p>Drones are awesome. In 2020, the prices of high quality drones have finally started dropping. Anyone can now become the pilot of a 4-winged high-tech piece of equipment. However, there are so many affordable and expensive drones on the market right now. Which one should you buy?</p>
          <p>Our researchers tested and reviewed the most popular drones of 2020, looking at build quality, remote control, battery life, wind control, photo & video quality, price, discounts and much more.</p>
        </div>
      </section>

      <section class="product-area">
        <p class="title">This is our Top 5 List for Best Drones Of 2020:</p>
        
        <div class="product-wrapper">
            <div :class="{'product-item': true, 'first-item': index == 0, 'last-item': index == productList.length - 1}" v-for="(product,index) in productList" :key="index">
                <div class="circle" v-if="index != productList.length- 1">
                    <span class="num">{{index + 1}}</span>
                </div>
                <div class="corner-box" v-if="index == 0">
                    <span class="text">Editor's Choice</span>
                </div>
                <div class="big-title" v-if="index == productList.length - 1">The Most Popular Drone In 2020</div>
                
                <a :href="product.link" target="_blank" class="product-link-box">
                  <div class="product-container">
                      <div class="product-container-left">
                          <div class="picture-box">
                              <img :src="product.picture" :alt="product.name" class="picture">
                          </div>
                          <div class="desc-list-box">
                              <h2 class="product-name">{{product.name}}</h2>
                              <ul class="list-box" v-if="product.strengthList.length != 0">
                                  <li v-for="(item,id) in product.strengthList" :key="id">
                                      <span class="icon"></span>
                                      <p class="text">{{item.text}}</p>
                                  </li>
                              </ul>
                              
                              <p class="buys" v-if="index == 0 || index == productList.length - 1">50% Discount Now</p>
                          </div>
                      </div>
                      <div class="product-container-right">
                          <p class="good">
                              <span class="text">{{index == 0 || index == productList.length - 1 ? 'Excellent': index == 1 ? 'Very Good': 'Good'}}</span>
                              <span class="king-icon" v-if="index == 0 || index == productList.length - 1"></span>
                              <span class="good-icon" v-if="index == 1"></span>
                          </p>
                          <p class="rate-box"><span class="score">{{product.score}}</span><span>/10</span></p>
                          <a :href="product.link" target="_blank" class="btn">
                              <span class="text">Visit Site</span>
                              <span class="icon"></span>
                          </a>
                      </div>
                  </div>
                </a>
            </div>
            
        </div>

      </section>

      <section class="popular-area">
        <h2 class="area-title">Why are drones suddenly so popular?</h2>
        <div class="content">
          <p>The short answer is hidden in the pricing – drones have never been more affordable than they are right now. The low prices allow hobbyist, entrepreneurs, and businesses to find various ways to utilize drones’ power. The growth also comes from the multiple industries which are seeing an opportunity to cut costs by implementing the drone technology. Drones are not meant to only serve with a recreational or military purposes.</p>
        </div>
      </section>

      <section class="why-choosing">
        <h2 class="area-title">Why choosing DroneX Pro？</h2>
        <div class="content">
          <p>The lightweight drone is equipped with a high-quality camera to the underside, alongside four rotors which make it possible to take stunning pictures without the need for vast flight experience. Instead of complicated controls, this quadrocopter drone is designed to use a simple remote control and your own mobile phone.</p>

          <img src="/data/img/choosing.jpg" alt="DronX Pro" class="image">

          <p>Its compact size will mean it won't take up much space, but you will benefit from its premium features including; 6-Axis Gryo with built-in stabilisation technology, 3D rolls and flips, headless mode and safe landing ability. The drone is also the fastest of its size, with a speed of up to 12 metres per second and an impressive maximum transmission distance of 2km. There are also options to fly at low speeds or hover to take a clear photo, which is ideal for landscape shots or group photos.</p>
        </div>
      </section>


    </div>

    <section class="special-area">
      <h6 class="special-title">Special Offer on Now!</h6>
      <p class="desc">Now there is a special offer, but such a low price, there may not be much left!</p>
      <p class="desc">So do it now!</p>

      <div class="img-box">
        <div class="img-box-content">
          <img src="/data/img/special-content.png" alt="Drone X Pro" class="img-content">
          <a :href="productList[0].link" class="btn" target="_blank" rel="noopener noreferrer">
            <span class="text">Claim Your Discount Now</span>
            <span class="icon"></span>
          </a>
        </div>
        
      </div>
    </section>



  </div>
</template>

<script>

export default {
  async asyncData({app}) {
    const res = await app.$axios.get('/data/product.json');
    res.data.data.push(res.data.data[0])
    return {
      productList: res.data.data
    }
      
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index.scss'
</style>
