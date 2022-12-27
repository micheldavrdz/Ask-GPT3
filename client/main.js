// importing assets
import bot from "./assets/svg/bot.svg";
import user from "./assets/svg/user.svg";

const form = document.querySelector("form"); // only form in the page so no need to specify
const chatContainer = document.querySelector("#chat_container");

// Show 3 dots while waiting for the response
let loading;

const loader = (el) => {
  el.textContent = "";

  loading = setInterval(() => {
    el.textContent += ".";

    el.textContent === "...." ? (el.textContent = "") : el.textContent;
  }, 300);
};

// If the bot is typing do it 1 by 1
const botType = (el, text) => {
  let index = 0;

  let interval = setInterval(() => {
    index < text.length
      ? ((el.innerHTML += text.chartAt(index)), index++)
      : clearInterval(interval);
  }, 30);
};

// Generate a really random unique id for each message
const generateMsgId = () => {
  const timestamp = Date.now();
  const rndHexStr = Math.floor(Math.random() * 1000).toString(16);

  return `id-${timestamp}-${rndHexStr}`;
};

// Shows a colored message depending on the sender
const chatStripe = (isBot, value, uniqueId) => {
  return `
      <div class="wrapper ${isBot && "bot"}" >
        <div class="chat">
          <div class="chat__profile">
            <img src="${isBot ? bot : user}" alt="${isBot ? "bot" : "user"}" />
          </div>
          <div class="chat__message" id="${uniqueId}">
            ${value}
          </div>
        </div>
      </div>
    `;
};

const submitHandler = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  //user's chatstripe (false so it knows it's not a bot)
  chatContainer.innerHTML += chatStripe(false, data.get("prompt"));
  form.reset();

  //bot's chatstripe (true so it knows it's a bot and empty so it fills it with the bot's response)
  const uniqueId = generateMsgId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

  //scrolls so the message is visible
  chatContainer.scrollTop = chatContainer.scrollHeight;

  //shows the loading dots
  loader(document.querySelector(`#${uniqueId}`));
};

form.addEventListener("submit", submitHandler);
form.addEventListener("keyup", (e) => {
  e.key === "Enter" && submitHandler(e);
});
