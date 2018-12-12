 function starFun() {
    if (typeof this.startnum === 'number' && this.startnum%1 === 0) {
        this.startnum = this.startnum;
        this.kongNum = 5 - this.startnum;
        this.halfTrue = false;
    } else {
        this.startnum = this.startnum - 0.5;
        this.kongNum = 4 - this.startnum;
        this.halfTrue = true;
    }
}
export{ //很关键
    starFun
}

