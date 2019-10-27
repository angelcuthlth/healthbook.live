<template>
  <div class="theme-layout">
    <div class="gap100 no-gap">
      <div class="container-fluid">
        <div class="row">
          <div class="background-video">
            <video class="bv-video" muted></video>
            <div class="videobg-meta">
              <h3><i class="fa fa-smile-o"></i>Hi, we HealthBook</h3>
              <div class="info">
                <span>Facebook for your health</span>
                <p>
                  Turning Health Care data into information, and information into insight.
                </p>
                <router-link to="/setup" tag="button">See your Journey</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- background video featured area -->
    <section>
      <div class="gap100 no-top overlap-75">
        <div class="container">
          <div class="servic-category">
            <div class="row merged">
              <div class="col-lg-4">
                <div class="category-box">
                  <i class="fa fa-wordpress"></i>
                  <h2>Adoption of digital health apps today is abysmal</h2>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="category-box selected">
                  <i class="fa fa-html5"></i>
                  <h2>Patient self management is critical to improving diabetic disease
                  </h2>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="category-box">
                  <i class="fa fa-google-wallet"></i>
                  <h2>Providers struggle with prompting, nudging, and interacting patients </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- services section -->
    <div class="bottombar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span class="copyright">© HealthBook 2019. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
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
