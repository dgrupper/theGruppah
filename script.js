// This project requires at least one custom JavaScript function
// jquery is fine to use

    const lessThanOneThirdIncome = "The mortgage payment is less than one third of your monthly income, you may accept this loan.";
    const greaterThanOneThirdIncome = "The mortgage payment is greater than one third of your monthly income, you may not accept this loan.";  

    var loanAmount = prompt('What is the loan amount?');
    var termOfLoan = prompt('What is the term of the loan in months?');
    var interestRate = prompt('What is the interest rate? example: 3.5');
    var annualIncome = prompt('What is your annual income');
    var monthlyIncome = annualIncome/12;


// calculate mortgagepayment given loan amount, loan term, interest rate    
   function mortgagePayment (P, N, R) {
       var r = ((R/100)/12);
       var payment = P*(r*((1+r)**N))/(((1+r)**N)-1);
       return payment;
    }

// display values gathered in prompts    
    $('.amount').text(loanAmount);
    $('.term').text(termOfLoan);
    $('.rate').text(interestRate);
    $('.income').text(monthlyIncome);
    $('.payment').text(mortgagePayment(loanAmount, termOfLoan, interestRate));


// reccomend accept loan if monthly payment is less than one third of monthly income
    if ((monthlyIncome/3) < (mortgagePayment(loanAmount, termOfLoan, interestRate))) {
        $('.yesNo').text("The mortgage payment is greater than one third of your monthly income, you should not accept this loan.");
    } else {
        $('.yesNo').text("The mortgage payment is less than one third of your monthly income, you could accept this loan."); 
    }
