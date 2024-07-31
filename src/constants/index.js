// TODO:
// - TEXTOS HEADER / FORM / FOOTER
export const bdc = {
    logo: './images/logo-bdc.svg',
    alt: 'Banco de Comercio',
    urlMainWeb: 'https://bancodecomercio.com.ar/',
};

export const navbar = {
    integracion: {
        title: 'Integración',
        url: 'https://docs.bdcconecta.com/',
    },
    soluciones: {
        title: 'Soluciones',
        url: '#solutions',
    },
    contacto: {
        title: 'Contacto',
        url: '#contact',
    },
    ctaMobile: {
        title: 'Contactá un asesor',
        url: '#',
    },
};

// HERO BANNER
export const heroBanner = {
    title: 'Eficiencia en tus cobros y pagos con <span class="bg-gradient-to-br from-bdc-green-400 via-bdc-green  to-bdc-green-600 bg-clip-text text-transparent">BDC Conecta</span>',
    // contentTEST: "Transforma tu negocio con nuestras soluciones integradas. Mejora la eficiencia, seguridad y experiencia del cliente con BDC Conecta.",
    // contentTEST2: "Transforma tu negocio con BDC Conecta. Integra tu sistema de gestión y optimiza tus operaciones financieras con nuestras soluciones tecnológicas de APIs. Acelera tus procesos, reduce costos y maximiza la eficiencia.",
    content:
        'Con nuestras APIs  optimizás tiempos, reducís costos y maximizás recursos, llevando tu empresa a un nuevo modelo de administración y agilidad en tesorería.',
    button: {
        text: 'Contactá un asesor',
        url: '#contact',
    },
    imageUrl: {
        img: '/images/heroBanner.jpg',
        alt: '',
    },
    imageFooter:
        'Integrá tu sistema de gestión y dale un giro disruptivo a la tesorería de tu negocio con nuestras soluciones tecnológicas de BDC Conecta. Esto te permite minimizar errores humanos y enfocarte en la mejor experiencia de tus usuarios. ',
};

// OPPORTUNITIES
export const opportunities = {
    title: 'Oportunidades para <span class="bg-gradient-to-br from-bdc-green-400 via-bdc-green  to-bdc-green-600 bg-clip-text text-transparent">tu negocio</span>',
    subtitle: '¿En qué facilita el desarrollo de mi empresa integrar BDC Conecta?',
    items: [
        {
            id: 1,
            icon: '',
            title: 'Facilidades Financieras',
            content: 'Acelerá tu proceso de recaudación y facilitá tu conciliación bancaria',
        },
        {
            id: 2,
            icon: '',
            title: 'Eficiencia y facilidad de uso',
            content:
                'Integrá sin dificulta con una experiencia fluida de validaciones rápidas e intuitivas en una sola solución',
        },
        {
            id: 3,
            icon: '',
            title: 'Cumplimiento regulatorio',
            content: 'Cumplimiento normativo y garantizado en todas las operaciones',
        },
        {
            id: 4,
            icon: '',
            title: 'Control total',
            content: 'Capturá con precisión todos los datos y validá la información con distintas fuentes al instante',
        },
        {
            id: 5,
            icon: '',
            title: 'Simplificación',
            content: 'Unificamos distintas fuentes de información para validar datos y simplificarte tus procesos',
        },
        {
            id: 6,
            icon: '',
            title: 'Prevención de Fraude',
            content:
                'Brindamos soluciones sólidas y comprobadas para prevenir fraudes y estadas para tu negocio y tus cliientes',
        },
    ],
    button: {
        text: 'Agilizá tus procesos',
        url: '#contact',
    },
};

// INTEGRATION
export const integration = {
    title: '¿Cómo es el proceso para <span class="bg-gradient-to-br from-bdc-green-400 via-bdc-green  to-bdc-green-600 bg-clip-text text-transparent leading-none">integrar BDC Conecta?</span>',
    content:
        'Innovamos en el mercado de APIs hace más de 5 años, con la atención personalizada que nos caracteriza en cada etapa del proceso',
    items: [
        {
            id: 1,
            icon: '',
            content: 'Nos reunimos para comprender las particularidades de tu negocio y enfocar las soluciones',
        },
        {
            id: 2,
            icon: '',
            content: 'Un asesor especializado crea una propuesta específica de todo nuestro universo de APIs.',
        },
        {
            id: 3,
            icon: '',
            content: 'Te acompañamos en la integración de BDC Conecta junto a tu equipo.',
        },
        {
            id: 4,
            icon: '',
            content: 'Agilizás tus procesos de forma segura, brindando mejores experiencias a tus clientes.',
        },
    ],
};

// SOLUTIONS
export const solutions = {
    // title: 'Soluciones de BDC Conecta',
    title: '<span class="bg-gradient-to-br from-bdc-green-400 via-bdc-green  to-bdc-green-600 bg-clip-text leading-none text-transparent">Soluciones de BDC Conecta</span>',

    items: [
        {
            id: 1,
            img: '/images/cobranza-pagos.jpg',
            alt: '',
            title: 'Cobranzas y Pagos',
            content:
                'Automatizá los pagos y cobros de tus clientes y proveedores, ahorrando tiempo y costos de gestión. Con Experiencia API, simplificás tus operaciones financieras:',
            bullet: [
                {
                    1: 'Realizá y consultá transferencias a CBU, CVU y Alias de manera rápida y segura.',
                    2: 'Administrá tus proveedores de forma eficiente y sin complicaciones.',
                    3: 'Transformá la gestión de tus transacciones, mejorando la eficiencia y reduciendo errores.',
                },
            ],
        },
        {
            id: 2,
            img: '/images/billetera-virtual.jpg',
            alt: '',
            title: 'Billetera Virtual',
            content: 'Ofrecé diversas funcionalidades para optimizar la gestión de las transacciones en tu billetera:',
            bullet: [
                {
                    1: 'Altas y cambio de alias de CVU de manera sencilla.',
                    2: 'Consulta, envío y recepción de transferencias entre CVU y CBU.',
                    3: 'Recibí notificaciones instantáneas de créditos en CVU.',
                    4: 'Posibilitá la financiación directa a tus clientes.',
                },
            ],
        },
        {
            id: 3,
            img: '/images/informacion-cuenta.jpg',
            alt: '',
            title: 'Información de la cuenta',
            content: 'Simplificá la gestión de las cuentas de tus clientes con BDC Conecta:',
            bullet: [
                {
                    1: 'Consultá fácilmente los movimientos de cuentas.',
                    2: 'Obtené información mediante alias, CBU o CVU.',
                    3: 'Validá la información asociada a cada cuenta de forma precisa con nuestras diversas fuentes de información integradas.',
                    4: 'Identificá el origen de transferencias recibidas.',
                    5: 'Obtené el saldo y el detalle de cada cuenta de manera sencilla y eficiente.',
                },
            ],
        },
    ],
    button: {
        text: 'Quiero estas soluciones',
        url: '#contact',
    },
};

// BDC APPLICANTS
export const bdcApplicants = [
    {
        title: '¿Quiénes ya aplicaron BDC Conecta a su <span class="bg-gradient-to-br from-bdc-green-400 via-bdc-green  to-bdc-green-600 bg-clip-text text-transparent">modelo de negocio?</span>',
        subtitle:
            'Nuestro universo de BDC Conecta nos permite ir directo a la resolución o mejora de tus procesos específicos, como ya lo hicimos con:',
        item1: [
            {
                id: 1,
                icon: '',
                title: 'PSPC, Fintech y Seguros',
                content:
                    'Permite a los clientes desarrollar su propia billetera virtual para gestionar cobros y pagos masivos, y crear cuentas CVU a nombre de terceros. Posibilita la financiación a sus clientes, agiliza operaciones, ahorra costos operativos y tiempo, y asegura el cumplimiento con todas las normativas del BCRA.',
            },
        ],
        item2: [
            {
                id: 2,
                icon: '',
                title: 'Ecommerce y Empresas',
                content:
                    'Identifica operaciones, clientes y tickets por medio de la creación de CVU. Gracias a la unificación de plataformas en una sola solución puede prevenir fraudes y agilizar todo el proceso de cobros y pagos evitando errores manuales.',
            },
        ],
        item3: [
            {
                id: 3,
                icon: '',
                title: 'Prepagas y Obras Sociales',
                content:
                    'Efectúa pagos masivos y programados a toda su nómina y proveedores, facilitando su gestión interna y externa. Recauda de manera ágil sus cuotas mensuales e identifica de manera precisa toda la información de las cuentas de sus asociados y proveedores.',
            },
        ],
        item4: [
            {
                id: 4,
                icon: '',
                title: 'Universidades y Colegios',
                content:
                    'Realiza cobros de tarjeta crédito y débito, pago masivo a proveedores automatizando procesos y reduciendo recursos, garantizando la optimización de tesorería. Esto facilitó la operatoria manual, garantizando una mejor experiencia para todos los usuarios.',
            },
        ],
        item5: [
            {
                id: 5,
                icon: '',
                title: 'Consorcios',
                content:
                    'Diferencia todos los depósitos o transferencias por medio del CVU de cada uno de los propietarios. Efectúa pagos a proveedores de forma masiva desde su tesorería. Ahorra costos y tiempo, simplificando la administración de los consorcios que administra.',
            },
        ],
        item6: [
            {
                id: 6,
                icon: '',
                title: 'Clubes y Gimnasios',
                content:
                    'Reconoce con precisión los cobros y pagos por miembros y proveedores, automatizando procesos y proporcionando opciones de financiamiento a tus clientes.',
            },
        ],
    },
];

//FORM
export const form = {
    title: 'Envíanos tu consulta',
    buttonText: 'Enviar',
};

// FOOTER
export const socialMedia = {
    title: 'Social',
    instagram: {
        url: 'https://www.instagram.com/banco.de.comercio/',
    },

    linkedin: {
        url: 'https://www.linkedin.com/company/banco-de-comercio-sa/',
    },
};

export const footer = {
    contacto: {
        title: 'Contacto',
        phone: {
            label: 'Whatsapp ',
            info: '1131560000',
            url: 'https://api.whatsapp.com/send?phone=541131560000',
        },
        email: {
            label: 'Email',
            info: 'bdc.conecta@bancodecomercio.com.ar',
            url: 'mailto:bdc.conecta@bancodecomercio.com.ar',
        },
        address: {
            label: 'Dirección ',
            info: 'Sarmiento 356, CABA',
            url: 'https://maps.app.goo.gl/yjo4f5zQaHDPUiiK6',
        },
    },
    copyright: 'Banco de comercio © 2024 - Todos los derechos reservados.',
    signature: '',
    privacy: {
        label: 'Políticas de Privacidad',
        url: '',
    },
    termsAndConditions: {
        label: 'Términos y Condiciones',
        url: '',
    },
};
