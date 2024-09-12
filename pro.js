function sendNotification(email) {
if(!email===email.includes("@")){
    return "Invalid Email"
}

let bridge = email.indexOf("@")

let storeUserName =[]

for ( let i = 0; i < bridge; i++ ){
    storeUserName.push(email[i])
    getName = storeUserName.join("")
}

let storeDomainName = []
for( let i = bridge +1 ; i<email.length; i++){
    storeDomainName.push(email[i])
    getDomainName = storeDomainName.join("")
    
}

return getName + " send a massage from "+ getDomainName


}

console.log(sendNotification("mrXyeahoo.com"))