<template>
  <CContainer id="resume" class="bg-back flex fd-column">
    <div id="triangle-1" class="mdc-elevation--z8 bg-primary-l zi-8 pos-absolute"/>
    <div id="triangle-2" class="mdc-elevation--z8 bg-primary-l zi-10 pos-absolute"/>
    <div id="polygon-1" class="mdc-elevation--z8 bg-primary-m zi-7 pos-absolute"/>
    <div id="polygon-2" class="mdc-elevation--z8 bg-primary-d zi-6 pos-absolute"/>
    <div id="circle-1" class="mdc-elevation--z8 bg-secondary-l zi-10 pos-absolute"/>
    <div id="circle-2" class="mdc-elevation--z8 bg-secondary-m zi-8 pos-absolute"/>
    <div id="circle-3" class="mdc-elevation--z8 bg-secondary-d zi-7 pos-absolute"/>
    <div id="circle-4" class="mdc-elevation--z8 zi-9 pos-absolute"/>
    <CContainer class="flex fd-row ai-center jc-flex-start p-2 zi-9">
      <CContainer class="m-2">
        <CAvatar @click="data.language === LangEnum.FR ? setLanguage(LangEnum.EN) : setLanguage(LangEnum.FR)" src="/assets/avatar.jpg" alt="My photo" class="mdc-elevation--z8 avatar-head"/>
      </CContainer>
      <CContainer class="ml-2 mr-2 fg-1">
        <CCard>
          <CContainer class="p-1">
            <CCardTitle background-color="cornflowerblue" :flex="false">
              <h1>{{ data.header.name }}</h1>
              <h2>{{ data.header.description }}</h2>
            </CCardTitle>
            <CCardContent class="grid cols-2">
              <CContainer v-for="link in data.links" :key="link.text" class="flex fd-row pt-1 col-1">
                <img :src="'/assets/'+link.icon+'.svg'" :alt="link.label + ' icon'">
                <a class="ml-1" v-bind:href="link.href" target="_blank" v-if="link.href">{{ link.text }}</a>
                <span class="ml-1" v-bind:href="link.href" v-else>{{ link.text }}</span>
              </CContainer>
            </CCardContent>
          </CContainer>
        </CCard>
      </CContainer>
    </CContainer><!--header end-->
    <CContainer class="flex fd-column pr-4 pl-4 pb-4 fg-1 zi-9" id="content"><!--main content begin-->
      <CCard class="fg-1 flex fd-column p-2"><!--main card begin-->
        <!--<CContainer class="flex fd-row fw-nowrap jc-flex-start">--><!--top part begin-->
        <CContainer class="grid cols-2">
          <CContainer class="p-2 col-1"><!--left part begin-->
            <CCardTitle background-color="crimson">
              <svg width="30" height="30">
                <title>User icon</title>
                <use href="/assets/user.svg#user" height="30" width="30"></use>
              </svg>
              <h3 class="h1" style="margin-inline-start: 16px">{{ data.getLocalized("about") }}</h3>
            </CCardTitle>
            <CCardContent>
              <CContainer>
                <h4 class="h3">Introduction</h4>
                <CContainer v-html="data.intro"></CContainer>
                <h4 class="h3">{{ data.coInterest.title }}</h4>
                <ul>
                  <li v-for="interest in data.coInterest.list" :key="interest">{{ interest }}</li>
                </ul>
                <p></p>
              </CContainer>
            </CCardContent>
            <CCardTitle
                background="linear-gradient(to right, skyblue, plum, lightcoral)">
              <svg width="30" height="30">
                <title>{{data.competences.icon}} icon</title>
                <use :href="'/assets/'+data.competences.icon+'.svg#'+data.competences.icon" height="30" width="30"></use>
              </svg>
              <h3 class="h1" style="margin-inline-start: 16px;">{{ data.competences.title }}</h3>
            </CCardTitle>
            <CCardContent class="flex fd-row jc-space-between p-1 fw-wrap" id="comp-container">
              <CContainer v-for="competence in data.competences.list" :key="competence.category" class="flex fd-column fg-1">
                <CCardTitle class="mb-1" align="center" :background-color="competence.color">
                  <svg width="24" height="24">
                    <title>{{ competence.icon }} icon</title>
                    <use :href="'/assets/'+competence.icon+'.svg#'+competence.icon"></use>
                  </svg>
                  <h4 class="h2 mbs-0 mbe-0" style="text-align: center; margin-inline-start: 16px">
                    {{ competence.category }}
                  </h4>
                </CCardTitle>
                <CCard :elevated="false" class="fg-1">
                  <CCardContent>
                    <div v-for="comp in competence.list" :key="comp" class="competence">
                      <p class="flex fd-row jc-space-between"><span>{{ comp[0] }}</span><img class="ml-1" v-if="comp[1]" src="/assets/star.svg" alt="star icon"></p>
                    </div>
                  </CCardContent>
                </CCard>
              </CContainer>
            </CCardContent>
          </CContainer><!--left part end-->
          <CContainer class="p-2 col-1"><!--right part begin-->
            <CContainer>
              <CCardTitle background-color="mediumseagreen">
                <svg width="30" height="30">
                  <title>{{data.formations.icon}} icon</title>
                  <use :href="'/assets/'+data.formations.icon+'.svg#'+data.formations.icon" height="30" width="30"></use>
                </svg>
                <h3 class="h1" style="margin-inline-start: 16px">{{ data.formations.title }}</h3>
              </CCardTitle>
              <CCardContent>
                <CContainer v-for="formation in data.formations.list" :key="formation.title">
                  <h4 style="white-space: normal" class="h3 mbe-0">{{ formation.title }}</h4>
                  <p class="mbs-0 mbe-0">{{ formation.school }}</p>
                  <p class="mbs-0 mbe-0" v-if="formation.mention">{{ formation.mention }}</p>
                  <p class="mbs-0">{{ formation.time }}</p>
                </CContainer>
              </CCardContent>
            </CContainer>
            <CContainer>
              <CCardTitle background-color="rosybrown">
                <svg width="30" height="30">
                  <title>{{data.stages.icon}} icon</title>
                  <use :href="'/assets/'+data.stages.icon+'.svg#'+data.stages.icon" height="30" width="30"></use>
                </svg>
                <h3 class="h1" style="margin-inline-start: 16px">{{ data.stages.title }}</h3>
              </CCardTitle>
              <CCardContent>
                <CContainer v-for="stage in data.stages.list" :key="stage.title">
                  <h4 class="h3">{{ stage.title }}</h4>
                  <CContainer v-for="exp in stage.experiences" :key="exp.time">
                    <h5 class="mbe-0">{{ exp.time }}</h5>
                    <p class="mbs-0">{{ exp.description }}</p>
                  </CContainer>
                  <CContainer v-for="p in stage.plus" :key="p.title">
                    <h5 class="mbe-0">{{ p.title }}</h5>
                    <p class="mbs-0" v-html="p.text"></p>
                  </CContainer>
                </CContainer>
              </CCardContent>
            </CContainer>
          </CContainer><!--right part end-->
        </CContainer><!--top part end-->
        <CContainer class="p-2">

        </CContainer>
      </CCard><!--main card end-->
    </CContainer><!--main content end-->
  </CContainer>
</template>

<script lang="ts">
import CContainer from "@/components/CContainer.vue";
import CAvatar from "@/components/CAvatar.vue";
import CCard from "@/components/CCard.vue";
import CCardContent from "@/components/CCardContent.vue";
import {defineComponent} from "vue";
import {Data, LangEnum} from "@/./data";
import CCardTitle from "@/components/CCardTitle.vue";

const App = defineComponent({
  name: 'App',
  components: {
    CCardTitle,
    CCardContent,
    CCard,
    CAvatar,
    CContainer
  },
  data() {
    return {
      data: new Data(LangEnum.FR),
      LangEnum: LangEnum
    }
  },
  methods: {
    setLanguage: function (l: string) {
      this.data.language = l;
    }
  }
});
export default App;
</script>

<style lang="scss">
@use "style/style" as *;
@import "../node_modules/@material/elevation/dist/mdc.elevation.min.css";

@font-face {
  font-family: OpenSans;
  src: url("style/fonts/Open_Sans/OpenSans-Regular.ttf");
}

@font-face {
  font-family: Nunito;
  src: url("style/fonts/Nunito/Nunito-Regular.ttf");
}

$avatar-head-size: 320;

$primary: (
    light: (
        "#6e96c7",
        white
    ),
    main: (
        "#3d6896",
        white
    ),
    dark: (
        "#003e68",
        white
    )
);
$secondary: (
    dark: (
      //"#212121",
        "#00505c",
        white
    ),
    main: (
        "#2c7d89",
        white
    ),
    light: (
        "#60acb9",
        white
    )
);

.mdc-elevation--z8, .mdc-elevation--z2 {
  -webkit-print-color-adjust: exact;
  -webkit-filter: blur(0);
}

@each $v, $col in $primary {
  #app .bg-primary-#{str-slice($v, 0, 1)} {
    background-color: #{nth($col, 1)};
    color: #{nth($col,2)};
  }
}

@each $v, $col in $secondary {
  #app .bg-secondary-#{str-slice($v, 0, 1)} {
    background-color: #{nth($col,1)};
    color: #{nth($col,2)};
  }
}

.bg-back {
  background-color: #212121;
  color: white;
}

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#resume {
  height: #{(100 / 21) * 29.7}vw;
  overflow: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

.avatar-head {
  width: #{$avatar-head-size}px;
  height: #{$avatar-head-size}px;
  border: 8px solid white;
}

#triangle-1 {
  width: #{ $avatar-head-size + (9 * $mp-step)}px;
  height: #{ $avatar-head-size + (9 * $mp-step)}px;
  //clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  transform: translate(-128px, -128px) rotate(-45deg) scale(2, 1);
}

#triangle-2 {
  top: 0;
  right: 0;
  width: 1000px;
  height: 1000px;
  //clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
  transform: translate(500px, -850px) rotate(25deg);
}

#polygon-1 {
  height: 600px;
  width: 100vw;
  //clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%);
  transform: rotate(10deg) scale(1.5);
}

#polygon-2 {
  height: 1000px;
  width: 100vw;
  //clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%);
  transform: translate(-500px, 0px) rotate(-20deg);
}

#circle-1 {
  height: 384px;
  width: 384px;
  border-radius: 50%;
  bottom: -192px;
  right: -192px;
}

#circle-4 {
  height: 512px;
  width: 512px;
  border-radius: 50%;
  top: 64px;
  right: 128px;
  background: #fff8ad;
}

#circle-2 {
  height: 768px;
  width: 768px;
  border-radius: 50%;
  bottom: -384px;
  right: -384px;
}

#circle-3 {
  height: 1152px;
  width: 1152px;
  border-radius: 50%;
  bottom: -576px;
  right: -576px;
}

#app a {
  text-decoration: none !important;
  color: blue !important;
}

#code {
  background: white;
  position: absolute;
  bottom: -34px;
  right: -34px;
  width: 48px;
  height: 48px;
  border: 2px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  z-index: 1000;
}

.competence:first-child > * {
  margin-block-start: 0 !important;
}

.competence:last-child > * {
  margin-block-end: 0 !important;
}

#comp-container {
  gap: 16px;
}

</style>
