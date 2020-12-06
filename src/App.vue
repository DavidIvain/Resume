<template>
  <div id="app">
    <Container id="resume" class="bg-secondary-d flex fd-column">
      <div id="triangle-1" class="bg-primary-d zi-8 pos-absolute"/>
      <div id="triangle-2" class="bg-primary-d zi-10 pos-absolute"/>
      <div id="polygon-1" class="bg-primary-m zi-7 pos-absolute"/>
      <div id="polygon-2" class="bg-primary-l zi-6 pos-absolute"/>
      <div id="circle-1" class="bg-primary-l zi-10 pos-absolute"/>
      <div id="circle-2" class="bg-primary-m zi-8 pos-absolute"/>
      <div id="circle-3" class="bg-primary-d zi-7 pos-absolute"/>
      <Container class="flex fd-row ai-center jc-flex-start p-2 zi-9">
        <Container class="m-2">
          <Avatar src="./assets/profil.jpg" class="avatar-head"/>
        </Container>
        <Container class="ml-2 mr-2 fg-1">
          <Card>
            <CardContent>
              <h1>David Ivain</h1>
              <h2>M2 IAGL, Université de Lille</h2>
              <Container id="links" class="p-1">
                <font-awesome-icon icon="link"/>
                Site: <a href="http://www.monsite.com">www.monsite.com</a><br/>
                <font-awesome-icon icon="link"/>
                Sources: <a href="https://github.com/DavidIvain/Resume">https://github.com/DavidIvain/Resume</a>
              </Container>
            </CardContent>
          </Card>
        </Container>
      </Container>
      <Container class="flex fd-column pr-4 pl-4 pb-4 fg-1 zi-9" id="content">
        <Card class="fg-1 flex fd-column">
          <Container class="flex fd-row fw-nowrap jc-flex-start p-2">
            <CardContent>
              <h3 class="td-u">Formation</h3>
              <h4 class="mbe-0">Master Informatique</h4>
              <p class="mbs-0">Université de Lille, Villeneuve-d’Ascq
                <br/>2019 - Aujourd’hui</p>
              <h4 class="mbe-0">Licence 3 Informatique</h4>
              <p class="mbs-0">Université de Lille, Villeneuve-d’Ascq
                <br/>2018 - 2019</p>
              <h4 class="mbe-0">BTS SIO option SLAM</h4>
              <p class="mbs-0">Lycée privé Saint Rémi, Roubaix
                <br/>2016 - 2018</p>
              <h4 class="mbe-0">Baccalauréat Général Scientifique</h4>
              <p class="mbs-0">Lycée privé Saint Rémi, Roubaix
                <br/>2011 - 2014</p>
            </CardContent>
            <CardContent class="f-1">
              <h3 class="td-u">Stages</h3>
              <h4>Développeur Stagiaire, Urbilog ; Villeneuve-d’Ascq</h4>
              <h5>12 semaines, 2019</h5>
              <p>Travail sur applications pour la gestion de transcripts en Angular 8.</p>
              <h5>8 semaines, 2018</h5>
              <p>Refonte complète de l’application Gestion de Projets de l’intranet. Utilisation de PHP, HTML, CSS,
                JavaScript.</p>
              <h5>5 semaines, 2017</h5>
              <p>Corrections de bugs sur l’intranet de l’entreprise et ajout de nouvelles fonctionnalités.</p>
              <h4>Compétences Acquises :</h4>
              <p>Travail en équipe, normes et outils d’accessibilité, connaissances en développement web (HTML, CSS,
                PHP, JavaScript).</p>
            </CardContent>
          </Container>
          <CardContent class="pl-4 pr-4 pt-0">
            <h3 class="td-u">Compétences</h3>
            <h4>Informatique</h4>
            <ul>
              <li>Web: Node.js, Angular, React, Vue.js (ce CV), CSS, SCSS, PHP</li>
              <li>SQL</li>
              <li>Java, C#, Kotlin, Swift, Python</li>
              <li>C, C++</li>
              <li>Git (rebase, squash, etc), GitLab</li>
              <li>Windows, Linux, MacOS</li>
              <li>Connaissances basiques en réseaux</li>
              <li>Accéssibilité</li>
            </ul>
            <h4>Langues</h4>
            <ul>
              <li>Anglais courrant</li>
            </ul>
          </CardContent>
        </Card>
      </Container>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";

export default {
  name: 'App',
  components: {
    CardContent,
    Card,
    Avatar,
    Container
  }
}
</script>

<style lang="scss">
@import "style/style";

$avatar-head-size: 256;

$primary: (
    light: (
        "#78909c",
        white
    ),
    main: (
        "#607d8b",
        white
    ),
    dark: (
        "#546e7a",
        white
    )
);
$secondary: (
    dark: (
        "#212121",
        white
    ),
    main: (
        "#424242",
        white
    ),
    light: (
        "#616161",
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
}

#triangle-2 {
  top: 0;
  right: 0;
  width: 512px;
  height: 256px;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
}

#polygon-1 {
  height: 768px;
  width: 100vw;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%);
}

#polygon-2 {
  height: 1024px;
  width: 100vw;
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%);
}

#circle-1 {
  height: 384px;
  width: 384px;
  border-radius: 100%;
  bottom: -192px;
  right: -192px;
}

#circle-2 {
  height: 768px;
  width: 768px;
  border-radius: 100%;
  bottom: -384px;
  right: -384px;
}

#circle-3 {
  height: 1152px;
  width: 1152px;
  border-radius: 100%;
  bottom: -576px;
  right: -576px;
}

a {
  text-decoration: none;
  color: blue;
}

#links {
  border: 1px solid lightgrey;
  border-radius: 8px;
}

</style>
