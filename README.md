# 📞 Contact Management System (CMS) - Project-Based Learning 🚀
## 📋 Overview
This Contact Management System (CMS) is a command-line application built with Node.js that allows users to manage their contacts through a simple text-based interface. It demonstrates fundamental programming concepts including data structures, control flow, and user input handling. 👨‍💻

## ✨ Features
- ➕ Add New Contacts - Store contact information including name, email, and phone number

- 👀 View All Contacts - Display all saved contacts in a formatted list

- 🔍 Search Contacts - Find contacts by name, email, or phone number

- 🗑️ Delete Contacts - Remove contacts from the system by ID

- 🚪 Exit Application - Cleanly terminate the program

# 🛠️ Implementation Steps
🎯 Step 1: Project Setup</br>
- ✅ Initialized a Node.js project

- 📦 Installed the prompt-sync package for user input handling

- 📁 Created the main application file (CMS.js)

🎨 Step 2: User Interface Design </br>
- 📱 Created a menu system with clear options

- 🔁 Implemented a continuous loop to keep the program running until explicitly exited

- ✅ Added input validation for phone numbers and menu selections

🗄️ Step 3: Data Structure Implementation
- 🗂️ Used an array to store contact objects

👤 Each contact object contains:

- 👤 Name (string)

- 📧 Email (string)

- 📞 Phone (number)

⚙️ Step 4: Core Functionality
- ➕ Add Contact Function

- ⌨️ Collects user input for contact details

- ✅ Validates phone number format

- 🆕 Creates a contact object and adds it to the contacts array

- 👀 View Contacts Function

- 🔍 Checks if contacts exist

- 📋 Displays all contacts with formatted output

- 🆔 Shows each contact with a unique ID for reference

- 🔍 Search Contact Function

- 🔎 Accepts a search term from the user
 
- 🌐 Performs case-insensitive search across all contact fields

- 📊 Displays matching results using the View Contacts function

- 🗑️ Delete Contact Function

- 📝 Lists all contacts with their IDs

- ❓ Prompts user for the ID to delete

- ✅ Validates the ID and removes the contact from the array

🛡️ Step 5: Error Handling
- ⚠️ Added input validation for phone numbers

- 🚫 Implemented checks for invalid menu selections

- 🔒 Added safeguards against invalid contact IDs during deletion

# 🚀 How to Run
Ensure Node.js is installed on your system

Install the required dependency:

npm install prompt-sync

Run the application: node CMS.js

Follow the on-screen prompts to manage your contacts 📲

## 🎓 Learning Objectives
This project demonstrates:

🧮 Working with arrays and objects in JavaScript

🖥️ Implementing a text-based user interface

⌨️ Handling user input and validation

🧩 Creating modular functions for specific tasks

🔁 Implementing a continuous program loop with exit condition

⚠️ Basic error handling techniques

💡 Potential Enhancements
💾 Data persistence (saving contacts to a file)

📝 Additional contact fields (address, notes, etc.)

✏️ Contact editing functionality

🔍 Duplicate contact detection

📤 Export/import functionality

- This project serves as a foundation for understanding how to build interactive command-line applications and manage data in JavaScript.
