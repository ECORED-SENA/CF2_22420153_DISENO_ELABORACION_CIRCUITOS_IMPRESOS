<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Diseño Asistido por Computador (CAD) para circuitos impresos
    .row.bg-c5
      .col-12
        .px-5
          .row.mb-5
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              .row.justify-content-center.mb-3
                .col-md-7.col-lg-auto.px-0.pe-lg-0
                  figure
                    img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 380px").m-auto
                .col-md-7.col.bg-c3
                  .row.align-items-center.h-100
                    .col-12
                      .p-4.h-100
                        p Las herramientas CAD (Diseño Asistido por Computadora, de sus siglas en inglés #[i Computer Aided Design]) se asocian comúnmente con el dibujo, aunque abarcan otras fases del diseño. 
                        p.mb-0 La introducción de estas herramientas ha transformado el diseño de circuitos electrónicos, y muchas empresas han lanzado programas específicos para esta tarea. Actualmente, las interfaces gráficas facilitan el aprendizaje de estos programas para usuarios con conocimientos básicos.
            .col-lg-3(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 300px").m-auto
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Herramientas CAD para diseño de circuitos PCB (#[i printed circuit board])
          .row.mb-3
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p En el diseño de circuitos impresos, es necesario definir tanto el esquema del circuito como el diagrama de conexiones que formarán las pistas de cobre sobre la placa. Este proceso se realiza en dos fases: primero, se determina la funcionalidad del circuito, los componentes necesarios y sus interconexiones en el editor de esquemas. Luego, se diseña la máscara en el editor de PCB, definiendo la disposición física de las conexiones.
              .row
                .col-12
                  .p-4.bg-c6
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema1/img4.svg', alt='', style='width: 60px').m-auto
                      .col
                        p.mb-0 Para realizar un circuito eléctrico o electrónico, el diseñador requiere de documentación, hojas técnicas de fabricantes y/o apoyo de herramientas computacionales que orienten en cuanto a variables, parámetros y componentes.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 400px').m-auto
          p.mb-4(data-aos="fade-down") A continuación, se presenta una lista de herramientas computacionales utilizadas en el diseño de PCBs, especificando su uso y regulaciones de licencia:
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 400px').m-auto
            .col-lg-8(data-aos="fade-left")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 1.] Herramientas computacionales de diseño para PCB
              .tabla-a.color-acento-contenido
                table
                  thead
                    tr
                      th Herramientas
                      th Descripción de su uso
                      th Licencia o regulaciones
                  tbody
                    tr
                      td SwitcherCAD, BodeCAD y FilterCAD
                      td Realiza esquemático, simulación, análisis en el tiempo y en la frecuencia. Diseño de filtros eléctricos / electrónicos.
                      td Gratis, de Linear Technology Corp.
                    tr
                      td SciLab
                      td Paquete científico para cálculos numéricos, realiza análisis en el tiempo y frecuencia (similar a MatLab).
                      td Código Abierto (#[i open source]).
                    tr
                      td SAPWIN
                      td Esquemático y Analizador de circuitos, se obtiene expresión matemática del circuito propuesto.
                      td Gratis, Universidad de Florencia, Italia.
                    tr
                      td CircuitCalculator
                      td Calcula el ancho de pistas para PCB. Encuentra los valores comerciales de resistencias y condensadores.
                      td Gratis (página Web).
    p(data-aos="fade-right") Es recomendable realizar la simulación del circuito esquemático antes de proceder a la elaboración del PCB, utilizando alguna de las herramientas listadas. 
    p.mb-4(data-aos="fade-right") A continuación, se detallan los diferentes tipos de CAD disponibles, junto con sus fabricantes y características:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] CAD de diseño de circuitos y sus fabricantes
        .tabla-a.color-acento-contenido(data-aos="fade-down")
          table
            thead
              tr
                th Fabricante o empresa
                th Nombre del CAD
                th Circuito esquemático
                th Circuito impreso
            tbody
              tr
                td Cadence
                td Orcad Capture
                td Orcad PCB
                td No sacará actualizaciones
              tr
                td National Instruments (antes de Electronic WorkBench)
                td Circuit Design, Multisim, Ultiboard
                td Simula uC, interacciona con Tarjetas de Adquisición y LabVIEW N. Inst., 3D
                td 
              tr
                td Altium
                td Designer
                td Unificó herramientas de simulación, visualización 3D y FPGA
                td No simula uC
              tr
                td LabCenter
                td Proteus Isis
                td Ares
                td Simula uC, 3D. No trabaja con FPGA
              tr
                td Cadsoft
                td Eagle
                td Schematic
                td Board
              tr
                td Sunstone
                td PCB123
                td Schematic Layout
                td No simula
              tr
                td MicroSim Corporation
                td DesignLab Microsim
                td MicrosimPCB
                td con Pspice, FPGA, PCB
              tr
                td Linear Technology Corporation
                td SwitcherCAD SwCAD
                td No realiza PCB
                td 
              tr
                td Technology Sales Inc.
                td Easy-PC Schematic
                td PCB Layout Easy-Spice, 3D
                td 
              tr
                td Bentley System
                td MicroStation
                td 
                td 
              tr
                td Mentor Graphics
                td Mentor Design
                td Mentor Board Sch, PCB y 3D
                td 
              tr
                td Zuken
                td CADSTAR Schematics
                td CADSTAR Layout
                td Sch, PCB y 3D
    .row.align-items-center.mb-5
      .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img5.png', alt='', style='width: 80px').m-auto
      .col(data-aos="fade-left")
        p.mb-0 Algunos programas permiten la creación de componentes personalizados y encapsulados (#[i footprint]), aunque este proceso requiere tiempo y dedicación. También es posible importar bibliotecas de otros CADs. A continuación, se presentan enlaces donde se pueden descargar versiones de demostración de diferentes #[i software] CAD para reconocimiento de interfaz o creación de productos iniciales:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.] Software de diseño en CAD y enlaces de descarga de demostración
        .tabla-a.color-acento-contenido(data-aos="fade-down")
          table
            thead
              tr
                th(width="20%") Fabricante o empresa
                th(width="20%") Nombre del CAD
                th Enlace de descarga para demos
            tbody
              tr
                td Cadsoft
                td Eagle
                td 
                  a(href="https://www.autodesk.com/products/eagle/free-download" target="_blank") https://www.autodesk.com/products/eagle/free-download
              tr
                td Cadence
                td Orcad
                td 
                  a(href="https://www.orcad.com/resources/orcad-downloads" target="_blank") https://www.orcad.com/resources/orcad-downloads
              tr
                td National Instruments (antes de Electronic WorkBench)
                td Multisim
                td 
                  a(href="https://www.ni.com/es-co/support/downloads/software-products/download.multisim.html" target="_blank") https://www.ni.com/es-co/support/downloads/software-products/download.multisim.html
              tr
                td ExpressPCB
                td ExpressPCB
                td 
                  a(href="https://www.expresspcb.com/" target="_blank") https://www.expresspcb.com/
              tr
                td Altium
                td Designer
                td 
                  a(href="https://www.altium.com/es/products/downloads" target="_blank") https://www.altium.com/es/products/downloads
              tr
                td Design Soft
                td TINA Design suite
                td 
                  a(href="https://www.tina.com/" target="_blank") https://www.tina.com/
              tr
                td LabCenter
                td Proteus
                td 
                  a(href="https://www.labcenter.com/downloads/#professional" target="_blank") https://www.labcenter.com/downloads/#professional
              tr
                td Sunstone
                td PCB123
                td 
                  a(href="https://www.sunstone.com/pcb123-lp" target="_blank") https://www.sunstone.com/pcb123-lp
              tr
                td Linear Technology Corporation
                td LTspice
                td 
                  a(href="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html" target="_blank") https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html
              tr
                td Technology Sales Inc.
                td Easy-PC
                td 
                  a(href="https://www.numberone.com/download" target="_blank") https://www.numberone.com/download
              tr
                td Cadint
                td CADint PCB
                td 
                  a(href="http://www.cadint.se/productcad.asp" target="_blank") http://www.cadint.se/productcad.asp
              tr
                td Mentor Graphics
                td PADS Professional
                td 
                  a(href="https://eda.sw.siemens.com/en-US/pcb/pads/professional/" target="_blank") https://eda.sw.siemens.com/en-US/pcb/pads/professional/
              tr
                td Zuken
                td CADSTAR
                td 
                  a(href="https://www.ecadstar.com/en/resource/free-pcb-design-software-cadstar-express/" target="_blank") https://www.ecadstar.com/en/resource/free-pcb-design-software-cadstar-express/
              tr
                td Holophase
                td CIRCAD
                td 
                  a(href="http://www.holophase.com/downloads.htm" target="_blank") http://www.holophase.com/downloads.htm
      
</template>

<script>
export default {
  name: 'Tema1',
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
