document.addEventListener('DOMContentLoaded',()=>{
    //Select DOM elements
    const currencySelect=document.getElementById('currency-select');
    const balanceDisplay=document.querySelector('h3');
    const incomeDisplay=document.querySelector('div>span:first-child p:last-child');
    const expenseDisplay=document.querySelector('div>span:last-child p:last-child');
    const amountInput=document.querySelector('input[type="number"]');
    const descriptionInput=document.querySelector('input[type="text"]');
    const dateInput=document.querySelector('input[type="date"]');
    const addButton=document.querySelector('button');

    //create and append transaction list
    const transactionList=document.createElement('ul');
    transactionList.id='transaction-list';
    document.querySelector('main div:last-child').appendChild(transactionList);

    //initialize data
    let transactions=JSON.parse(localStorage.getItem('transactions'))||[];
    let selectedCurrency=localStorage.getItem('currency')||'USD';

    //currency symbols
    const currencySymbols = {
        'USD': '$', 'EUR': '€', 'GBP': '£', 'INR': '₹', 'JPY': '¥',
        'AUD': 'A$', 'CAD': 'C$', 'CNY': '¥', 'CHF': 'CHF', 'SGD': 'S$',
        'HKD': 'HK$', 'NZD': 'NZ$', 'KRW': '₩', 'BRL': 'R$', 'ZAR': 'R',
        'MXN': '$', 'RUB': '₽', 'SEK': 'kr', 'NOK': 'kr', 'DKK': 'kr',
        'TRY': '₺', 'SAR': 'ر.س', 'AED': 'د.إ', 'THB': '฿', 'IDR': 'Rp',
        'MYR': 'RM', 'PLN': 'zł', 'PHP': '₱', 'EGP': 'ج.م', 'NGN': '₦'
    };

    //update UI (skeleton)
    function updateUI(){
        console.log('Updating UI with currency: ', selectedCurrency);
        
    }

    //set default currency
    currencySelect.value=selectedCurrency;
    updateUI();

    //Handle currency change
    currencySelect.addEventListener('change',()=>{
        selectedCurrency=currencySelect.value;
        localStorage.setItem('currency',selectedCurrency);
        console.log('Currency changed to: ',selectedCurrency);
        updateUI();

    
        
    })
})