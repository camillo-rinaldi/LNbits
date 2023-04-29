# React PDF to CSV Converter with Bitcoin Lightning Network Payments

This repository contains the source code for a React-based web application that allows users to convert PDFs to CSV files using microtransactions on the Bitcoin Lightning Network as payment. The application is built using React, but you can implement a similar solution with any web framework or even without one.

## How It Works

### Lightning Network Integration

1. Set up a Lightning Network node using [Voltage](https://voltage.cloud). Upon creating your account, you will receive some free credits that you can use for a limited time. You don't need to set up a Node Core or BTC PayServer, only the Lightning Node.

2. Access your LNbits server from within the Lightning Node. LNbits provides an API that allows you to create invoices for payments and more.

3. Integrate LNbits with your application by setting up a Node.js server in the cloud. This server will handle the LNbits API requests and keep your credentials secure.

### Funding Your Node

Before you can receive payments, you need to deposit some satoshis into your Lightning Node to open at least one channel.

## Getting Started

Follow these steps to set up the React PDF to CSV Converter application with Bitcoin Lightning Network payments:

1. Clone the repository:

```
git clone https://github.com/camillo-rinaldi/LNbits.git
```

2. Change to the project directory:

```
cd LNbits
```

3. Install the dependencies:

```
npm install
```

4. Set up your Node.js server in the cloud (e.g., AWS, GCP, Heroku) to handle LNbits API requests securely.

5. Rename .env.example to .env and configure your environment variable to match your Node.js server and provided service url.

6. Configure your environment variables to match your Node.js server settings and LNbits credentials.

7. Start the React development server:

```
npm start
```

Now, you should have a running instance of the React PDF to CSV Converter application with Bitcoin Lightning Network payments integrated.

If you have any questions or need assistance, please feel free to ask.
