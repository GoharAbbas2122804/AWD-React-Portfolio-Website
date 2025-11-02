// Quick: how to remove the git directory for this project (run from project root):
// Unix/macOS:
//   # optional backup
//   mv .git ../projectname-git-backup
//   # remove
//   rm -rf .git
// Windows PowerShell:
//   # optional backup
//   Move-Item .git ../projectname-git-backup -Force
//   # remove
//   Remove-Item -Recurse -Force .git

using System;
using System.Collections.Generic;


class Account
{
    private string accountNumber;
    private string accountHolder;
    private double balance;
    
    public Account(string accountNumber, string accountHolder, double balance)
    {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

   
    public string AccountNumber
    {
        get { return accountNumber; }
    }
    
    public string AccountHolder
    {
        get { return accountHolder; }
        set
        {
            if (string.IsNullOrEmpty(value))
            {
                Console.WriteLine("Error: Account holder name cannot be empty or null , must provide a accountHolder Name ");
            }
            else
            {
                accountHolder = value;
            }
        }
    }
    
    public double Balance
    {
        get { return balance; }
        private set
        {
            if (value < 0)
            {
                Console.WriteLine("Error: Balance cannot be negative.");
            }
            else
            {
                balance = value;
            }
        }
    }

 //Methods are following 
    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
            Console.WriteLine($"Deposited: ${amount}. New balance: ${balance}");
        }
        else
        {
            Console.WriteLine("Error: Deposit amount must be greater than 0.");
        }
    }
    
    public void Withdraw(double amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance -= amount;
            Console.WriteLine($"Withdrawn: ${amount}. New balance: ${balance}");
        }
        else if (amount > balance)
        {
            Console.WriteLine("Error: Insufficient balance.");
        }
        else
        {
            Console.WriteLine("Error: Withdrawal amount must be greater than 0.");
        }
    }

    
    public void DisplayInfo()
    {
        Console.WriteLine("*****Account Detail******");
        Console.WriteLine($"Account Number: {accountNumber}");
        Console.WriteLine($"Account Holder: {accountHolder}");
        Console.WriteLine($"Balance: ${balance}");
        Console.WriteLine("**************************\n");
    }
}

internal class Program
{
    static void Main(string[] args)
    {
        List<Account> a1 = new List<Account>();

        a1.Add(new Account("ACC001", "GoharAbbas", 1000.50));
        a1.Add(new Account("ACC002", "Haris Khan", 2500.75));
        a1.Add(new Account("ACC003", "Shoaib Akhtar", 500.00));
        a1.Add(new Account("ACC004", "Muhammad Bilal", 3200.25));
        a1.Add(new Account("ACC005", "Sir Ehtsham Rashid", 184394.34));
        
       


        Console.WriteLine("All Accounts Information:");
        foreach (Account acc in a1)
        {
            acc.DisplayInfo();
        }


        Console.Write("Enter account number to search: ");
        string searchNumber = Console.ReadLine();
        Account foundAccount = null;
        foreach (Account acc in a1)
        {
            if (acc.AccountNumber == searchNumber)
            {
                foundAccount = acc;
                break;
            }
        }

        
        if (foundAccount != null)
        {
            Console.WriteLine("\nAccount found!");
            foundAccount.DisplayInfo();

            
            Console.WriteLine("Choose operation:");
            Console.WriteLine("1. Deposit");
            Console.WriteLine("2. Withdraw");
            Console.Write("Enter choice (1 or 2): ");
            string choice = Console.ReadLine();

            Console.Write("Enter amount: ");
            double amount;
            if (double.TryParse(Console.ReadLine(), out amount))
            {
                if (choice == "1")
                {
                    foundAccount.Deposit(amount);
                }
                else if (choice == "2")
                {
                    foundAccount.Withdraw(amount);
                }
                else
                {
                    Console.WriteLine("Invalid choice.");
                }
                foundAccount.DisplayInfo();
            }
            else
            {
                Console.WriteLine("Invalid amount entered.");
            }
            
        }
        else
        {
            Console.WriteLine("Account not Found ! Please Enter Correct Account Number to see Details and Perform Actions");
        }
        

    }
}