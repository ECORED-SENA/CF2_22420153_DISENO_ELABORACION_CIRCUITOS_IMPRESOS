<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Descarga e instalación de Autodesk Eagle
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .bloque-texto-a__texto.p-4
            p Existen numerosas herramientas para el diseño CAD de circuitos electrónicos, cada una con características particulares, fortalezas y enfoques asociados al nivel tecnológico bajo el cual fue desarrollada. Se presenta un ejemplo con Eagle CAD, ilustrando el proceso de descarga, instalación y descripción de sus herramientas clave como referencia para el estudio de otros #[i software].
        .col-lg-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/img1.png', alt='', style='width: 200px').m-auto
    p.mb-5(data-aos="fade-down") A continuación, se presenta una guía paso a paso para la descarga, instalación y configuración inicial del #[i software] Eagle:
    .row.bg-c7
      .col-12
        .p-5
          .tarjeta.tarjeta--gris.p-4(data-aos="fade-left")
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-center(titulo="Paso 1")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Descargar el #[i software]]
                  p.mb-0 Visitar el sitio web del fabricante y seleccionar el sistema operativo correspondiente. Luego, hacer clic en el enlace de descarga: 
                    |
                    a(href="https://www.autodesk.com/products/eagle/free-download" target="_blank") https://www.autodesk.com/products/eagle/free-download
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 2")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Ejecutar el archivo descargado]
                  p.mb-0 Una vez descargado el archivo, se ejecuta. El nombre del archivo ejecutable varía según la versión y el sistema operativo elegido.
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 3")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Aceptar términos]
                  p.mb-0 Iniciar el asistente de instalación de Eagle, aceptar los términos seleccionando “#[i I accept the agreement]” y pulsar “#[i Next]”. 
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 4")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Cambiar el directorio de instalación]
                  p.mb-0 Si se desea cambiar el directorio, presionar “#[i Browse]” y luego “#[i Next]”.
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 5")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Crear acceso directo en el escritorio]
                  p.mb-0 Seleccionar la opción “#[i Create a desktop shortcut]”, hacer clic en “#[i Next]” y finalmente presionar “#[i Install]”.
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img7.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 6")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Finalizar la instalación]
                  p.mb-0 Al finalizar, hacer clic en “#[i Finish]”.
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img8.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 7")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Iniciar sesión en el #[i software]]
                  p.mb-0 Al iniciar el #[i software], se solicitará iniciar sesión. Si no se tiene una cuenta, crear y verificar una siguiendo las instrucciones enviadas al correo registrado.
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img9.png', alt='', style='width: 600px').m-auto
              .row.justify-content-center.align-items-center(titulo="Paso 8")
                .col-11.col-lg-5.mb-4.mb-lg-0
                  p #[b Crear un nuevo proyecto]
                  p.mb-0 Acceder a #[i File] / #[i New] / #[i Project] y asignarle un nombre al nuevo proyecto.
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img10.png', alt='', style='width: 600px').m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Herramientas básicas del #[i software] en la ventana #[i Schematic]
    .row.align-items-center.mb-3
      .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img11.png', alt='', style='width: 80px').m-auto
      .col(data-aos="fade-left")
        p.mb-0(data-aos="fade-right") Eagle se compone de dos ventanas principales: #[i Schematic] y #[i Board]. En la ventana #[i Schematic] se desarrolla el circuito a partir de un diseño esquemático utilizando la simbología de los componentes. En la ventana #[i Board] se disponen los componentes en su forma real y se conectan mediante pistas, mostrando el diseño final de la PCB.
    .row.bg-c8
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Para crear un diagrama esquemático y asociarlo a un proyecto, primero se debe abrir el proyecto haciendo clic derecho sobre él y seleccionando “#[i Open Project]”.
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 1.] Abrir proyecto en Autodesk EAGLE
              figure
                img(src='@/assets/curso/tema2/img13.png', alt='La imagen muestra el proceso para abrir un proyecto existente en Autodesk EAGLE. Aquí, se selecciona la opción Open Project en el menú contextual, lo que permite al usuario cargar un proyecto específico y acceder a sus archivos de diseño.', style='width: 700px').m-auto
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img14.png', alt='', style='width: 500px').m-auto
          .row.align-items-center.mb-4
            .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 500px').m-auto
            .col-lg-7(data-aos="fade-left")
              p Luego, se accede a #[i File] / #[i New] / #[i Schematic].
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 2.] Interfaz de diseño en Autodesk EAGLE
              figure
                img(src='@/assets/curso/tema2/img15.png', alt='Se presenta la interfaz de trabajo de EAGLE en la vista de esquemático. En ella, se observan las herramientas laterales y superiores, que son esenciales para diseñar el circuito. También se destaca el área de trabajo donde se disponen los componentes y conexiones del esquema.', style='width: 700px').m-auto
          p.mb-4(data-aos="fade-down") En la ventana de #[i Schematic] se encuentran las herramientas principales en el costado lateral, herramientas superiores y el área de trabajo donde se desarrolla el diagrama.
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 3.] Creación de un esquema en un proyecto de Autodesk EAGLE
                figure
                  img(src='@/assets/curso/tema2/img16.png', alt='La imagen presenta a el menú de opciones de EAGLE, donde el usuario puede seleccionar Schematic para comenzar a crear o editar un diagrama esquemático dentro del proyecto actual. Esta selección permite iniciar el diseño del circuito eléctrico en un nuevo archivo de esquemático.', style='width: 700px').m-auto
              .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/tema2/img17.png', alt='', style='width: 300px').m-auto
    .row.bg-c9
      .col-12
        .px-5.pb-5
          Separador
          #t_2_2
          .titulo-segundo.color-acento-contenido
            h2 2.2 Herramientas del costado lateral
          .row.justify-content-center
            .col-lg-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-left")
                .row(titulo="<i>Grid</i> (Rejilla)")
                  .col-12
                    p Configura las divisiones en el área de trabajo (por defecto, 25.4 mm o 0.1 pulgadas) para ajustar la resolución al mover componentes. Permite mostrar u ocultar divisiones y elegir entre líneas o puntos.
                    figure
                      img(src='@/assets/curso/tema2/img19.png', alt='Imagen presenta dos opciones de visualización de la cuadrícula en un software de diseño de PCB: líneas y puntos. A la izquierda, la cuadrícula se presenta en líneas, mientras que a la derecha se ve en puntos, lo que permite ajustar la precisión en el posicionamiento de los elementos.', style='width: 600px').m-auto
                .row(titulo="<i>Layer</i>")
                  .col-12
                    p Organiza los elementos en capas según sus características (pistas, símbolos, pines, etc.). Se pueden activar o desactivar capas, y cada una se identifica con colores específicos (ejemplo: #[i Symbols] en café, #[i Names] y #[i values] en gris, #[i Pins] en verde).
                    figure
                      img(src='@/assets/curso/tema2/img20.png', alt='Imagen presenta el menú de selección de capas en el software de diseño, con varias opciones de capas codificadas por colores. Este menú permite al usuario elegir la capa de trabajo, como pines, símbolos y valores, facilitando la organización del diseño.', style='width: 500px').m-auto
                .row(titulo="<i>Info</i>")
                  .col-12
                    p Muestra información de un componente, como posición, nombre, encapsulado y librería de origen. Se selecciona la herramienta y luego el componente para ver los detalles.
                    figure
                      img(src='@/assets/curso/tema2/img21.png', alt='Imagen ilustra la ventana de propiedades para un bus en un diseño esquemático. Se observan parámetros configurables como longitud, ángulo y estilo, permitiendo personalizar el aspecto y el comportamiento del bus en el circuito.', style='width: 500px').m-auto
                .row(titulo="<i>Group</i>")
                  .col-12
                    p Agrupa varios componentes para cambiar propiedades, mover o eliminar varios elementos a la vez. Se selecciona la herramienta y se arrastra el cursor con clic izquierdo para agrupar.
                    figure
                      img(src='@/assets/curso/tema2/img22.png', alt='Imagen muestra un conjunto de componentes electrónicos en un diseño esquemático, incluyendo diodos y un regulador de voltaje. Esta vista general permite al usuario visualizar cómo están organizados los elementos en el esquema.', style='width: 500px').m-auto
                .row(titulo="<i>Move</i>")
                  .col-12
                    p Mueve componentes dentro del área de trabajo. Tras seleccionar la herramienta, se hace clic en el componente deseado y se arrastra a la posición indicada. Para mover un grupo, primero se agrupan los elementos, luego se elige.
                    figure
                      img(src='@/assets/curso/tema2/img23.png', alt='Imagen representa el menú contextual para mover un grupo de componentes. La opción resaltada "Move: Group" facilita el desplazamiento conjunto de múltiples elementos seleccionados en el diseño.', style='width: 500px').m-auto
                .row(titulo="<i>Copy</i>")
                  .col-12
                    p Duplica un componente en el área de trabajo. Al seleccionarla, se hace clic en el componente, generando una copia flotante que se puede ubicar en la posición deseada.
                    figure
                      img(src='@/assets/curso/tema2/img24.png', alt='Imagen muestra una vista de un circuito en el software, con componentes como transistores y conexiones de red. Los elementos están etiquetados para ayudar a identificar las partes del circuito.', style='width: 300px').m-auto
                .row(titulo="<i>Delete</i>")
                  .col-12
                    p Elimina componentes del área de trabajo haciendo clic sobre ellos.
                    figure
                      img(src='@/assets/curso/tema2/img25.png', alt='', style='width: 100px').m-auto
                .row(titulo="<i>Rotate</i>")
                  .col-12
                    p Rota los componentes para facilitar las conexiones.
                    figure
                      img(src='@/assets/curso/tema2/img26.png', alt='', style='width: 100px').m-auto
                .row(titulo="<i>Show objects</i>")
                  .col-12
                    p Verifica conexiones resaltando en verde las líneas y en rojo los terminales conectados.
                .row(titulo="Nombrar componentes")
                  .col-12
                    p Permite renombrar los componentes según los requisitos del proyecto.
                .row(titulo="<i>Add</i>")
                  .col-12
                    p Abre un cuadro de diálogo de búsqueda para añadir un componente desde la biblioteca.
                    figure
                      img(src='@/assets/curso/tema2/img27.png', alt='Imagen presenta la ventana de selección de componentes en el software, donde se pueden buscar y añadir elementos específicos al diseño. En este caso, el componente seleccionado es una resistencia.', style='width: 600px').m-auto
                .row(titulo="<i>Net</i>")
                  .col-12
                    p Realiza conexiones entre terminales de componentes. Se hace clic en un terminal y luego en el terminal del otro componente para establecer el enlace.
                    figure
                      img(src='@/assets/curso/tema2/img28.png', alt='Imagen muestra un diseño esquemático de un circuito con diodos, un capacitor y un regulador de voltaje. Esta configuración ayuda a visualizar el flujo de corriente y la conexión de componentes en un sistema básico.', style='width: 400px').m-auto

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
