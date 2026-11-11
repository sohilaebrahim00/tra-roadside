import type { ServiceTypeSlug } from "@/lib/types/domain";
import { BATTERY_REPLACEMENT, JUMP_START_SEMI, LOCKOUT_TRUNK, SPARE_TIRE_CHANGE, TIRE_REPLACEMENT } from "../services";
import { precio, precioConEnvio } from "../spanish";

/** Spanish copy for each service page (/es/services/<slug>), translated from services.ts. Facts and prices must match the English. */
export interface ServicioEs {
  slug: ServiceTypeSlug;
  nombre: string;
  resumen: string;
  lema: string;
  problema: string;
  mientrasEspera: string[];
  loQueNecesitamos: string[];
  preguntas: { q: string; a: string }[];
  incluye?: string;
  nota?: string;
}

export const SERVICIOS_ES: ServicioEs[] = [
  {
    slug: "jump-start",
    nombre: "Paso de corriente",
    resumen: "¿Batería muerta? Hacemos que su motor vuelva a arrancar ahí mismo.",
    lema: "Una batería muerta no tiene por qué arruinarle el día.",
    problema:
      "Las luces que se quedaron prendidas, las temperaturas extremas o una batería vieja lo pueden dejar con un carro que no prende. Un paso de corriente vuelve a arrancar la mayoría de los vehículos en minutos, desde carros y camionetas hasta tráileres de 18 ruedas.",
    mientrasEspera: [
      "Apague todos los aparatos electrónicos y accesorios para que la batería no se descargue más.",
      "Si es seguro, abra el cofre antes de que llegue el técnico.",
      "Si está oscuro, quédese en un lugar bien iluminado y visible.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Que nos confirme que el problema parece ser la batería",
    ],
    preguntas: [
      {
        q: "¿Y si después la batería no mantiene la carga?",
        a: "El técnico le puede decir si hay que cambiar la batería. Avísele al despacho si quiere que lo hablen en el lugar.",
      },
      {
        q: "¿Sirve para vehículos híbridos o eléctricos?",
        a: "Escriba el tipo de vehículo y cualquier detalle en el campo de notas para que mandemos el equipo correcto.",
      },
      {
        q: "¿Pueden pasarle corriente a un tráiler de 18 ruedas?",
        a: `Sí. Un paso de corriente de servicio pesado para un tráiler, un tráiler de 18 ruedas u otro camión grande cuesta ${precioConEnvio(JUMP_START_SEMI)}. Al pedir el servicio, elija Semi / 18-Wheeler como tipo de vehículo, y agregue el número de unidad y dónde está estacionado exactamente: el patio, la parada de camiones o el marcador de milla.`,
      },
    ],
    incluye: "El paso de corriente, con la mano de obra incluida.",
  },
  {
    slug: "battery-replacement",
    nombre: "Cambio de batería",
    resumen: "Cambio de batería donde esté: una batería nueva, instalada, para vehículos y baterías que califican.",
    lema: "Una batería nueva, instalada ahí mismo donde está.",
    problema:
      "Una batería que no mantiene la carga, o que ya falló con un paso de corriente, por lo general hay que cambiarla en vez de volver a pasarle corriente. Le llevamos una batería nueva y se la instalamos ahí mismo.",
    mientrasEspera: [
      "Apague todos los aparatos electrónicos y accesorios para que la batería no se descargue más.",
      "Si es seguro, abra el cofre antes de que llegue el técnico.",
      "Tenga a la mano el año, la marca y el modelo de su vehículo: la batería que le queda cambia según el vehículo.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Su VIN, si lo puede ver: con él confirmamos la batería exacta que le queda",
    ],
    preguntas: [
      {
        q: "¿La batería le queda a mi vehículo, y cuánto va a costar?",
        a: `El precio de la batería cambia según el vehículo y el tipo de batería. El cambio de batería cuesta ${precio(BATTERY_REPLACEMENT)} para vehículos y baterías que califican, e incluye la batería, el cargo de casco (core charge) y la instalación. Denos el año, la marca y el modelo, y el VIN si lo puede ver: el despacho confirma que la batería es compatible y le dice el costo total antes de mandar al técnico.`,
      },
      {
        q: "¿Qué cubre la garantía?",
        a: "El cambio de batería incluye 1 año de garantía. Guarde su factura para usar la garantía.",
      },
      {
        q: "¿Y si mi carro solo necesita un paso de corriente, no una batería nueva?",
        a: "Entonces elija Paso de corriente (Jump Start). El técnico le puede decir en el lugar si al final hace falta cambiar la batería.",
      },
    ],
    incluye: "La batería nueva, el cargo de casco y la instalación, para vehículos y baterías que califican.",
    nota: "El precio de la batería cambia según el vehículo y el tipo de batería. Confirme la compatibilidad y el costo total antes de que mandemos al técnico.",
  },
  {
    slug: "lockout",
    nombre: "Abrir su carro",
    resumen: "¿Dejó las llaves adentro del carro? Le abrimos sin dañarlo.",
    lema: "Se quedó afuera, pero no varado.",
    problema:
      "Las llaves adentro del carro, una puerta trabada o un control remoto sin pila lo pueden dejar atorado. Nuestros técnicos usan métodos para abrir sin dañar siempre que se puede.",
    mientrasEspera: [
      "Revise todas las puertas y la cajuela, por si alguna quedó sin seguro.",
      "Tenga a la mano una identificación para confirmar que el vehículo es suyo.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Si las llaves están adentro del carro o en la cajuela",
      "Que pueda comprobar en el lugar que el vehículo es suyo",
    ],
    preguntas: [
      {
        q: "¿Qué necesitan de mí para abrir mi carro?",
        a: "La ubicación exacta del vehículo, y una identificación u otra forma de comprobar que el vehículo es suyo. Por la seguridad de todos, el técnico confirma quién es el dueño antes de abrir cualquier cosa.",
      },
      {
        q: "¿Por qué cuesta más si las llaves están en la cajuela?",
        a: `Abrir la cajuela es un trabajo distinto a abrir una puerta. Toma más tiempo y lleva otras herramientas, por eso tiene su propio precio: ${precioConEnvio(LOCKOUT_TRUNK)}.`,
      },
    ],
    incluye: "Abrir el vehículo. Las llaves en la cajuela son un trabajo aparte.",
  },
  {
    slug: "tire-repair-plug-patch",
    nombre: "Reparar la llanta: tapón y parche",
    resumen: "Reparamos la ponchadura en el camino con un tapón o un parche, cuando el daño lo permite.",
    lema: "Ponchadura chica, reparada en el camino.",
    problema:
      "Un clavo o una ponchadura chica no siempre quiere decir que tenga que cambiar la llanta. Cuando el daño lo permite, un tapón o un parche lo regresa al camino sin usar su llanta de refacción.",
    mientrasEspera: [
      "No siga manejando con una llanta que se ve baja o ponchada.",
      "Deje prendidas las luces intermitentes mientras espera.",
      "Fíjese en qué parte de la llanta está el daño, si lo puede ver.",
    ],
    loQueNecesitamos: ["Su ubicación exacta", "Año, marca y modelo del vehículo"],
    preguntas: [
      {
        q: "¿Se puede reparar cualquier ponchadura con tapón o parche?",
        a: "No. Solo se puede reparar una ponchadura en la banda de rodamiento. Un daño en el costado de la llanta o cerca de él, o un hoyo de más de cierto tamaño, no se puede reparar de forma segura, y hay que cambiar la llanta. El técnico la revisa antes de empezar y le dice cuál es su caso.",
      },
    ],
    incluye: "La reparación con tapón o parche, cuando la ponchadura está en la banda de rodamiento.",
  },
  {
    slug: "flat-tire-change",
    nombre: "Cambio de llanta ponchada",
    resumen: "Cambio rápido y seguro a la llanta de refacción que trae en su vehículo.",
    lema: "Llanta ponchada, y de vuelta al camino.",
    problema:
      "Una llanta reventada o ponchada es uno de los problemas más comunes en el camino. Si trae una llanta de refacción en buen estado, por lo general el técnico lo pone en marcha otra vez rápido.",
    mientrasEspera: [
      "Oríllese lo más lejos posible de los carriles con tráfico.",
      "Prenda las luces intermitentes y, si tiene, ponga triángulos reflectantes.",
      "Si lo puede hacer con seguridad, busque su llanta de refacción y el gato.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Si trae llanta de refacción en el vehículo",
    ],
    preguntas: [
      {
        q: "¿Y si no tengo llanta de refacción?",
        a: `El cambio de llanta ponchada pone la llanta de refacción que usted ya trae. Si no tiene una en buen estado, elija Llanta nueva instalada (Tire Replacement): le llevamos una llanta y se la instalamos ahí mismo, ${precioConEnvio(TIRE_REPLACEMENT)}. La disponibilidad de llantas varía, así que el despacho confirma que hay una llanta antes de mandar al técnico.`,
      },
      {
        q: "¿Pueden reparar la llanta ponchada en vez de cambiarla?",
        a: "Muchas veces, sí. Elija Reparar la llanta (Tire Repair) y el técnico le dirá en el lugar qué se puede hacer.",
      },
    ],
    incluye: "Poner la llanta de refacción que usted ya trae.",
  },
  {
    slug: "tire-replacement",
    nombre: "Llanta nueva instalada",
    resumen: "Una llanta que TRA le lleva y le instala donde esté. La disponibilidad de llantas varía.",
    lema: "Una llanta, instalada donde está estacionado.",
    problema:
      "Cuando una llanta tiene un daño que no se puede reparar de forma segura, como una rajada en el costado, un reventón o una ponchadura demasiado grande para un tapón, hay que cambiarla en vez de parcharla. Nosotros llevamos la llanta y la instalamos ahí mismo, así que no necesita traer una llanta de refacción en buen estado.",
    mientrasEspera: [
      "Oríllese lo más lejos posible de los carriles con tráfico y prenda las luces intermitentes.",
      "No siga manejando con la llanta ponchada: se daña el rin, además de la llanta.",
      "Si lo puede hacer con seguridad, lea la medida en el costado de la llanta o en la etiqueta del marco de la puerta del conductor.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "La medida de la llanta, si la puede leer en el costado",
    ],
    preguntas: [
      {
        q: "¿Cómo se decide el precio?",
        a: `Una llanta nueva instalada cuesta ${precioConEnvio(TIRE_REPLACEMENT)}, con la llanta y la instalación incluidas. La disponibilidad de llantas depende de la medida, así que el despacho le confirma que hay una llanta, y su total, antes de mandar al técnico.`,
      },
      {
        q: "¿Y si ya traigo una llanta de refacción en el carro?",
        a: `Entonces el Cambio de llanta ponchada (Flat Tire Change) por lo general sale más barato, ${precioConEnvio(SPARE_TIRE_CHANGE)}: le ponemos la llanta de refacción que ya trae.`,
      },
    ],
    incluye: "La llanta, que TRA le lleva, y la instalación.",
    nota: "La disponibilidad de llantas varía. El despacho le confirma que hay una llanta, y su total, antes de mandar al técnico.",
  },
  {
    slug: "stuck-screw-in-tire",
    nombre: "Tornillo atorado en la llanta",
    resumen: "Sacamos el tornillo o clavo enterrado en su llanta y dejamos la llanta segura.",
    lema: "¿Algo enterrado en la llanta? Se lo sacamos.",
    problema:
      "Un tornillo o clavo que levantó en el camino se puede quedar en la llanta por días antes de que empiece a perder aire. Si lo saca sin sellar el hoyo, una fuga lenta se vuelve una llanta ponchada, por eso se saca y se repara al mismo tiempo.",
    mientrasEspera: [
      "Deje el tornillo donde está: si lo saca usted, por lo general la llanta se desinfla de inmediato.",
      "Si tiene medidor, revise la presión de la llanta, y evite manejar distancias largas.",
      "Si se paró a la orilla del camino, deje prendidas las luces intermitentes.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Cuál llanta es, si lo sabe",
    ],
    preguntas: [
      {
        q: "¿Debo sacar el tornillo yo mismo?",
        a: "No. Mientras está enterrado en la banda de rodamiento, tapa en parte el hoyo. Si lo saca sin tener listo un tapón o un parche, por lo general una fuga lenta se vuelve una llanta ponchada.",
      },
      {
        q: "¿Siempre se puede reparar la llanta después?",
        a: "Por lo general sí, si el tornillo está en la banda de rodamiento. Un daño en el costado o cerca de él no se puede reparar de forma segura. El técnico le dirá en el lugar si hace falta cambiar la llanta.",
      },
    ],
    incluye: "Sacar el tornillo o clavo y dejar la llanta segura.",
  },
  {
    slug: "rim-lock-removal",
    nombre: "Quitar el birlo de seguridad",
    resumen: "Quitamos el birlo de seguridad trabado o sin llave para que se pueda quitar la rueda.",
    lema: "Un birlo de seguridad no debería dejarlo varado.",
    problema:
      "Los birlos de seguridad necesitan su llave, y muchas veces esa llave se perdió, se rompió o está barrida justo cuando la necesita. Sin ella no se puede quitar la rueda, y eso impide cambiar la llanta en el camino.",
    mientrasEspera: [
      "Busque la llave del birlo de seguridad en la guantera, en el fondo de la cajuela y en el compartimento de la llanta de refacción.",
      "Manténgase fuera del camino mientras espera.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Si tiene o no la llave del birlo de seguridad",
    ],
    preguntas: [
      {
        q: "¿Quitar el birlo de seguridad daña mi rin?",
        a: "El birlo de seguridad se pierde en el proceso: eso no se puede evitar. El técnico trabaja para proteger el rin y los pernos de alrededor.",
      },
      {
        q: "¿Necesito esto además del cambio de llanta?",
        a: "Si le falta la llave del birlo de seguridad, sí: hay que quitar el birlo antes de poder quitar la rueda. Menciónelo en las notas cuando pida un servicio de llantas.",
      },
    ],
    incluye: "Quitar el birlo de seguridad para que se pueda quitar la rueda.",
  },
  {
    slug: "stripped-lug-nut-removal",
    nombre: "Sacar un birlo barrido",
    resumen: "Sacamos el birlo barrido, redondeado o trabado para que se pueda quitar la rueda.",
    lema: "Un birlo dañado no debería detener un cambio de llanta.",
    problema:
      "Si la llave de cruz se sigue resbalando, por lo general el birlo está barrido, muchas veces por una pistola de impacto en un trabajo de llantas anterior, o por el óxido. Forzarlo lo empeora y puede dañar el perno o el rin. Un técnico lleva las herramientas para sacarlo donde está el carro, y así se puede hacer el trabajo de la llanta.",
    mientrasEspera: [
      "Deje de girar la llave: cada vez que se resbala, el birlo se barre un poco más.",
      "Vea cuántos birlos de esa rueda se ven dañados, para decirle al despacho.",
      "Manténgase fuera del camino mientras espera.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Cuántos birlos están dañados, y en cuál rueda",
    ],
    preguntas: [
      {
        q: "¿Puedo seguir intentando con una llave más grande?",
        a: "Mejor no. Una llave que se resbala barre más el birlo, y mucha fuerza puede romper el perno, y un trabajo pequeño se vuelve una reparación.",
      },
      {
        q: "¿Es lo mismo que perder la llave del birlo de seguridad?",
        a: "No. El birlo de seguridad es un birlo especial que necesita su llave, y quitarlo es un servicio aparte. Un birlo barrido es un birlo normal que se dañó. Si no sabe cuál tiene, descríbalo cuando pida ayuda.",
      },
      {
        q: "¿Necesito esto además del cambio de llanta?",
        a: "Si un birlo dañado no deja quitar la rueda, sí. Menciónelo cuando pida un servicio de llantas para que el técnico llegue preparado.",
      },
    ],
    incluye: "Sacar el birlo dañado para que se pueda quitar la rueda.",
    nota: "Si hay varios birlos dañados, el despacho le confirma el precio antes de mandar al técnico.",
  },
  {
    slug: "valve-stem-replacement",
    nombre: "Cambio de válvula de llanta",
    resumen: "Cambiamos la válvula de la llanta rajada o con fuga, ahí donde está su carro.",
    lema: "Una fuga lenta que no es ponchadura.",
    problema:
      "Cuando una llanta sigue perdiendo aire y no tiene ningún clavo, muchas veces la culpa es de la válvula. Las válvulas de hule se resecan y se rajan con el calor de Texas, y una válvula dañada no aguanta la presión. Cambiar la válvula detiene la fuga sin cambiar la llanta.",
    mientrasEspera: [
      "Escuche si la válvula hace un silbido, o úntele agua con jabón y fíjese si salen burbujas.",
      "No maneje lejos con una llanta que pierde aire rápido.",
      "Manténgase fuera del camino mientras espera.",
    ],
    loQueNecesitamos: [
      "Su ubicación exacta",
      "Año, marca y modelo del vehículo",
      "Cuál llanta pierde aire, y qué tan rápido",
    ],
    preguntas: [
      {
        q: "¿Cómo sé si es la válvula y no una ponchadura?",
        a: "Si le unta agua con jabón a la válvula y salen burbujas, por ahí se está saliendo el aire. Si no está seguro, díganoslo cuando pida ayuda: un clavo o tornillo es otro trabajo.",
      },
      {
        q: "¿Mi carro tiene válvulas con sensor TPMS?",
        a: "La mayoría de los carros más recientes sí, porque el sensor de presión de la llanta viene integrado en la válvula. Dígale al despacho el año, la marca y el modelo de su vehículo y le confirman el precio para ese tipo.",
      },
    ],
    incluye: "Cambiar la válvula de la llanta que tiene fuga.",
  },
  {
    slug: "semi-truck-jump-start",
    nombre: "Paso de corriente para tráiler",
    resumen: "Paso de corriente de servicio pesado para tráileres de 18 ruedas y otros camiones grandes.",
    lema: "Un tráiler que no arranca, puesto en marcha donde está estacionado.",
    problema:
      "Un tráiler con las baterías muertas detiene una carga, un horario y a veces un andén completo. Los camiones grandes usan varias baterías juntas, y un arrancador portátil para carro no alcanza para mover un motor diésel de ese tamaño. Un técnico lleva equipo de servicio pesado para pasar corriente al patio, a la parada de camiones o al acotamiento, para que el tráiler vuelva a andar sin esperar una grúa.",
    mientrasEspera: [
      "Apague las luces, la calefacción o el aire acondicionado y cualquier otra cosa que use corriente.",
      "Anote el número de unidad y dónde está exactamente el tráiler: el patio, el andén, la parada de camiones o el marcador de milla.",
      "Si está en el acotamiento, ponga sus triángulos de advertencia si lo puede hacer con seguridad.",
    ],
    loQueNecesitamos: [
      "Dónde está el tráiler, lo más exacto que pueda",
      "La marca y el modelo del tráiler, y el número de unidad",
      "Si el tráiler estuvo parado un tiempo, o si se apagó andando",
    ],
    preguntas: [
      {
        q: "¿Pueden pasarle corriente a un tráiler con más de una batería?",
        a: "Sí. Para eso es el equipo de servicio pesado. Dígale al despacho la marca y el modelo para que el técnico llegue listo para ese tráiler.",
      },
      {
        q: "¿Y si después las baterías no mantienen la carga?",
        a: "El paso de corriente pone a andar el tráiler, pero no arregla baterías que ya están gastadas. Si el tráiler se vuelve a apagar, las baterías o el sistema de carga necesitan un taller.",
      },
      {
        q: "¿Van a paradas de camiones y patios?",
        a: "Sí, a donde se pueda llegar al tráiler con seguridad. Si el patio o la parada tiene sus propias reglas sobre quién puede entrar, avísele al despacho.",
      },
    ],
    incluye: "Un paso de corriente de servicio pesado para las baterías del tráiler, con la mano de obra incluida.",
    nota: "El precio depende del tráiler y de cuántas baterías trae. El despacho se lo confirma antes de mandar al técnico.",
  },
];

export function getServicioEs(slug: string): ServicioEs | undefined {
  return SERVICIOS_ES.find((s) => s.slug === slug);
}
