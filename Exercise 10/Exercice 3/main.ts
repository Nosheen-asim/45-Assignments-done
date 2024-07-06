let personName:string ="nosheen Asim"
console.log("Lowercase:",personName.toLowerCase())
console.log("Uppercase:",personName.toUpperCase())
console.log("Titlecase:",personName.replace(/\b\w/g, c=> c.toUpperCase()))