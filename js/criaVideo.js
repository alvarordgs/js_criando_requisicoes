import { conectaApi } from "./conectaApi.js";

const form = document.querySelector('[data-form]');

async function criaVideo(e) {
    e.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch(error) {
        alert(error);
    }
}

form.addEventListener('submit', (e) => criaVideo(e))