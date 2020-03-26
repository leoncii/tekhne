/*let number, origin, destination;

module.exports.setNumber = function(num){
    number= num;
};

exports.setOrigin = function(o){
    origin= o;
};

module.exports.setDestination = function(d){
    destination= d;
};

exports.getInfo = function(){
    return {
        number,
        origin,
        destination
    }
}
*/
let values = {
    number: 0,
    origin: null,
    destination: null
}

module.exports = function (info) {
    if (info) {
        for (let property in values) {
            if (values[property]) {
                values[property] = info[property];
            }
        }
    }

    let functions = {
        setNumber: function (num) {
            values.number = num;
        },
        setOrigin: function (o) {
            values.origin = o;
        },
        setDestination: function (d) {
            values.destination = d;
        },
        getInfo: function () {
            return values;
        }
    }

    return functions;
}