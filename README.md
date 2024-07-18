# BTCPay Web Application Billing Dashboard

This is a web application for managing BTCPay store subscriptions. Users can log in using their email, Telegram, or Lightning credentials. The application facilitates subscription management, store management, credit handling, and notifications through an intuitive web interface.

## Features

- **User Authentication**
  - Login with Email, Telegram, or Lightning
- **Dashboard**
  - Centralized dashboard with user information, subscription status, and store details
- **Subscription Management**
  - Monthly subscription options
  - Subscription details, renewal, and cancellation
- **Store Management**
  - Add credits, manage apps, switch stores, and buy more stores
- **Credits and Payments**
  - Add and manage credits
  - Generate and display invoices
- **Notifications and Reminders**
  - Reminders for upcoming subscription expirations
  - Notifications for successful payments and renewals
- **Admin Panel**
  - Manage users, subscriptions, and stores
  - Generate reports and analytics

## Installation

1. **Clone the repository**

    ```bash
    git clone git@github.com:yourusername/btcpay-web-app.git
    cd btcpay-web-app
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following content:

    ```env
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    BTCPAY_SERVER_URL=https://your-btcpay-server-url.com
    BTCPAY_API_KEY=your_btcpay_api_key
    PRICE_EUR=10.0
    ```

4. **Run the application**

    ```bash
    npm run dev
    ```

## Usage

- **Register and login**: Users can register and log in using their email.
- **Subscribe**: Users can subscribe to a BTCPay store and receive an invoice.
- **Manage store**: Users can add credits, manage apps, switch stores, and buy more stores.
- **Admin panel**: Admins can manage users, subscriptions, and stores.

## License

This project is licensed under the MIT License.
