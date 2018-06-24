const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class ContactList {
	constructor(filename){
		this.list = [];
		this.filename = filename;
	}

	addContact(contact){
		if(contact instanceof Contact){
			this.list.push(contact);
		}
	}

	load(fileload){
		this.list=[];
	var readfilest = readFile('./' + fileload,"utf8");
	readfilest.then((data)=>{
	const readfilej =JSON.parse(data);
	let newcontacts = new ContactList(fileload);
	readfilej.forEach(element => {
	let newcon = new Contact(element.name, element.age);
	newcon.addPhone(element.phoneNumber);
	newcontacts.addContact(newcon);
	newcon.call();
	newcon.birthday();
									});
	console.log(newcontacts);
							})
	}
	save(){
		return writeFile(this.filename, JSON.stringify(this.list), "utf8");
	}
};

module.exports = ContactList;