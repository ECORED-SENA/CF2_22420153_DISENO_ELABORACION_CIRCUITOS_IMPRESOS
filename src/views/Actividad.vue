<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar las herramientas CAD para el diseño de circuitos impresos, comprender las fases de creación de un PCB (definición de esquema y diseño físico de conexiones), y explorar el uso de <i>software</i> CAD.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué significa la sigla CAD en el contexto de diseño de circuitos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño Asistido por Computadora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseño Asistido por Dibujo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Circuitos Asistidos por Diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Computación y Diseño Asistido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito principal de las herramientas CAD en el diseño de PCB?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar el ensamblaje de circuitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir esquemas y conexiones de circuitos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Optimizar el almacenamiento de componentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar inventarios de componentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿En qué fase se seleccionan los componentes y se configura el diagrama esquemático?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la fase de definición del esquema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En la fase de diseño físico.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'En la etapa de conexión.', esCorrecta: false },
            {
              id: 'd',
              texto: 'En la fase de diseño en PCB.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué herramienta permite configurar las divisiones en el área de trabajo de Eagle?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<i>Grid</i> (Rejilla).', esCorrecta: true },
            { id: 'b', texto: '<i>Layer.</i>', esCorrecta: false },
            { id: 'c', texto: '<i>Info.</i>', esCorrecta: false },
            { id: 'd', texto: '<i>Group.</i>', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué software permite simulaciones de circuitos y el diseño en PCB?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'SAPWIN.', esCorrecta: false },
            { id: 'b', texto: 'CircuitCalculator.', esCorrecta: false },
            { id: 'c', texto: 'Eagle.', esCorrecta: true },
            { id: 'd', texto: 'MultisimPCB.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta en Eagle permite duplicar un componente en el área de trabajo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<i>Copy.</i>', esCorrecta: true },
            { id: 'b', texto: '<i>Move.</i>', esCorrecta: false },
            { id: 'c', texto: '<i>Layer.</i>', esCorrecta: false },
            { id: 'd', texto: '<i>Info.</i>', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función de la herramienta "<i>Layer</i>" en el área de trabajo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar elementos en capas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Duplicar componentes.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Cambiar propiedades de los elementos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Mover componentes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes programas permite crear componentes personalizados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'SAPWIN.', esCorrecta: false },
            { id: 'b', texto: 'CircuitCalculator.', esCorrecta: false },
            { id: 'c', texto: 'Orcad.', esCorrecta: true },
            { id: 'd', texto: 'Circuit Design.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El diseño de PCB se divide en dos fases: definición de esquema y diseño físico.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Los componentes en el diseño esquemático se conectan mediante "pistas" en la PCB.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
