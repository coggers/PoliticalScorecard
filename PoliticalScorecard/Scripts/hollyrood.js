$(function () {
    var canvas = document.getElementById('benches');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 300;
        ctx.strokeStyle = '#ECECEC';
        ctx.shadowColor = '#08f';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.beginPath();
        var x = 500; // x coordinate
        var y = 500; // y coordinate
        var radius = 300; // Arc radius
        var startAngle = Math.PI; // Starting point on circle
        var endAngle = 0; // End point on circle
        var anticlockwise = 0 % 2 == 0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise); {
            ctx.stroke();
        }
    }
});