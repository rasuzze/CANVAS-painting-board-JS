var ColorPalette = function(){
	this.canvas = document.getElementById('color');
	this.context = this.canvas.getContext('2d');
	this.pickedColor = {red:0, green:0, blue:0};
	this.build();
	this.canvas.addEventListener('click', this.onClick.bind(this));
}
ColorPalette.prototype.build = function(){
  var gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);
  gradient.addColorStop(0, 'rgb(255, 0, 0)');
  gradient.addColorStop(0.15, 'rgb(255, 0, 255)');
  gradient.addColorStop(0.32, 'rgb(0, 0, 255)');
  gradient.addColorStop(0.49, 'rgb(0, 255, 255)');
  gradient.addColorStop(0.66, 'rgb(0, 255, 0)');
   gradient.addColorStop(0.83, 'rgb(255, 255, 0)');
    gradient.addColorStop(1, 'rgb(255, 0, 0)');
this.context.fillStyle = gradient;
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
     var gradient2 = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
  gradient2.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient2.addColorStop(0.50, 'rgba(255, 255, 255, 0)');
  gradient2.addColorStop(0.50, 'rgba(0, 0, 0, 0)');
  gradient2.addColorStop(1, 'rgba(0, 0, 0, 1)');
 this.context.fillStyle = gradient2;
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}
ColorPalette.prototype.onClick = function(event){
	var location;
	var rectangle;
	rectangle = this.canvas.getBoundingClientRect();
	location = {
		x: event.clientX - rectangle.left,
		y: event.clientY - rectangle.top,
	}

	var palette = this.context.getImageData(location.x, location.y, 1, 1);
	
	this.pickedColor.red = palette.data[0];
	this.pickedColor.green = palette.data[1];
	this.pickedColor.blue = palette.data[2];
	// console.log(palette);

}
ColorPalette.prototype.getPickedColor = function(){
	return this.pickedColor;
}

