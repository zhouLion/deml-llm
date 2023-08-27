<template>
  <div
    fixed left-0 top-0 z-50 h-100vh w-80 flex flex-col transform overflow-hidden py-2 backdrop-blur backdrop-filter transition-all duration-200 lt-lg:translate-x--80
  >
    <div
      h-20 wfull flex items-center px-7
    >
      <img src="/img/logo.png" alt="fedml's logo" h32px w32px>
      <h2 class="mb-0 ml5 text-xl font-bold">
        FedML LLMOps
      </h2>
    </div>

    <div overflow-y-auto>
      <div class="scrollbox mt-3 max-h-67rem px-2">
        <div mb-4 px-2 not-first:mt-10>
          <div mb-3 block>
            <span style="letter-spacing: 1px" ml3 uppercase op70>
              Training
            </span>
          </div>
          <LayoutsAppLink :to="{ path: '/training/projects' }" icon="i-solar:compass-outline" active-icon="i-solar:compass-bold">
            Projects
          </LayoutsAppLink>
          <LayoutsAppLink :to="{ path: '/training/runs' }" icon="i-solar:running-outline" active-icon="i-solar:running-bold">
            Runs
          </LayoutsAppLink>
          <LayoutsAppLink :to="{ path: '/training/documents' }" icon="i-solar:documents-outline" active-icon="i-solar:documents-bold">
            Documents
          </LayoutsAppLink>
          <LayoutsAppLink :to="{ path: '/training/models' }" icon="i-solar:posts-carousel-vertical-outline" active-icon="i-solar:posts-carousel-vertical-bold">
            Models
          </LayoutsAppLink>
        </div>

        <div mb-4 px-2 not-first:mt-10>
          <div mb-3 block>
            <span style="letter-spacing: 1px" ml3 uppercase op70>
              Serving
            </span>
          </div>
          <LayoutsAppLink :to="{ path: '/serving/projects' }" icon="i-solar:clock-circle-linear" active-icon="i-solar:clock-circle-bold">
            Projects
          </LayoutsAppLink>
          <!-- <LayoutsAppLink :to="{ path: '/palylist' }" icon="i-solar:turntable-music-note-linear" active-icon="i-solar:turntable-music-note-bold">
            Playlist
          </LayoutsAppLink> -->
          <LayoutsAppLink :to="{ path: '/serving/models' }" icon="i-solar:hearts-linear" active-icon="i-solar:hearts-bold">
            Model Cards
          </LayoutsAppLink>
          <LayoutsAppLink :to="{ path: '/serving/endpoints' }" icon="i-solar:hearts-linear" active-icon="i-solar:hearts-bold">
            Inference Endpoints
          </LayoutsAppLink>
          <LayoutsAppLink :to="{ path: '/serving/monitoring' }" icon="i-solar:hearts-linear" active-icon="i-solar:hearts-bold">
            Monitoring
          </LayoutsAppLink>
          <LayoutsAppLink :to="{ path: '/serving/chatbots' }" icon="i-solar:hearts-linear" active-icon="i-solar:hearts-bold">
            Local chatbot
          </LayoutsAppLink>
        </div>
      </div>
    </div>

    <div mb-4 mt-auto px-2>
      <LayoutsAppLink :to="{ path: '/faq' }" icon="i-solar:info-circle-linear" active-icon="i-solar:info-circle-bold">
        FAQ
      </LayoutsAppLink>
    </div>

    <div
      pointer-events-none absolute h-400px w-300px rounded-full op8 blur-2xl blur-xl transition-all duration-1000
      class="bg-image left-70% top-20%"
    />
  </div>
</template>

<style scoped>
  .bg-image {
    background-image: linear-gradient(-45deg, #00a98e 30%, #009ff7);
  }
</style>
