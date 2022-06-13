"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const adviceText = document.querySelector(".advice-text");
const adviceId = document.querySelector(".advice-index");
const dice = document.querySelector(".dice");
const adviceUrl = "https://api.adviceslip.com/advice";
const fetchAdvice = (url) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(url).then((response) => response.json());
    let advice = yield response.slip;
    loadData(advice.id, advice.advice);
    return advice;
});
const loadData = (id, advice) => {
    adviceText.textContent = advice;
    adviceId.textContent = id;
};
const getRandowmAdvice = () => {
    let random = Math.floor(Math.random() * 224 + 1);
    fetchAdvice(`${adviceUrl}/${random}`);
};
dice.addEventListener("click", getRandowmAdvice);
window.addEventListener("load", () => {
    getRandowmAdvice();
});
// api from https://api.adviceslip.com/
