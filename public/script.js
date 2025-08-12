// no script tag needed
let presentAge = window.prompt("Enter your current age.", "13");
let maxAge = window.prompt("Enter your maximum age.", "100");
let= numPerDay = window.prompt("How many of your snack do you eat per day?" , "2");

let totalrequired = (numPerDay * 365) * (maxAge - presentAge);

if (confirm(`Is ${presentAge} your current age, ${maxAge} your maximum age, and ${numPerDay} really the amount of snack you eat per day?`))
{
    console.log(`Then You will need ${totalrequired} Biscoff Biscuits to last you until the ripe old age of ${maxAge} .`)
    document.write(`Then You will need ${totalrequired} Biscoff Biscuits to last you until the ripe old age of ${maxAge} .`)

}
else {
    alert("Run the code again");
}
