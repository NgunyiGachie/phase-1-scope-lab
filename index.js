var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

    function setBestCustomer() {

        bestCustomer = 'not bob'
    };

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
};


const leastFavoriteCustomer = 'anthony';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'jasmine'
};

module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoritCustomer,
    changeLeastFavoriteCustomer
};
