function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        }
    },

    computed: {
        playerBarStyle() {
            return {width: this.playerHealth + '%'}
            
        },

        monsterBarStyle() {
            return {width: this.monsterHealth + '%'}
            
        }
        
        
    },

    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },

        attackPlayer() {
            const attackValue = getRandomValue(5, 12);
            this.playerHealth -= attackValue;
        },

        specialAttack() {
            this.currentRound++;
            const attackValue = getRandomValue(8, 14);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },

        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }



    }
});
app.mount('#game')