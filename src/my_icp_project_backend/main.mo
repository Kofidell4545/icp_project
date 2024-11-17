import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Text "mo:base/Text";

actor {

    // Defining the structure of a User Account
    public type UserAccount = {
        name : Text;
        password : Text;
        balance : Nat;
    };

    // HashMap to store user accounts: Key = Phone number (represented as Text), Value = UserAccount
    let userAccounts : HashMap.HashMap<Text, UserAccount> = HashMap.HashMap<Text, UserAccount>(0, Text.equal, Text.hash);

    // Register a new user
    public shared func register(name : Text, phone : Text, password : Text) : async Result.Result<Text, Text> {
        switch (userAccounts.get(phone)) {
            case (null) {
                let newUser : UserAccount = {
                    name = name;
                    password = password;
                    balance = 0;
                };
                userAccounts.put(phone, newUser);
                return #ok("Registration successful");
            };
            case (?_) {
                return #err("Account already exists");
            };
        };
    };

    // Log in user by phone number and password
    public query func login(phone : Text, password : Text) : async Result.Result<Text, Text> {
        switch (userAccounts.get(phone)) {
            case (null) {
                return #err("Account not found");
            };
            case (?user) {
                if (user.password == password) {
                    return #ok("Login successful");
                } else {
                    return #err("Incorrect password");
                };
            };
        };
    };

    // Check the account balance of a user
    public query func check_balance(phone : Text) : async Nat {
        switch (userAccounts.get(phone)) {
            case (null) {
                return 0;
            };
            case (?user) {
                return user.balance;
            };
        };
    };

    // Deposit money into user account
    public shared func deposit(phone : Text, amount : Nat) : async Result.Result<Text, Text> {
        switch (userAccounts.get(phone)) {
            case (null) {
                return #err("Account not found");
            };
            case (?user) {
                let updatedBalance = user.balance + amount;
                let updatedUser : UserAccount = {
                    name = user.name;
                    password = user.password;
                    balance = updatedBalance;
                };
                userAccounts.put(phone, updatedUser);
                return #ok("Deposit successful");
            };
        };
    };

};
