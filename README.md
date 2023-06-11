## BOT-WHATSAPP

>Proposito: Crearemos un botchat de un tienda llamara "MOBILE", donde el bot respondera las consultas de los clientes interesados de la tienda.

-Vamos a utilizar la libreria `<whatsapp-web.js>`. 

###### SUGERENCIA:
###### Tener instalado NodeJS v12

+ Paso 1: 
    * Creamos una carpeta con nombre de bot-whatsapp
    * Entramos la carpeta en forma terminal.

    ![ffhfgh](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/007677e4-1464-46e8-ba56-505c56f14a4b)


+ Paso 2:
    * Nos saldra en visual studio code estando dentro de la carpeta creada.
    * Presionamos new terminal y dentro de ella escribimos:
   
   ![,,,,](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/47126f02-8522-4477-a1d8-f0126f616ea6)

    * Este comando descargará e instalará el paquete whatsapp-web.js desde el registro de npm y lo agregará a la carpeta node_modules de tu proyecto.
+ Paso 3:
    * Creamos un `<index.js>` para colocar ahi nuestro proyecto
    * Dentro de `<index.js>` escribimos.
    
    ![image](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/e8c175af-5ffe-4c57-9342-93b66ca4da2b)
 
+ Paso 4:
    * Vamos a instalar y usar qrcode-terminal ( abre una nueva ventana )para que podamos representar el código QR:

   ![image](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/82265b17-94eb-45ac-89a9-fd841e3ab24c)

    * Y ahora modificaremos nuestro código para usar este nuevo módulo. Agregamos este codigo en el proyecto `<index.js>` : 

   ![image](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/a65170b7-c8b0-4576-ad6c-8f2f07b76520)

+ Paso 5:
    * Damos new terminal y escribimos esto:

   ![image](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/f1e30fe7-6dd2-4346-bc73-282fbce61dc3)


    * Nos dara un qr para el bot.
    * Después de escanear este código QR, el numero de la empresa debe estar autorizado y debe ver un Client is ready! mensaje impreso.
    
   ![image](https://github.com/MaricarmenCatalinaRaymundoRomero/Bot-Whatsapp/assets/129924045/5cf96b61-ced0-4168-8309-2a54203956ab)
 
 + Paso 6:
    * Ahora que podemos conectarnos a WhatsApp, es hora de escuchar los mensajes entrantes.
    client.on('message', message => {
    const lowerCaseBody = message.body.toLowerCase();
    
    *####HTML code

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

