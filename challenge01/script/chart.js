/*---- donut brandtsof ----- */

var ctx = document.getElementById('donutEersteChart').getContext('2d');
var donutEersteChart = new Chart(ctx, {
	 type: 'doughnut',
	 data: {
	 	labels: ["voedsel aanboard", "verbruikt voedsel"],
	 	datasets: [{
	 			label: " ",
	 			backgroundColor: ["pink", "red"],
	 			borderWidth: 0,
	 			borderColor: 'rgb(0,0,0)',   
	 			data: [30,60]
	 		}]
	 }, 
	

});


/*---- Line grafiek afstand ----- */

var ctx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mei", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dec"],
        datasets: [{
            label: "Afgelegde kilometers in duizendtallen",
            borderColor: 'pink',
            borderWidth: 1,
            data: [0, 25.000, 50.000, 100.000, 200.000, 300.000, 400.000],
            pointBackgroundColor: "red",
            pointRadius: 8

        }]
    },


});

var ctx = document.getElementById('donutTweedeChart').getContext('2d');
var donutEersteChart = new Chart(ctx, {
	 type: 'doughnut',
	 data: {
	 	labels: ["Brandstof aanwezig", "Brandstof verbruikt", "Brandstof voor nood"],
	 	datasets: [{
	 			label: " ",
	 			backgroundColor: ["pink", "red", "yellow"],
	 			borderWidth: 0,
	 			borderColor: 'rgb(0,0,0)',   
	 			data: [15,50,25]
	 		}]
	 }, 
	

});




	

