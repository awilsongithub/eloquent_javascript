
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
    var interest = parseFloat(apr.value) / 100 / 12; // monthly & interest
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

function getLenders(amount, apr, years, zipcode){
    if(!window.XMLHttpRequest){
        return;
    }
    var ad = document.getElementById('lenders');
    if (!ad) {
        return;
    }
    // encode input into a URL with ?prop=, &prop=
    // encodeURIComponent method is client or core API method to create a safe URI for example where & entered by user will be encoded so not misinterpreted by server as start of a new field
    var url = 'getLenders.php' +
        '?amt=' + encodeURIComponent(amount) +
        '&apr=' + encodeURIComponent(apr) +
        '&yrs=' + encodeURIComponent(years) +
        '&zip=' + encodeURIComponent(zipcode);

    // make a req instance of XMLHttpRequest constructor and invoke the open and send methods
    var req = new XMLHttpRequest;
    req.open('GET', url);       // type, url to send to
    req.send(null);             // no body. parameters of url have search params

    // register event handler to onreadystatechange event of req (XMLHttpRequest) obj
    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200){
            var response = req.responseText;
            var lenders = JSON.parse(response); // parse to JS array

            // convert array to html string
            var list = '';
            for (var i = 0; i < lenders.length; i++){
                list += '<li><a href=' + lenders[i].url + '>' +
                    lenders[i].name + "</a>";
            }

            ad.innerHTML = '<ul>' + list + '</ul>';
        }
    }

}; // end getLenders

// chart balance, interest and equity. if no params, clear <canvas> element
//
function chart(principal, interest, monthly, payments){
    var graph = document.getElementById('graph');
    graph.width = graph.width;                      // clear canvas element

    if (arguments.length == 0 || !graph.getContext){
        return;
    }

    // drawing done w this context obj. methods, props are like menus on drawing program
    var g = graph.getContext('2d');
    var width = graph.width, height = graph.height; // get size

    // convert payment nums, dollar amounts to pixels
    function paymentToX(n){ return n * width/payments; }
    function amountToY(a){ return height - (a * height / (monthly * payments * 1.05)); }

    g.moveTo( paymentToX(0), amountToY(0) );        // start lower L
    g.lineTo( paymentToX(payments), amountToY(monthly * payments ) ); // draw to upper R
    g.lineTo(paymentToX(payments), amountToY(0));   // to lower R
    g.closePath();                                  // back to start lower L
    g.fillStyle = '#f88';
    g.fill();                                       // fill triangle (fills latest drawn shape?)
    g.font = 'bold 12px sans-serif';






};
