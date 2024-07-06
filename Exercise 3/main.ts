let personName :string ="Nosheen Asim"
console.log("Lowercase:",personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, c=> c.toLocaleUpperCase()));


