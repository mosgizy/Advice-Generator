const adviceText = document.querySelector(".advice-text") as HTMLElement;
const adviceId = document.querySelector(".advice-index") as HTMLElement;
const dice = document.querySelector(".dice") as HTMLElement;

const adviceUrl: string = "https://api.adviceslip.com/advice";

const fetchAdvice = async (url: string) => {
  let response = await fetch(url).then((response) => response.json());
  let advice = await response.slip;
  loadData(advice.id, advice.advice);
  return advice;
};

const loadData = (id: number, advice: string): void => {
  adviceText.textContent = advice;
  adviceId.textContent = id as unknown as string;
};

const getRandowmAdvice = ():void => {
    let random = Math.floor(Math.random() * 224 + 1);
    fetchAdvice(`${adviceUrl}/${random}`);
}

dice.addEventListener("click", getRandowmAdvice);

window.addEventListener("load", () => {
  getRandowmAdvice()
});

// api from https://api.adviceslip.com/
