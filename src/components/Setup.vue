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
                  <button id="myButton" class="btn">Setup Account</button>
                </router-link>
              </div>
            </div>
            <div class="row know-box">
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-file-o"></i>
                  <span>Epic MyChart</span>
                  <p>Gives you access to your lab results, appointment information, current medications, immunization history, and more.</p>
                  <a href="#" title="" class="underline">Connect</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-check-square-o"></i>
                  <span>Apple Health App</span>r
                  <p>Gathers health data from your iPhone, Apple Watch, and apps.</p>
                  <a href="#" title="" class="underline">Connect</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-envelope-o"></i>
                  <span>Samsung Health</span>
                  <p>Track various aspects of daily life contributing to well being.</p>
                  <a href="#" title="" class="underline">Connect</a>
                </div>
              </div>
            </div>
            <div class="row know-box">
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-file-o"></i>
                  <span>Google Fit</span>
                  <p>Achieve your fitness goals through customized coaching and actionable tips based on your health and activity history.</p>
                  <a href="#" title="" class="underline">Connect</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-check-square-o"></i>
                  <span>Fitbit</span>
                  <p>Stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep.</p>
                  <a href="#" title="" class="underline">Connect</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="knowldeg-box">
                  <i class="fa fa-envelope-o"></i>
                  <span>23andMe</span>
                  <p>Discover what 150+ personalized reports have to say about your ancestry, health, traits and more.</p>
                  <a href="#" title="" class="underline">Connect</a>
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
