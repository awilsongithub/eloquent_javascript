
function calculate(){
    // define vars at top of functions to reflect hoisting

    // input elements
    var amount = document.getElementById('amount');
    var apr = document.getElementById('apr');
    var years = document.getElementById('years');
    var zipcode = document.getElementById('zipcode');

    // output elements
    var payment = document.getElementById('payment');
    var total = document.getElementById('total');
    var totalinterest = document.getElementById('totalinterest');

    // convert interest to decimal then to monthly
    // calculate payments (years * 12 )
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;
    var payments = parseFloat(years.value) * 12;

    // compute monthly payments with a badass Math object core API method
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x-1);
    console.log(monthly);
    console.log('hello');

    // fill in output fields if meaningful number
    if(isFinite(monthly)){
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly*payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

        // save users input for next visit
        save(amount.value, apr.value, years.value, zipcode.value);

        // find and display local lenders, ignoring network errors
        // catch any errors occurring in try block
        try {
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        }
        catch(e) {

        }

        // chart balance, int, equity payments
        chart(principal, interest, monthly, payments);
    } // end if isFinite(monthly) conditional block
    else {
        // result was NaN or infinite so invalid so clear output fields
        payment.innerHTML = '';
        total.innerHTML = '';
        totalinterest.innerHTML = '';
        chart(); // clear chart by passing no args
    }

} // end calculate()

// save input values using HTML5 window.localStorage object of client side API
function save(amount, apr, years, zipcode){
    if (window.localStorage){
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

// function expression: restore on document loading finished event
window.onload = function(){
    if (window.localStorage && localStorage.loan_amount){
        document.getElementById('amount').value = localStorage.loan_amount;
        document.getElementById('apr').value = localStorage.loan_apr;
        document.getElementById('years').value = localStorage.loan_years;
        document.getElementById('zipcode').value = localStorage.loan_zipcode;
    }
};





function getLenders(){};
function chart(){};
