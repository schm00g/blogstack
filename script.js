const writtenDate = new Date(2022, 2, 29);
const currentDate = new Date();
const diffTime = Math.abs(currentDate - writtenDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("date").innerHTML = "<span><b>" + diffDays  + " days ago</b></span>";
