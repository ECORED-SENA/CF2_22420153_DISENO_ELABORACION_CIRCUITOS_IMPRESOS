export default {
  global: {
    componenteFormativo: 'Diseño de circuito esquemático mediante CAD',
    descripcionCurso:
      'Las herramientas CAD apoyan el diseño de circuitos impresos (PCB) en etapas esquemáticas y físicas, permitiendo definir componentes y conexiones mediante simulación y análisis. Estas herramientas, cada vez más accesibles por sus interfaces gráficas, simplifican el diseño para usuarios con conocimientos básicos. Diversos <i>software</i> como Eagle, Orcad y Multisim ofrecen versiones gratuitas y opciones para agregar componentes personalizados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño Asistido por Computador (CAD) para circuitos impresos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Descarga e instalación de Autodesk Eagle',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Herramientas básicas del <i>software</i> en la ventana Schematic',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas del costado lateral',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diseño Asistido por Computador (CAD) para circuitos impresos.',
      referencia:
        'Profe Juan Hernani. (2014). Taller #1. Iniciando AutoCad 2D -Entorno y creación del espacio de trabajo. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=D30g0iVceik&list=PLTllyBHG1d9WNA-n_Ju1BHxYTFYqh56zT',
    },
    {
      tema: 'Descarga e instalación de Autodesk Eagle.',
      referencia:
        'Departamento de Electrónica e Informática.(2020). Instalación de Eagle.  [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tYlTN01DpdA',
    },
    {
      tema: 'Herramientas básicas del <i>software</i> en la ventana Schematic.',
      referencia:
        'i2C Tech. (s.f.). ¡¡REVIEW completo del BORNEO SCHEMATICS‼ ¿El mejor programa de esquemáticos?. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fI1BB_BVVBE',
    },
  ],
  glosario: [
    {
      termino: 'CAD',
      significado:
        ' Diseño Asistido por Computadora, utilizado para crear y optimizar diseños de circuitos electrónicos.',
    },
    {
      termino: 'PCB',
      significado:
        ' Circuito Impreso, una placa que conecta componentes electrónicos mediante pistas de cobre.',
    },
    {
      termino: 'Esquemático',
      significado:
        'diagrama que representa las conexiones eléctricas entre los componentes de un circuito.',
    },
    {
      termino: '<i>Board</i>',
      significado:
        'ventana en el software CAD donde se dispone físicamente el circuito en la placa PCB.',
    },
    {
      termino: 'Componente',
      significado:
        'elemento físico del circuito, como resistencias, capacitores o transistores.',
    },
    {
      termino: 'Simulación',
      significado:
        'proceso de probar el comportamiento de un circuito sin construirlo físicamente.',
    },
    {
      termino: 'Editor de esquemas',
      significado:
        'herramienta en software CAD para dibujar el diagrama esquemático de un circuito.',
    },
    {
      termino: '<i>Layout</i>',
      significado: 'disposición física de los componentes en la placa PCB.',
    },
    {
      termino: 'Pistas',
      significado:
        'conexiones de cobre en una PCB que unen los componentes electrónicos.',
    },
    {
      termino: 'Encapsulado (<i>footprint</i>)',
      significado:
        'representación gráfica y dimensional de un componente para ubicarlo en la placa PCB.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mitzner, K., Doe, B., Akulin, A., Suponin, A., & Müller, D. (2019). Complete PCB Design Using OrCAD Capture and PCB Editor (2nd ed.). Academic Press. ',
      link:
        'https://books.google.com/books/about/Complete_PCB_Design_Using_OrCAD_Capture.html?id=Uj6eDwAAQBAJ',
    },
    {
      referencia:
        'San Francisco Circuits. (2017). The Ultimate PCB Design Software Comparison Guide. ',
      link:
        'https://www.sfcircuits.com/pcb-school/pcb-design-software-comparison-guide',
    },
    {
      referencia:
        'Teel, J. (2016, September 7). PCB Design Software: Which One is Best?. Predictable Designs. ',
      link:
        'https://predictabledesigns.com/pcb-design-software-which-one-is-best/',
    },
    {
      referencia:
        'National Instruments. (2019, March 11). Importing ECAD Component Libraries into Multisim/Ultiboard. NI Community. ',
      link:
        'https://forums.ni.com/t5/Multisim-and-Ultiboard/Importing-ECAD-component-libraries-into-Multisim-Ultiboard/td-p/3902141',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco Arnaldo Vargas Bermúdez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
