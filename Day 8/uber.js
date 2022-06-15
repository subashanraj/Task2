class UberPriceCalculator {
    constructor(RPM, SBM, basefare, CPM, TR, ridedistance, bookingfee, toll) {

        this.RPM = RPM; //Rate Per Mile
        this.SBM = SBM; // Surge Boost Multiplier
        this.basefare = basefare;
        this.CPM = CPM; // Cost Per Miniute
        this.TR = TR; //Time of ride
        this.ridedistance = ridedistance
        this.bookingfee = bookingfee;
        this.toll = toll;

    }
    getprice() {
        console.log(" UBER PRICE IS " + (this.basefare + ((this.CPM * this.TR) + (this.RPM * this.ridedistance) * this.SBM) + this.bookingfee + this.toll))
    }

    setprice(newRPM, newSBM, newbasefare, newCPM, newTR, newridedistance, newbookingfee, newtoll) {

        this.RPM = newRPM;
        this.SBM = newSBM;
        this.basefare = newbasefare;
        this.CPM = newCPM;
        this.TR = newTR;
        this.ridedistance = newridedistance
        this.bookingfee = newbookingfee;
        this.toll = newtoll

    }
}
var cost1 = new UberPriceCalculator();
cost1.setprice(10, 5, 20, 15, 10, 3, 20, 60)
cost1.getprice()

//output

// UBER PRICE IS 400