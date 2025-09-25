const readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
const fs = require("fs")

rl.question("Enter your name", (data) => {
	fs.appendFileSync("index.txt", data, "utf8")
})
