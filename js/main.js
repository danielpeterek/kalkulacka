$(function(){
    let prevod = {
        prikon: 100,
        cas: 5,
        cena: 4,
        /* watt: 1000,
        data: 1000, */
        wnakw: function(kwh){
            return kwh / 1000;
        },
        getVysledek: function() {
            return this.wnakw(this.prikon) * this.cas * this.cena * 365;
        },
        /*setWatt: function(watt) {
            const watts = ["W","kW"];
            this.watt = 1000 ** watts.indexOf(watt); 
        } */
    }

    /*console.log(prevod.setWatt("kW"));*/
    console.log(prevod);

    $("#calc").on("click", function(){
        prevod.prikon = parseInt($("#prikon").val());
        prevod.cas = parseInt($("#cas").val());
        prevod.cena = parseFloat($("#cena").val());
        console.log(prevod.getVysledek());
        let vysledek;
        vysledek = `Za rok zaplatíte: ${prevod.getVysledek().toFixed(2)} ,-Kč`;
        $("#vysledek").html(vysledek);
    });
    
})