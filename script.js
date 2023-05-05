console.log(Vue)


// UN TIPO DI SINTASSI --------------------
// const { createApp, altri_metodi } = Vue;
// createApp({
// }).mount(`#app`);

// PROVA 1
const app = Vue.createApp({
    data: function() {
        return {
            message: `Hello!`
        }
    }
});

app.mount(`#app`);