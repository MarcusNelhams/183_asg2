"use strict";

let app = {};

app.data = {    
    data: function() {
        return {
            buttonColor: [['button', 'button', 'button'],
                          ['button', 'button', 'button'],
                          ['button', 'button', 'button']],
            buttonShape: [['fa fa-fw', 'fa fa-fw', 'fa fa-fw'],
                          ['fa fa-fw', 'fa fa-fw', 'fa fa-fw'],
                          ['fa fa-fw', 'fa fa-fw', 'fa fa-fw']],
            turn: 'x',
            winner: false
        };
    },
    computed: {

    },
    methods: {    
        change_button: function(i, j) {
            // can't change if there is a winner
            if (this.winner) return

            if (this.buttonShape[i][j] == 'fa fa-fw') {
                if (this.turn == 'x') {
                    this.buttonShape[i][j] = 'fa fa-fw fa-remove'
                } else {
                    this.buttonShape[i][j] = 'fa fa-fw fa-circle-o'
                }

                // change turn
                this.turn == 'x' ? this.turn = 'o' : this.turn = 'x'
            }
            this.check_win()
        },

        check_win: function() {
            for (let i = 0; i < 3; i++) {
                // check rows
                if (this.buttonShape[i].every(val => val == this.buttonShape[i][0])
                     && this.buttonShape[i][0] != 'fa fa-fw') {
                        this.buttonColor[i] = this.buttonColor.map(val => val = 'button is-success')
                        this.winner = true
                    }
                // check cols
                if (this.buttonShape[0][i] == this.buttonShape[1][i] 
                    && this.buttonShape[0][i] == this.buttonShape[2][i]
                    && this.buttonShape[0][i] != 'fa fa-fw') {
                        this.buttonColor.every(row => row[i] ='button is-success')
                        this.winner = true
                }
            }
            // check diags
            if (this.buttonShape.every((row, i) => row[i] == this.buttonShape[0][0])
                && this.buttonShape[0][0] != 'fa fa-fw') {
                for (let i = 0; i < 3; i++) {
                    this.buttonColor[i][i] = 'button is-success'
                }
                this.winner = true
            }
            if (this.buttonShape.every((row, i) => row[2 - i] == this.buttonShape[0][2])
                && this.buttonShape[0][2] != 'fa fa-fw') {
                for (let i = 0; i < 3; i++) {
                    this.buttonColor[i][2-i] = 'button is-success'
                }
                this.winner = true
            }
        },

        new_game: function() {
            this.buttonColor = [['button', 'button', 'button'],
                                ['button', 'button', 'button'],
                                ['button', 'button', 'button']],
            this.buttonShape = [['fa fa-fw', 'fa fa-fw', 'fa fa-fw'],
                                ['fa fa-fw', 'fa fa-fw', 'fa fa-fw'],
                                ['fa fa-fw', 'fa fa-fw', 'fa fa-fw']],
            this.turn = 'x'
            this.winner = false
        }
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
app.vue.recompute();

