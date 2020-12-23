<template>
  <Container id="resume" class="bg-back flex fd-column">
    <div id="triangle-1" class="mdc-elevation--z8 bg-primary-l zi-8 pos-absolute"/>
    <div id="triangle-2" class="mdc-elevation--z8 bg-primary-l zi-10 pos-absolute"/>
    <div id="polygon-1" class="mdc-elevation--z8 bg-primary-m zi-7 pos-absolute"/>
    <div id="polygon-2" class="mdc-elevation--z8 bg-primary-d zi-6 pos-absolute"/>
    <div id="circle-1" class="mdc-elevation--z8 bg-secondary-l zi-10 pos-absolute"/>
    <div id="circle-2" class="mdc-elevation--z8 bg-secondary-m zi-8 pos-absolute"/>
    <div id="circle-3" class="mdc-elevation--z8 bg-secondary-d zi-7 pos-absolute"/>
    <div id="circle-4" class="mdc-elevation--z8 zi-9 pos-absolute"/>
    <Container class="flex fd-row ai-center jc-flex-start p-2 zi-9">
      <Container class="m-2">
        <Avatar src="/assets/avatar.jpg" class="mdc-elevation--z8 avatar-head"/>
      </Container>
      <Container class="ml-2 mr-2 fg-1">
        <Card class="mdc-elevation--z8">
          <CardContent>
            <h1>{{ name }}</h1>
            <h2>{{ description }}</h2>
            <Separator/>
            <Container class="pt-1 pb-1">
              <Container v-for="link in links" :key="link.text">
                <img :src="'/assets/'+link.icon+'.svg'" alt="Link icon" width="12" height="12">
                {{ link.label }}: <a v-bind:href="link.href">{{ link.text }}</a>
              </Container>
            </Container>
          </CardContent>
        </Card>
      </Container>
    </Container>
    <Container class="flex fd-column pr-4 pl-4 pb-4 fg-1 zi-9" id="content">
      <Card class="mdc-elevation--z8 fg-1 flex fd-column">
        <Container class="flex fd-row fw-nowrap jc-flex-start pl-2 pr-2 pb-2">
          <CardContent class="f-1">
            <h3 class="td-u h1">Formation</h3>
            <Container v-for="formation in formations" :key="formation.title">
              <h4 style="white-space: normal" class="h3 mbe-0">{{ formation.title }}</h4>
              <p class="mbs-0 mbe-0">{{ formation.school }}</p>
              <p class="mbs-0">{{ formation.time }}</p>
            </Container>
            <div id="code" class="mdc-elevation--z2">
              <img width="48" height="48" src="/assets/code.svg" alt="Code icon"/>
            </div>
          </CardContent>
          <Separator direction="v"/>
          <CardContent class="f-1">
            <h3 class="td-u h1">Stages</h3>
            <Container v-for="stage in stages" :key="stage.title">
              <h4 class="h3">{{ stage.title }}</h4>
              <Container v-for="exp in stage.experiences" :key="exp.time">
                <h5 class="mbe-0">{{ exp.time }}</h5>
                <p class="mbs-0">{{ exp.description }}</p>
              </Container>
              <Container v-for="p in stage.plus" :key="p.title">
                <h5 class="mbe-0">{{ p.title }}</h5>
                <p class="mbs-0">{{ p.text }}</p>
              </Container>
            </Container>
          </CardContent>
        </Container>
        <Separator direction="h"/>
        <CardContent class="pl-4 pr-4">
          <h3 class="td-u h1">Compétences</h3>
          <Container class="flex fd-row jc-space-around">
          <Container v-for="competence in competences" :key="competence.category" class="flex fd-column">
            <h4 class="h2" style="text-align: center">{{ competence.category }}</h4>
            <Card class="mdc-elevation--z2">
              <CardContent>

              <div v-for="comp in competence.list" :key="comp" style="text-align: center">
                <p>{{ comp }}</p>
              </div>
              </CardContent>
            </Card>
          </Container>
          </Container>
        </CardContent>
      </Card>
    </Container>
  </Container>
</template>

<script lang="ts">
import Container from "@/components/Container.vue";
import Avatar from "@/components/Avatar.vue";
import Card from "@/components/Card.vue";
import CardContent from "@/components/CardContent.vue";
import Separator from "@/components/Separator.vue";
import {defineComponent} from "vue";
import {competences, stages, formations, header, links} from "@/./data";

const App = defineComponent({
  name: 'App',
  components: {
    Separator,
    CardContent,
    Card,
    Avatar,
    Container
  },
  data() {
    return {
      competences: competences,
      stages: stages,
      formations: formations,
      name: header.name,
      description: header.description,
      links: links
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

$avatar-head-size: 256;

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

@each $v, $col in $primary {
  #app .bg-primary-#{str-slice($v, 0, 1)} {
    background: #{nth($col, 1)};
    color: #{nth($col,2)};
  }
}

@each $v, $col in $secondary {
  #app .bg-secondary-#{str-slice($v, 0, 1)} {
    background: #{nth($col,1)};
    color: #{nth($col,2)};
  }
}

.bg-back {
  background: #212121;
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
  bottom: -66px;
  right: -34px;
  width: 48px;
  height: 48px;
  border: 2px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  z-index: 1000;
}

</style>
