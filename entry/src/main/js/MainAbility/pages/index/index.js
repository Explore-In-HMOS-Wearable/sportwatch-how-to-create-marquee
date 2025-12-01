export default {
    data: {
        scrollAmount: 5,
        addText: 'increase',
        downText: 'decrease',
        marqueeCustomData: 'Welcome to HOS Next!',
        changeTexts: [
            'Let\'s learn lite wearable',
            'Welcome to HOS Next!',
            'Have a nice day!',
            'Huawei developers!',
        ],
        changeIndex: 0
    },

    increaseSpeed() {
        this.scrollAmount++;
        this.addText = this.scrollAmount.toString();
    },

    decreaseSpeed() {
        if (this.scrollAmount > 1) {
            this.scrollAmount--;
            this.downText = this.scrollAmount.toString();
        } else {
            console.info('Minimum speed reached: 5');
        }
    },

    changeData() {
        this.marqueeCustomData = this.changeTexts[this.changeIndex];
        this.changeIndex = (this.changeIndex + 1) % this.changeTexts.length;
    }
}