# SUSUCHAIN A SAVINGS ACCOUNTS ON THE ICP BLOCKCHAIN

This project is a blockchain-based savings account system deployed on the Internet Computer Protocol (ICP) platform. Users can register, log in, deposit funds, and check their account balances. All user data and transactions are securely recorded on the blockchain using the Motoko programming language.

## Features

- **User Registration**: Create an account by providing your name, phone number, and password.
- **Secure Login**: Authenticate using your phone number and password.
- **Deposit Funds**: Add money to your savings account.
- **Balance Inquiry**: Check your current account balance.
- **Blockchain Storage**: All operations are securely stored and processed on the blockchain.

## Installation

1. **Prerequisites**:
   - Install [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/quickstart/dfx-quickstart/).
   - Ensure you have a working Motoko development environment.

2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

3. **Deploy the Canister**:
   ```bash
   dfx start --background
   dfx deploy
   ```

## Usage

### Register a User
```bash
// Example Call
await UserAccount.register("Alice", "1234567890", "password123");
```
- **Parameters**:
  - `name` (Text): Full name of the user.
  - `phone` (Text): Phone number as a unique identifier.
  - `password` (Text): Password for secure login.
- **Response**:
  - Success: "Registration successful"
  - Failure: "Account already exists"

### Log In
```bash
// Example Call
await UserAccount.login("1234567890", "password123");
```
- **Parameters**:
  - `phone` (Text): Registered phone number.
  - `password` (Text): Password.
- **Response**:
  - Success: "Login successful"
  - Failure: "Incorrect password" or "Account not found"

### Deposit Funds
```bash
// Example Call
await UserAccount.deposit("1234567890", 500);
```
- **Parameters**:
  - `phone` (Text): Registered phone number.
  - `amount` (Nat): Amount to deposit.
- **Response**:
  - Success: "Deposit successful"
  - Failure: "Account not found"

### Check Balance
```bash
// Example Call
await UserAccount.checkBalance("1234567890");
```
- **Parameters**:
  - `phone` (Text): Registered phone number.
- **Response**:
  - Returns the current balance (Nat).

## Code Overview

### Structure
- **`register`**: Registers a new user and initializes their balance to 0.
- **`login`**: Authenticates a user by matching their phone number and password.
- **`checkBalance`**: Retrieves the balance of the user.
- **`deposit`**: Adds the specified amount to the user’s balance.

### Dependencies
- **`HashMap`**: Used to store user data in a key-value format.
- **`Result`**: Handles success and error states.
- **`Option`**: Manages optional values for safe access.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue to discuss what you’d like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [DFINITY Foundation](https://dfinity.org/) for the ICP platform.
- The developers of the Motoko language.

