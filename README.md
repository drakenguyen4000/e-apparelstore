# eapparelstore - Online Store - MERN STACK 

### Project Description
- This store app allows users to create an account, make orders, make payments using a credit card, and review their order history.  
- This app uses React for it's frontend, Redux state management to store send/receive data with the server side, Node to handle orders on the backend, and MongoDB database to store accounts and order details.  

### My motivation for this app?  
- I wanted to challenge myself to build an app that used Redux state management. 

### Why build this project?
- I felt like an online shop would be a good app to try and build a full stack app that uses Redux.  Online stores require a frontend design to attract customers and a backend to handle orders and history.

### What did you learn?
- I learned how to implement Redux to manage state to handle online orders.  I also was able to hook up a credit card payment system to my online store.  

### What issues did I run into when building this app?  

#### Shopping Cart Problem 1: How to handle users adding and deleting items from a cart?  
- Solution: Initially I decided to have each item be stored in the backend but upon implementation did not seem feasible to store data in the back end when a user may not even make these purchases.  Backend should be for completed orders not items in a cart.  So I decided to keep it stored in state until the user completes and paid for the order.  This led to another problem.  
#### Shopping Cart Problem 2: When user browses to another page, the items in cart disappears because Redux state resets.  
- Solution: Solution was to use Redux Persist to save cartReducer in a persistant state so shopping cart data is not lost when browser reloads.  
 
### How to Install and Run the Project? 
1. Go to project on Github: https://github.com/drakenguyen4000/eapparelstores
2. You can download the zip file or forking.  
3. You will also need Node and Visual Studio Code installed.  
   - https://code.visualstudio.com/
   - https://nodejs.org/en/
4. Once you have the files, open them in Visual Studio Code, open your terminal, type "npm install".  This will install all node packages neccesary to run this app.  
5. To start app, while in the root directory in the terminal, run "npm run dev".  This will start both client and server of you app.