<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-md-7.col-lg-auto.px-0.pe-lg-0
            figure
              img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 380px").m-auto
          .col-md-7.col.bg-c1
            .row.align-items-center.h-100
              .col-12
                .p-4.h-100
                  p.mb-0 El diseño asistido por computadora (CAD) facilita el desarrollo de circuitos impresos (PCB), permitiendo definir esquemas y conexiones y simular el funcionamiento de circuitos. Estas herramientas van más allá del dibujo, ofreciendo opciones avanzadas de análisis y simulación.
        p.mb-0  En el diseño de PCB, el proceso se divide en dos fases: primero, el diseñador selecciona componentes y configura un diagrama esquemático; luego, se definen las conexiones físicas sobre la placa para el diseño final del circuito.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.png", alt="", style="width: 300px").m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c2
          .row.align-items-center
            .col-md-auto
              figure
                img(src="@/assets/curso/intro/img2.svg", alt="", style="width: 100px").m-auto
            .col
              p.mb-0 Actualmente, software como Eagle, Orcad y Multisim ofrecen interfaces gráficas accesibles, permitiendo realizar simulaciones y crear componentes personalizados. La disponibilidad de versiones gratuitas amplía las opciones de diseño para usuarios con distintos niveles de experiencia.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
