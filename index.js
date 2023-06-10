const { Client, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new NoAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const lowerCaseBody = message.body.toLowerCase();

    if (lowerCaseBody.includes('hola')) {
        client.sendMessage(message.from, "¡𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖 𝙡𝙖 𝙚𝙢𝙥𝙧𝙚𝙨𝙖 𝙈𝙊𝙑𝙄𝙇𝙀!✨\nTenemos más de 2 años de rubro.\n Los mejores precios de celulares que hay en el Peru📲\n\n=>Escribe que preguntas nos quiere decir, por ejemplo:\n-Donde queda su tienda?\n-Los modelos de celulares disponible?\n-Sus productos son buena calidad?\n\nUn bot te estará atendiendo 🤖<3");
    } else if (lowerCaseBody.includes('donde queda su tienda?')) {
        client.sendMessage(message.from, "Nuestra tienda queda Mz 72 Lt 9 Et 7/La Pradera 🛒🛍️ \nVisitanos de 11am a 9pm 🚶🏼‍♂️💨");
    } else if (lowerCaseBody.includes('los modelos de celulares disponible?')) {
        client.sendMessage(message.from, "¿Qué marca desea usted?👀(Responde las opciones que están disponibles)\n● Xiaomi\n● Huawei\n● Samsung\n● Apple\n● LG");
    
    // Xiaomi
    } else if (lowerCaseBody.includes('xiaomi')) {
        client.sendMessage(message.from, "》》Xiaomi📱\n𝐗𝟏) 𝐗𝐢𝐚𝐨𝐦𝐢 𝟏𝟐𝐓 𝟖𝐆𝐁\n𝐗𝟐) 𝐗𝐢𝐚𝐨𝐦𝐢 𝐑𝐞𝐝𝐦𝐢 𝟏𝟐𝐂 𝟑𝐆𝐁\n𝐗𝟑) 𝐗𝐢𝐚𝐨𝐦𝐢 𝟏𝟐 𝐏𝐑𝐎 𝟏𝟐𝐆𝐁\n𝐗𝟒) 𝐗𝐢𝐚𝐨𝐦𝐢 𝐑𝐞𝐝𝐦𝐢 𝟏𝟐𝐂 𝟒𝐆𝐁\n𝐗𝟓) 𝐗𝐢𝐚𝐨𝐦𝐢 𝐏𝐨𝐜𝐨 𝐗𝟓 𝐏𝐫𝐨 𝟓𝐆\n(Escribe el nombre del celular que prefieres) 💁🏻‍♀️🛒");
    // Xiaomi sus celulares e informacion
    } else if (lowerCaseBody.includes('x1')) {
        client.sendMessage(message.from, "El 𝐗𝐢𝐚𝐨𝐦𝐢 𝟏𝟐𝐓 𝟖𝐆𝐁 cuenta con una configuración de cámaras increíbles con un sensor principal de 108 MP de Samsung ISOCELL HM6, una batería de 5000 mAh con carga rápida de 120W y una capacidad de 8 RAM - 256 almacenamiento interno.\n💰Su precio lo estamos dejando a solo S/2400");   
    } else if (lowerCaseBody.includes('x2')) {
        client.sendMessage(message.from, "El 𝐗𝐢𝐚𝐨𝐦𝐢 𝐑𝐞𝐝𝐦𝐢 𝟏𝟐𝐂 𝟑𝐆𝐁 va a sorprender a todos los amantes tecnológicos con su pantalla de 6,71 pulgadas con resolución HD+ con una batería de 5000 mAh y su cámara principal de 50MP con IA.\n💰Su precio lo estamos dejando a solo S/521");
    } else if (lowerCaseBody.includes('x3')) {
        client.sendMessage(message.from, "El 𝐗𝐢𝐚𝐨𝐦𝐢 𝟏𝟐 𝐏𝐑𝐎 𝟏𝟐𝐆𝐁 cuenta con una pantalla LTPO AMOLED de 6.73 pulgadas a resolución 1440p y tasa de refresco de 120Hz, el Xiaomi 12 Pro está potenciado por un procesador Snapdragon 8 Gen 1 de Qualcomm, junto con 8GB o 12GB de RAM y 128GB o 256GB de almacenamiento interno no expandible.\n💰Su precio lo estamos dejando a solo S/864");
    } else if (lowerCaseBody.includes('x4')) {
        client.sendMessage(message.from, "El 𝐗𝐢𝐚𝐨𝐦𝐢 𝐑𝐞𝐝𝐦𝐢 𝟏𝟐𝐂 𝟒𝐆𝐁 cuenta con una pantalla Full HD+ de 6.67 pulgadas y una tasa de refresco de 120Hz. En cuanto a la fotografía, tiene una configuración de cámara cuádruple en la parte trasera con sensores de 48MP, 8MP, 2MP y 2MP, y una cámara frontal de 20 megapíxeles.\n💰Su precio lo estamos dejando a solo S/1500");
    } else if (lowerCaseBody.includes('x5')) {
        client.sendMessage(message.from, "El 𝐗𝐢𝐚𝐨𝐦𝐢 𝐏𝐨𝐜𝐨 𝐗𝟓 𝐏𝐫𝐨 𝟓𝐆 es un smartphone Android con una pantalla AMOLED de 6.67 pulgadas a resolución FHD+ y tasa de refresco de 120Hz. La cámara trasera del Poco X5 Pro es triple con un lente principal de 108MP, y su cámara frontal es de 16MP. Una batería de 5000 mAh con carga rápida de 67W.\n💰Su precio lo estamos dejando a solo S/1070 ");
    
    // Huawei
    } else if (lowerCaseBody.includes('huawei')) {
        client.sendMessage(message.from, "》》Huawei📱\n𝐇𝟏) 𝐇𝐮𝐚𝐰𝐞𝐢 𝐏𝟒𝟎 𝐏𝐫𝐨\n𝐇𝟐) 𝐇𝐮𝐚𝐰𝐞𝐢 𝐌𝐚𝐭𝐞 𝟒𝟎 𝐏𝐫𝐨\n𝐇𝟑) 𝐇𝐮𝐚𝐰𝐞𝐢 𝐏𝟑𝟎 𝐏𝐫𝐨\n𝐇𝟒) 𝐇𝐮𝐚𝐰𝐞𝐢 𝐌𝐚𝐭𝐞 𝟑𝟎 𝐏𝐫𝐨\n𝐇𝟓) 𝐇𝐮𝐚𝐰𝐞𝐢 𝐄𝐧𝐣𝐨𝐲 𝟐𝟎 𝐏𝐫𝐨\n(Escribe el nombre del celular que prefieres) 💁🏻‍♀️🛒");
    // Huawei sus celulares e informacion
    } else if (lowerCaseBody.includes('h1')) {
    client.sendMessage(message.from, "El 𝐇𝐮𝐚𝐰𝐞𝐢 𝐏𝟒𝟎 cuenta con una pantalla OLED de 6.58 pulgadas a 1200 x 2640 pixels de resolución y tasa de refresco de 90Hz.Cuenta con una batería de 4200 mAh con soporte para carga rápida tanto inalámbrica como convencional\n💰Su precio lo estamos dejando a solo S/2899");
    } else if (lowerCaseBody.includes('h2')) {
    client.sendMessage(message.from, "El 𝐇𝐮𝐚𝐰𝐞𝐢 𝐌𝐚𝐭𝐞 𝟒𝟎 𝐏𝐫𝐨 es miembro de la serie Mate 40 y cuenta con una pantalla OLED de 6.76 pulgadas a resolución Full HD+.La cámara posterior del Mate 40 Pro es triple, en configuración 50MP + 12MP + 20MP, mientras que la cámara selfie es dual, con un lente de 13 megapixels más un lente TOF 3D que funciona también para reconocimiento de rostro.\n💰Su precio lo estamos dejando a solo S/1899");
    } else if (lowerCaseBody.includes('h3')) {
    client.sendMessage(message.from, "El 𝐇𝐮𝐚𝐰𝐞𝐢 𝐏𝟑𝟎 𝐏𝐫𝐨 sube la apuesta del P30 con una pantalla Full HD+ de 6.47 pulgadas.La cámara del Huawei P30 Pro es cuádruple en configuración 40MP + 20MP + 8MP + TOF, mientras que su cámara frontal es de 32MP. El P30 Pro tiene una batería de 4200 mAh con carga ultra rápida que permite cargar al 70% en 30 minutos.\n💰Su precio lo estamos dejando a solo S/2699");
    } else if (lowerCaseBody.includes('h4')) {
    client.sendMessage(message.from, "El 𝐇𝐮𝐚𝐰𝐞𝐢 𝐌𝐚𝐭𝐞 𝟑𝟎 𝐏𝐫𝐨 es el smartphone más avanzado de la serie Mate 30. Con una pantalla OLED de 6.53 pulgadas a resolución Full HD+.La cámara posterior del Mate 30 Pro es cuádruple de 40 MP + 40 MP + 8 MP, más una cámara TOF 3D, con óptica Leica, y su cámara para selfies es de 32 MP.\n💰Su precio lo estamos dejando a solo S/3379");
    } else if (lowerCaseBody.includes('h5')) {
    client.sendMessage(message.from, "El 𝐇𝐮𝐚𝐰𝐞𝐢 𝐄𝐧𝐣𝐨𝐲 𝟐𝟎 𝐏𝐫𝐨 es un smartphone Android con una pantalla Full HD+ de 6.5 pulgadas.La cámara principal del Enjoy 20 Pro es triple, con un lente principal de 48 MP y lentes secundarios de 8 MP y 2 MP, mientras que su cámara para selfies es de 16 megapixels.\n💰Su precio lo estamos dejando a solo S/1050");


    // Samsung
    } else if (lowerCaseBody.includes('samsung')) {
        client.sendMessage(message.from, "》》Samsung📱\n𝐒𝟏) 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐒𝟐𝟏 𝐔𝐥𝐭𝐫𝐚\n𝐒𝟐) 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐒𝟐𝟏\n𝐒𝟑) 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐍𝐨𝐭𝐞 𝟐𝟎\n𝐒4) 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐀𝟑𝟐\n𝐒𝟓) 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐌𝟑𝟏 (Escribe el nombre del celular que prefieres) 💁🏻‍♀️🛒");
    // Samsung sus celulares e informacion
    } else if (lowerCaseBody.includes('s1')) {
        client.sendMessage(message.from, "El  𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐒𝟐𝟏 𝐔𝐥𝐭𝐫𝐚 cuenta con una pantalla Dynamic AMOLED de 6.8 pulgadas a resolución QHD+.La cámara posterior del Galaxy S21 Ultra es mejorada a una cuádruple, con lente principal de 108MP, un lente periscópico de 10MP.\n💰Su precio lo estamos dejando a solo S/2100");
    } else if (lowerCaseBody.includes('s2')) {
        client.sendMessage(message.from, " El 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐒𝟐𝟏 cuenta con una pantalla Dynamic AMOLED de 6.2 pulgadas a resolución Full HD+. En el posterior del Galaxy S21 observamos una cámara triple con lente wide de 12MP, lente telefoto de 64MP y lente ultrawide de 12MP y al frente la cámara es de 10MP, capaz de capturar video 4K.\n💰Su precio lo estamos dejando a solo S/2800");
    } else if (lowerCaseBody.includes('s3')) {
        client.sendMessage(message.from, "El 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐍𝐨𝐭𝐞 𝟐𝟎 contiene con una pantalla Super AMOLED de 6.7 pulgadas a resolución Full HD+.La cámara posterior del Galaxy Note 20 es triple, con lentes de 12 MP, 64 MP y 12 MP, mientras que la cámara frontal para selfies es de 10 MP.\n💰Su precio lo estamos dejando a solo S/2159");
    } else if (lowerCaseBody.includes('s4')) {
        client.sendMessage(message.from, "El 𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐀𝟑𝟐 cuenta con una pantalla Infinity-U Super AMOLED de 6.4 pulgadas a resolución Full HD+.En cuanto a cámaras, el Galaxy A32 cuenta con una cámara cuádruple en su posterior, con lentes de 64MP, 8MP, 5MP y 5MP, y su cámara frontal para selfies es de 20 megapixels. \n💰Su precio lo estamos dejando a solo S/1100");
    } else if (lowerCaseBody.includes('s5')) {
        client.sendMessage(message.from, "El  𝐒𝐚𝐦𝐬𝐮𝐧𝐠 𝐆𝐚𝐥𝐚𝐱𝐲 𝐌𝟑𝟏 está potenciado por un procesador Exynos 9611 acompañado de 6GB de memoria RAM con 64GB o 128GB de almacenamiento interno. tiene una cámara para selfies de 32 megapixels, y completa sus características con una enorme batería de 6000 mAh con soporte para carga rápida, lector de huellas, y Android 10 con la interfaz One UI.\n💰Su precio lo estamos dejando a solo S/1100");
    
    
    
    //Apple
    } else if (lowerCaseBody.includes('apple')) {
        client.sendMessage(message.from, "》》Apple📱\n𝐈𝟏) 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟏\n𝐈𝟐) 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟐\n𝐈𝟑) 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟑 𝐌𝐢𝐧𝐢\n𝐈𝟒) 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟑 𝐏𝐫𝐨\n𝐈𝟓) 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟐 𝐏𝐫𝐨 𝐌𝐚𝐱\n(Escribe el nombre del celular que prefieres) 💁🏻‍♀️🛒");
    //Apple sus celulares e informacion
    } else if (lowerCaseBody.includes('i1')) {
        client.sendMessage(message.from, "El 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟏 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP.\n💰Su precio lo estamos dejando a solo S/2199");
    } else if (lowerCaseBody.includes('i2')) {
        client.sendMessage(message.from, "El  𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟐 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP.\n💰Su precio lo estamos dejando a solo S/2349");
    } else if (lowerCaseBody.includes('i3')) {
        client.sendMessage(message.from, "El 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟑 𝐌𝐢𝐧𝐢 contiene su pantalla de OLED Super Retina XDR de 5.4 pulgadas, el notch que aloja Face ID se reduce un 20 por ciento.El iPhone 13 mini tiene una cámara dual con dos sensores de 12MP, wide y ultrawide respectivamente, con estabilización IBIS, mientras que la cámara selfie también es dual, con un sensor de 12MP y un sensor TrueDepth. \n💰Su precio lo estamos dejando a solo S/4059");
    } else if (lowerCaseBody.includes('i4')) {
        client.sendMessage(message.from, "El 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟑 𝐏𝐫𝐨 cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB. La cámara trasera es cuádruple, con tres lentes de 12MP que funcionan como wide, ultrawide y telefoto.La cámara selfie es ultrawide de 12MP. \n💰Su precio lo estamos dejando a solo S/3411");
    } else if (lowerCaseBody.includes('i5')) {
        client.sendMessage(message.from, "El 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟐 𝐏𝐫𝐨 𝐌𝐚𝐱 es la variante con mayor tamaño de pantalla de la serie iPhone 12. Con una pantalla OLED de 6.7 pulgadas, el iPhone 12 Pro Max cuenta con un procesador Apple A14 Bionic con opciones de 128GB, 256GB, o 512GB de almacenamiento, cámara cuádruple con tres lentes de 12 megapixels más un lente TOF 3D de tecnología LiDAR, cámara selfie de 12 megapixels.\n💰Su precio lo estamos dejando a solo S/3799");
    
    
    
    //LG
    } else if (lowerCaseBody.includes('lg')) {
        client.sendMessage(message.from, "》》LG📱\n𝐋𝟏) 𝐋𝐆 𝐊𝟒𝟎\n𝐋𝟐) 𝐋𝐆 𝐐𝟕𝟎\n𝐋𝟑) 𝐋𝐆 𝐒𝐭𝐲𝐥𝐨 𝟔\n𝐋𝟒)𝐋𝐆 𝐕𝟔𝟎 𝐓𝐡𝐢𝐧𝐐\n𝐋𝟓)𝐋𝐆 𝐕𝐞𝐥𝐯𝐞𝐭\n(Escribe el nombre del celular que prefieres) 💁🏻‍♀️🛒");
    //LG sus celulares e informacion
    } else if (lowerCaseBody.includes('l1')) {
    client.sendMessage(message.from, "El 𝐋𝐆 𝐊𝟒𝟎 es un smartphone Android con una pantalla HD+ de 6.1 pulgadas y potenciado por un procesador Mediatek Helio P22 de ocho núcleos, acompañado de 2GB o 3GB de memoria RAM y 32GB de espacio de almacenamiento interno expandible. La cámara principal del LG K40S es dual, de 13 MP + 5 MP y su cámara para selfies es de 13 MP. \n💰Su precio lo estamos dejando a solo S/1079");
    } else if (lowerCaseBody.includes('l2')) {
    client.sendMessage(message.from, "El 𝐋𝐆 𝐐𝟕𝟎 es un smartphone de 2019.Tiene una pantalla IPS LCD de 6.4 pulgadas. La resolución es de 1080 x 2310 y 0 ppi de densidad de píxeles.La cámara frontal es Single con 16 MP. La cámara principal e Triple con 32 MP.Funciona con CPU Octa-core con memoria 64GB 4GB RAM. La batería es de 4000 mAh.Desplázate hacia abajo y descubre todas las características y especificaciones que ofrece este dispositivo.\n💰Su precio lo estamos dejando a solo S/3799");
    } else if (lowerCaseBody.includes('l3')) {
    client.sendMessage(message.from, "El 𝐋𝐆 𝐒𝐭𝐲𝐥𝐨 𝟔 cuenta con una pantalla Full HD+ de 6.8 pulgadas, el LG Stylo 6 está potenciado por un procesador Mediatek Helio P35 acompañado de 3GB de memoria RAM y 64GB de espacio de almacenamiento interno expandible vía microSD. En cuanto a cámaras, posee un arreglo triple en su posterior, con lentes de 13 MP, 5MP y 5 MP, mientras que su cámara frontal es de 13 megapixels. El LG Stylo 6 corre el sistema operativo Android 10.\n💰Su precio lo estamos dejando a solo S/1106");
    } else if (lowerCaseBody.includes('l4')) {
    client.sendMessage(message.from, "El 𝐋𝐆 𝐕𝟔𝟎 𝐓𝐡𝐢𝐧𝐐 5G cuenta con una pantalla POLED Full HD+ de 6.8 pulgadas y potenciado por un procesador Snapdragon 865 junto con 8GB de memoria RAM y 128GB o 256GB de almacenamiento interno. La cámara principal del LG V60 ThinQ 5G es triple, de 64 MP + 13 MP + TOF 3D con estabilización óptica de imagen, mientras que su cámara selfie es de 10 megapixels. \n💰Su precio lo estamos dejando a solo S/870");
    
    } else if (lowerCaseBody.includes('l5')) {
    client.sendMessage(message.from, "El 𝐋𝐆 𝐕𝐞𝐥𝐯𝐞𝐭 5G cuenta con una pantalla P-OLED Full HD+ de 6.8 pulgadas, el Velvet está potenciado por un procesador Snapdragon 765G que provee conectividad 5G, y acompañado de 6GB o 8GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible. La cámara principal del LG Velvet consta de tres lentes de 48 MP, 8 MP, y 5 MP, y su cámara para selfies es de 16 megapixels.\n💰Su precio lo estamos dejando a solo S/1399");

    
    } else if (lowerCaseBody.includes('sus productos son buena calidad?')) {
    client.sendMessage(message.from, "𝐒í, 𝐧𝐮𝐞𝐬𝐭𝐫𝐨𝐬 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐨𝐬 𝐝𝐞 𝐜𝐞𝐥𝐮𝐥𝐚𝐫𝐞𝐬 𝐬𝐨𝐧 𝐝𝐞 𝐞𝐱𝐜𝐞𝐥𝐞𝐧𝐭𝐞 𝐜𝐚𝐥𝐢𝐝𝐚𝐝!📱👀.\n Nos esforzamos por ofrecer dispositivos que cumplan con altos estándares de rendimiento, durabilidad y funcionalidad. 💁🏻‍♀️✨");
    
    } else if (lowerCaseBody.includes('gracias')) {
    client.sendMessage(message.from, "𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐚 𝐮𝐬𝐭𝐞𝐝 𝐩𝐨𝐫 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫𝐧𝐨𝐬 𝐲 𝐪𝐮𝐞 𝐭𝐞𝐧𝐠𝐚 𝐮𝐧 𝐛𝐮𝐞𝐧 𝐝𝐢𝐚!📱💁🏻‍♀️✨");

    //Al contrario 
    } else {
        client.sendMessage(message.from, "Por favor, escriba correctamente.");
    }
});

client.initialize();


 
