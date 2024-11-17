
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug"; // For debugging
import Option "mo:base/Option";

actor UserAccount {

    type User = {
        name: Text;
        phone: Text;
        password: Text;
        balance: Nat;
    };
    var users: HashMap.Text<User> = HashMap.new<Text, User>();

    public func register(name: Text, phone: Text, password: Text) : async Text {
        if (HashMap.contains(users, phone)) {
            return "User already exists";
        };
        let user = { name = name; phone = phone; password = password; balance = 0 };
        HashMap.put(users, phone, user);
        return "User registered successfully";
    };

   public func login(phone: Text, password: Text) : async Text {
    // Simplified for debugging
    return "Debugging login function"; // Check if this works
};

   public func checkBalance(phone: Text) : async Nat {
    switch (HashMap.get(users, phone)) {
        case (null) { return 0; }; // User not found
        case (some(user)) { return user.balance; };  // Corrected pattern matching
    };
    return 0; // Added to handle any unexpected cases
};

 public func deposit(phone: Text, amount: Nat) : async Text {
    switch (HashMap.get(users, phone)) {
        case null { 
            return "User not found"; 
        };
        case (some user) { // Corrected pattern matching
            let updatedUser = {
                name = user.name;
                phone = user.phone;
                password = user.password;
                balance = user.balance + amount; // Update balance immutably
            };
            HashMap.put(users, phone, updatedUser); // Save the updated user back
            return "Deposit successful";
        };
    };
};

};
