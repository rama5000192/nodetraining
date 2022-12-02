
const customers = [ 

    { 
   
    "AccountNo": 1001, 
   
    "Name": "John", 
   
    "City": "Bangalore" 
   
    }, 
   
    { 
   
    "AccountNo": 1002, 
   
    "Name": "Tom", 
   
    "City": "Mysore" 
   
    }, 
   
    { 
   
    "AccountNo": 1003, 
   
    "Name": "Kate", 
   
    "City": "Pune" 
   
    }, 
   
    { 
   
    "AccountNo": 1004, 
   
    "Name": "Tom", 
   
    "City": "Delhi" 
   
    }, 
   
    { 
   
    "AccountNo": 1005, 
   
    "Name": "Kate", 
   
    "City": "Mumbai" 
   
    } 
   
   ]

   const transactions = [ 

    {"Date": "12-01-2022","From": 1001,"To": 1003,"Amount": 15000},{"Date": "12-01-2022","From": 1003,"To": 1002,"Amount": 12000},{"Date": "12-01-2022","From": 1002,"To": 1005,"Amount": 2000},{"Date": "13-01-2022","From": 1003,"To": 1001,"Amount": 1000},{"Date": "13-01-2022","From": 1002,"To": 1001,"Amount": 1200},{"Date": "14-01-2022","From": 1001,"To": 1002,"Amount": 3000},{"Date": "14-01-2022","From": 1005,"To": 1003,"Amount": 1500},{"Date": "15-01-2022","From": 1005,"To": 1003,"Amount": 4000}
   
    
   ]

let uniqueCustomers = []
 let duplicate = {}
    for(let customer of customers){
        let existingCustomerIndex = uniqueCustomers.findIndex(item => item.Name === customer.Name)
        if(existingCustomerIndex > -1){
            duplicate = uniqueCustomers[existingCustomerIndex]
            break
        }
        else uniqueCustomers.push(customer)
    }
    console.log(duplicate?.AccountNo || "No duplicate Found")

    function calculateCustomerBalance(){
let customerBalances = []
        for(let customer of customers){
                let balance = 0
                for(const transaction of transactions){
                if(transaction.From === customer.AccountNo){
                    balance -= transaction.Amount
                } else if(transaction.To === customer.AccountNo){
                    balance += transaction.Amount
                }    
                }
                customerBalances.push({account: customer.AccountNo,name: customer.Name,balance: balance})
        }
        console.log(customerBalances)
    }
    calculateCustomerBalance()

    function findHighestDebitAccount(){
        let highestDebit = 0
        let highestDebitAccount = ""
        for(let customer of customers){
            let debit = 0
            for(const transaction of transactions){
             if(transaction.From === customer.AccountNo){
                debit += transaction.Amount
            }    
            }
            if(highestDebit < debit){
                highestDebit = debit
                highestDebitAccount = customer.AccountNo
            }
        }
        console.log(highestDebitAccount)
            
    }
    findHighestDebitAccount()

    
