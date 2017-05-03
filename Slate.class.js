var Slate = function(pen) {
	
	this.canvas = document.getElementById('slate');
	this.context = this.canvas.getContext('2d');
	this.currentLocation = null;   //prisiskiriam koordinates
	this.isDrawing = false;
	this.pen = pen;
	
	this.coord = new Array();
	//kai paspaudziam pele	
	this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));  
	//kai iseinam is elemento, issoka sitas event'as
	this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
	//kai atleidziam nuspausta pele
	this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));  
	this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
};
Slate.prototype.saveImage = function(){
	var image = this.canvas.toDataURL('image/png', 1).replace("image/png", "image/octet-stream");
	window.location.href = image;
	console.log(image);
}
//rasome nauja metoda, gaunam event'a.
//koordinates pasiekiam su event.clientX ir event.clientY
Slate.prototype.getMouseLocation = function(event){
	var location;
	var rectangle;
	rectangle = this.canvas.getBoundingClientRect();
	location = {
		x: event.clientX - rectangle.left,
		y: event.clientY - rectangle.top,
	}
	return location;
};
Slate.prototype.clear = function(){
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Slate.prototype.onMouseDown = function(event){
	this.isDrawing = true;
	this.currentLocation = this.getMouseLocation(event);
};
Slate.prototype.onMouseLeave = function(){
	this.isDrawing = false;
};
Slate.prototype.onMouseUp = function(){
	this.isDrawing = false;
};
Slate.prototype.saveCoord = function(){
	this.coord.push(location);
}
Slate.prototype.onMouseMove = function(event){
	var location;		
	location = this.getMouseLocation(event);		
	if(this.isDrawing==true){
		this.saveCoord(location);
		console.log(this.coord);

		this.context.beginPath();
		this.pen.configure(this.context);
		
		this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
		this.context.lineTo(location.x, location.y);
		this.context.closePath();
		this.context.stroke();
		this.currentLocation = location;
	}


};
