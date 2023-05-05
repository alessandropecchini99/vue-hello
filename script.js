console.log(Vue)


// UN TIPO DI SINTASSI --------------------
// const { createApp, altri_metodi } = Vue;
// createApp({

// }).mount(`#app`);



// PROVA 1
const app = Vue.createApp({
//  V come se avessi scritto function
//  function data() {}
    data() {
        return {
            // text da inserire nell'h1 + css
            message: `"Now you're playing with power, PORTABLE POWER!"`,
            h1Class: `h1-Vue-class`,

            // immgini da mostrare a schermo + css
            htmlIMG: `<img src="GB.jpg" class="img-v-html rounded">`,
            image: `GB.jpg`,
            imgCSS: [`img-v-bind`, `rounded`],

            // ALTRE PROVE
            divCSS: `div-prova`,
            // prova v-model
            labelText: `v-model & @keyup.enter:`,
            input: ``,
            // prova methods / v-on:click + css
            btn: `btn_saluti`,
        }
    },
    // prova methods - diversi metodi di settarli e di riportare i dati
    methods:  {
        saluto: function() {
            alert(`Ciao!`);
        },
        slogan() {
            alert(this.message);
            this.sloganConsole();
        },
        sloganConsole() {
            console.log(`Lo slogan è: ` + this.message);
        },
        clickBtn() {
            console.log(`hai cliccato Enter!`)
            this.input = ``
        }
    }
});

app.mount(`#app`);