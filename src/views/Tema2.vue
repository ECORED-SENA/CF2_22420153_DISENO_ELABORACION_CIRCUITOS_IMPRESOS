<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Descarga e instalación de Autodesk Eagle
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p Existen numerosas herramientas para el diseño CAD de circuitos electrónicos, cada una con características particulares, fortalezas y enfoques asociados al nivel tecnológico bajo el cual fue desarrollada. Se presenta un ejemplo con Eagle CAD, ilustrando el proceso de descarga, instalación y descripción de sus herramientas clave como referencia para el estudio de otros #[i software].
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img1.png', alt='', style='width: 200px').m-auto
    p.mb-5 A continuación, se presenta una guía paso a paso para la descarga, instalación y configuración inicial del #[i software] Eagle:
        

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
