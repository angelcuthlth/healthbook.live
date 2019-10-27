<template>
  <div class="hello">
    <div class="theme-layout">
      <section>
        <div class="gap gray-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row merged20" id="page-contents">
                  <div class="col-lg-3">
                    <div class="sidebar static">
                      <div class="widget">
                        <h4 class="widget-title">Shortcuts</h4>
                        <ul class="naves">
                          <li>
                            <i class="ti-clipboard"></i>
                            <a href="#" title="">News feed</a>
                          </li>
                          <li>
                            <i class="ti-mouse-alt"></i>
                            <a href="#" title="">Inbox</a>
                          </li>
                          <li>
                            <i class="ti-files"></i>
                            <a href="#" title="">My pages</a>
                          </li>
                        </ul>
                      </div><!-- Shortcuts -->
                    </div>
                  </div><!-- sidebar -->
                  <div class="col-lg-6">
                    <div class="central-meta">
                      <router-link :to="{name: 'CareTeam'}">
                        <button id="myButton" class="btn">Continue</button>
                      </router-link>
                      <div class="groups">
                        <span><i class="fa fa-file-text-o"></i> Feed</span>
                      </div>
                      <div>Feed</div>
                      <div class="lodmore"><button class="btn-view btn-load-more"></button></div>
                    </div><!-- photos -->
                  </div><!-- centerl meta -->
                  <div class="col-lg-3">
                    <div class="sidebar static">
                      <div class="widget">
                        <h4 class="widget-title">Your Health Page</h4>
                        <div class="your-page">
                          <div>
                            <a title="" href="#"><img alt="" src=" ../images/resources/friend-avatar9.jpg"></a>
                          </div>
                          <div class="page-meta">
                            <a class="underline" title="" href="#">My page</a>
                            <span><i class="ti-comment"></i>Messages <em>9</em></span>
                            <span><i class="ti-bell"></i>Notifications <em>2</em></span>
                          </div>
                          <div class="page-likes">
                            <ul class="nav nav-tabs likes-btn">
                              <li class="nav-item"><a data-toggle="tab" href="#link1" class="active">likes</a></li>
                              <li class="nav-item"><a data-toggle="tab" href="#link2" class="">views</a></li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="widget friend-list stick-widget">
                              <h4 class="widget-title">Health Team</h4>
                              <div id="searchDir"></div>
                              <ul class="friendz-list">
                              </ul>
                            </div><!-- friends list sidebar -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div><!-- sidebar -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="bottombar">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <span class="copyright">©Healthbook.live 2018. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
