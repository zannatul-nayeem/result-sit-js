var mark =prompt("Enter Your Mark");

if ( mark <= 100 && mark >= 80){
document.write('<h2>A+</h2>');
}else if ( mark <= 79 && mark >= 75){
document.write('<h2>A</h2>');
}else if ( mark <= 74 && mark >= 65){
document.write('<h2>A-</h2>');
}else if ( mark <= 64 && mark >= 55){
document.write('<h2>B</h2>');
}else if ( mark <= 54 && mark >= 45){
document.write('<h2>C</h2>');
}else if ( mark <= 44 && mark >= 40){
document.write('<h2>D</h2>');
}else if ( mark <= 39){
	document.write('<h2>Fail</h2>');
}else{
	document.write('<h2>Invalid</h2>');
}
