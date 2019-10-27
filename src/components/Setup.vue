<template>
  <div class="theme-layout">
    <section>
      <div class="gap color-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-top">
                <h1>Connect Account</h1>
                <router-link :to="{name: 'Timeline'}">
                  <button id="myButton" class="btn">Continue</button>
                </router-link>
              </div>
            </div>
            <div class="row know-box">
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-file-o"></i>
                  <span>Knowledge Base</span>
                  <p>Guys! you may make your own social media website for their friends, or publically.</p>
                  <a href="#" title="" class="underline">Read More</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-check-square-o"></i>
                  <span>FAQ</span>
                  <p>Guys! you may make your own social media website for their friends, or publically.</p>
                  <a href="#" title="" class="underline">Read More</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-envelope-o"></i>
                  <span>Contact us</span>
                  <p>Guys! you may make your own social media website for their friends, or publically.</p>
                  <a href="#" title="" class="underline">Read More</a>
                </div>
              </div>
            </div>
            <div class="row know-box">
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-file-o"></i>
                  <span>Knowledge Base</span>
                  <p>Guys! you may make your own social media website for their friends, or publically.</p>
                  <a href="#" title="" class="underline">Read More</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-check-square-o"></i>
                  <span>FAQ</span>
                  <p>Guys! you may make your own social media website for their friends, or publically.</p>
                  <a href="#" title="" class="underline">Read More</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-envelope-o"></i>
                  <span>Contact us</span>
                  <p>Guys! you may make your own social media website for their friends, or publically.</p>
                  <a href="#" title="" class="underline">Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section><!-- knowledge base top -->
    <div class="bottombar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span class="copyright">© healthbook 2019. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
