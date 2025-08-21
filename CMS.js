// contact management system (CMS)
// what do we need ? 
// 1. A way to add new contacts
// 2. A way to view existing contacts   
// 3. A way to search for contacts
// 4. A way to delete contacts
// 5. A way to update existing contacts
const prompt = require ('prompt-sync')();
function Printinfo() {
   console.log("Contact Management System");
   console.log("============================");
   console.log("1. Add Contact");
   console.log("2. View Contacts"); 
   console.log("3. Search Contact");
   console.log("4. Delete Contact");
   console.log("Exit");
}
   function AddContact() {
    console.log("Add Contact");
    const name = prompt("Enter contact name: ");
    const email = prompt("Enter contact email: ");
    const phone = parseInt(prompt("Enter contact phone: "));
    if(isNaN(phone)){
        console.log("Invalid phone number. Please enter a valid number.");
        return; // Exit the function if phone is invalid
    }
    const contact = {
        name: name,
        email: email,
        phone: phone
    };
    contacts.push(contact);
    console.log("Contact added successfully!");
   }

   function ViewContacts(contacts) {
    console.log("View Contacts");
    if (contacts.length === 0) {
        console.log("No contacts available.");
        return;
    }
    for(let contact of contacts) {
        console.log('-----------------------');
        console.log('ID:' + (contacts.indexOf(contact) + 1));
        console.log ('Name: ' + contact.name);
        console.log ('Email: ' + contact.email);        
        console.log ('Phone: ' + contact.phone);
        console.log('-----------------------');
    }
}
    function SearchContact() {
        const SearchString = prompt("ENter the search keyword: ").toLowerCase();
        const results = [];
        for (let contact of contacts) {
            if (contact.name.toLowerCase().includes(SearchString) || 
                contact.email.toLowerCase().includes(SearchString) || 
                contact.phone.toString().includes(SearchString)) {
                results.push(contact);
            }
            ViewContacts(results);
        }
    }
    function DeleteContact() {
        for (let i = 0; i < contacts.length; i++){
            console.log(('contact ID: ').toString + (i+1) + '- ' + contacts[i].name);
            const contact = contacts[i];
        const contactId = parseInt(prompt('Enter the contact ID to delete: '));
        if(isNaN(contactId) || contactId < 1 || contactId > contacts.length) {
            console.log("Invalid contact ID. Please try again.");
            return
        }
        contact.splice(contactId -1, 1); // Remove the contact from the array
        console.log("Contact deleted successfully!");
    }
}

const contacts = [];
let keepRunning = true; // Flag to control the loop
Printinfo() // Print the menu options

while (keepRunning) {
    const number = prompt("Enter a operation number(1-5): ");
    switch (number) {
        case '1':
            AddContact()
            // Code to add a contact goes here
            break;
        case '2':
            ViewContacts(contacts);
            // Code to view contacts goes here
            break;
        case '3':
            SearchContact();
            // Code to search for a contact goes here
            break;
        case '4':
            DeleteContact();
            // Code to delete a contact goes here
            break;
        case '5':
            keepRunning = false; // Set the flag to false to exit the loop
            console.log("Exit");
            return; // Exit the loop and program
        default:
            console.log("Invalid choice, please try again.");
            Printinfo();
            break;
     }
}