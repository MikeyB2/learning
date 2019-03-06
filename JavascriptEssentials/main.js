var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "Gas",
        pistons: [
            { maker: "BMW"},
            { maker: "BMW2"}
        ]
    },
    drive: function(){ return "drive";}
};

var array = [
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){return "drive";}
];

console.log( car.make );

console.log();
