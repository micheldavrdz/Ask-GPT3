# Ask-GPT3 (OpenAI)

## English

With the recent popularity of applications that use AI to answer user questions such as ChatGPT I wanted to learn how to use the APIs that OpenAI has available, which brings us to this Ask GPT3 project.

![Recording 2022-12-27 at 12 47 41](https://user-images.githubusercontent.com/93167320/209717014-9f17ba73-817b-478c-958c-07adf9543046.gif)

The project is available at the following url: [Ask-GPT3](https://michel-ask-gpt3.netlify.app/).

Since the project currently uses OpenAI's free credits, the functionality of the site will depend entirely on whether credits are still available or if the credits expire (April 1, 2023), whichever comes first, but the code itself still works.

### OpenAI

To use the OpenAI API you'll need to create an account and request an API key, which can be done at the following link: [Request an API key](https://beta.openai.com/account/api-keys).

OpenAI has different AI models which have different uses, in the case of Ask-GPT3 I used the **GPT-3 text-davinci-003** model (which you can read more about [here](https://beta.openai.com/docs/models/gpt-3)).

Although code-davinci-002 could've been used in the project, I wanted the answers to be more human-like and code-davinci is more focused on converting sentences into code.

### Installing

If you want to run a local version on your computer you should follow these steps (this requires your computer to have NodeJS and Git installed and assumes you know how to use your terminal)

1. Either download the .zip file from this repo or use git

       git clone https://github.com/micheldavrdz/Ask-GPT3.git
       
2. Inside the server folder create an .env file, here's where you'll type your API key as follows

       OPEN_API_KEY="Your key goes here"
       
3. In both folders (client and server) you'll run the following command

       npm install

4. In the server folder you will type the following command, this will run your local server

       npm run server

5. In the client folder, in the main.js file you must change the fetch url to your localhost where the server is running.

       const response = await fetch("your localhost",

6. Finally, in the client folder run following command and you're done

       npm run dev

### Built With

  - [OpenAI API](https://openai.com/api/)
  - [Vite](https://vitejs.dev/)
  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [CORS](https://www.npmjs.com/package/cors)
  - [Nodemon](https://www.npmjs.com/package/nodemon)
  - [dotenv](https://www.npmjs.com/package/dotenv)

### Special Thanks

  - [Flaticon](https://www.flaticon.es/icono-gratis/asistente-de-robot_6008363) for the icon used in the favicon.
  - [yourtempo](https://www.svgrepo.com/svg/442020/user-happy) for the user icon.
  - [jaynewey](https://www.svgrepo.com/svg/391312/robot) for the bot icon.
  - [hicon](https://www.svgrepo.com/svg/438000/send) for the send message icon.

## Español
Con la reciente popularidad de aplicaciones que utilizan IA para responder preguntar de los usuarios como ChatGPT quise aprender a utilizar las API que OpenAI tiene disponibles, lo cual nos lleva este proyecto de Ask GPT3.

![Recording 2022-12-27 at 15 09 43](https://user-images.githubusercontent.com/93167320/209722648-bfc67a79-a786-44ae-939b-d56ec2a92154.gif)

El proyecto se encuentra disponible en la siguiente url: [Ask-GPT3](https://michel-ask-gpt3.netlify.app/).

Ya que el proyecto en este momento utiliza los créditos gratuitos de OpenAI, la funcionalidad del sitio dependerá totalmente si aún hay créditos disponibles o si llega la fecha limite de dichos creditos (1° Abril, 2023), lo que ocurra primero, pero el código en el repositorio aún funciona.

### OpenAI

Para utilizar la API de OpenAI se necesita crear una cuenta y solicitar una llave API, lo cual puede realizarse en el siguiente link: [Solicitar una llave API](https://beta.openai.com/account/api-keys).

OpenAI cuenta con diferentes modelos de IA los cuales tienen diferentes usos, en el caso de Ask-GPT3 yo utilice el modelo de **GPT-3 text-davinci-003** (del cual pueden leer mas [aquí](https://beta.openai.com/docs/models/gpt-3)).

Si bien code-davinci-002 pudo haber sido utilizado en el proyecto, queria que las respuestas fueran mas humanas y code-davinci esta mas enfocado a convertir oraciones en código.

### Instalación

Si quieres ejecutar una versión local en tu computadora debes seguir estos pasos (esto requiere que tengas instalado NodeJS y Git y asume que sabes usar tu terminal)

1. Descarga el archivo .zip del repositorio o utiliza git

       git clone https://github.com/micheldavrdz/Ask-GPT3.git
       
2. Dentro de la carpeta server crea un archivo .env, aquí es donde deberás guardar tu llave API de esta forma

       OPEN_API_KEY="Your key goes here"
       
3. En ambas carpetas (client y server) deberás ejecutar el siguiente comando

       npm install

4. En la carpeta server deberás ejecutar el siguiente comando, esto pondrá a correr tu servidor local

       npm run server

5. En la carpeta client, en el archivo main.js deberás cambiar la url del fetch al localhost donde esta corriendo tu servidor

       const response = await fetch("your localhost",

6. Finalmente, en la carpeta de client deberás correr el siguiente comando y terminaste

       npm run dev

### Creado con

  - [OpenAI API](https://openai.com/api/)
  - [Vite](https://vitejs.dev/)
  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [CORS](https://www.npmjs.com/package/cors)
  - [Nodemon](https://www.npmjs.com/package/nodemon)
  - [dotenv](https://www.npmjs.com/package/dotenv)

### Gracias Especiales

  - [Flaticon](https://www.flaticon.es/icono-gratis/asistente-de-robot_6008363) por el icono utilizado en el favicon.
  - [yourtempo](https://www.svgrepo.com/svg/442020/user-happy) por el icono de usuario.
  - [jaynewey](https://www.svgrepo.com/svg/391312/robot) por el icono del bot.
  - [hicon](https://www.svgrepo.com/svg/438000/send) por el icono de enviar mensaje.
