new Vue({
    el: "#app",
    data: {
        playerHP: 100,
        playerMP: 50,
        monsterHP: 100,
        monsterMP: 50,
        interval: false
    },
    methods: {
        playerAttack: function() {
            this.monsterHP -= Math.floor(Math.random() * 10)+2; // 2 a 11
            this.playerHP -= Math.floor((Math.random()*10)+1); // 1 a 10
        },
        playerSuperAttack: function() {
            if (this.playerMP >= 10){
                this.monsterHP -= Math.floor(Math.random() * 10)+7; // 7 a 16
                this.playerHP -= Math.floor((Math.random()*10)+1); // 1 a 10
                this.playerMP -= 10;
            }
        },
    },
    watch: {
        playerHP: function() {
            if (this.playerHP < 0) {
                this.playerHP = 0;
            }
        },
        monsterHP: function() {
            if (this.monsterHP < 0 ) {
                this.monsterHP = 0;
            }
        },

        playerMP: function() {
            if (this.playerMP < 50){
                if (!this.interval) {
                    this.interval = setInterval(() => {
                        this.playerMP += 5;

                    }, 3000);
                }
            }
            else {
                if (this.playerMP > 50){
                    this.playerMP = 50;
                }
            }
        }
        
    }




})