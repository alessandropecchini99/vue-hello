console.log(Vue)


// UN TIPO DI SINTASSI --------------------
// const { createApp, altri_metodi } = Vue;
// createApp({
// }).mount(`#app`);

// PROVA 1
const app = Vue.createApp({
    data() {
        return {
            message: `"Now you're playing with power, PORTABLE POWER!"`,
            h1Class: `h1-prova`,
            image: `GB.jpg`,
            imgCSS: [`img-prova`, `rounded`],
            labelCSS: `label-prova`,
            input: ``
        }
    }
});

app.mount(`#app`);