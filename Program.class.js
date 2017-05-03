var Program = function(){  //sukurem tevine klase (parent), padarem medzio struktura
	this.pen = new Pen();
	this.canvas = new Slate(this.pen);
	this.colorPalette = new ColorPalette();
}

Program.prototype.onClickPenColor = function(event){
	var color = event.currentTarget.dataset.color;
	this.pen.setColor(color);
	// console.log(this);
	// console.log(event);
}

Program.prototype.onClickPenSize = function(event) {
// console.log(event);
// console.log(this);
	this.size = event.currentTarget.dataset.size;
	this.pen.setSize(this.size);
}
Program.prototype.onClickColorPicker = function(){
	$('#color').fadeIn('fast');
}
Program.prototype.onPickColor = function(){
	var color = this.colorPalette.getPickedColor();
	color = 'rgb('+color.red +',' + color.green +',' +color.blue+')';
	this.pen.setColor(color);
	$('#color').fadeOut('slow');
}

Program.prototype.start = function(){
	$('#tool-clear-canvas').on('click', this.canvas.clear.bind(this.canvas));
	$('#tool-color-picker').on('click', this.onClickColorPicker);
	$('.pen-color').on('click', this.onClickPenColor.bind(this));
	$('.pen-size').on('click', this.onClickPenSize.bind(this));
	$('#color').on('click', this.onPickColor.bind(this));
	$('#save-image').on('click', this.canvas.saveImage.bind(this.canvas));
}