Crosshairs = function (mouseInAction, mouseOutAction) {
	this.targets = document.getElementsByClassName('ch-target');

	Array.prototype.forEach.call(this.targets, function (item) {

		let cornerTopLeft = document.createElement('div');
		cornerTopLeft.classList.add('ch-corners', 'ch-corner-top-left');
		item.appendChild(cornerTopLeft);

		let cornerTopRight = document.createElement('div');
		cornerTopRight.classList.add('ch-corners', 'ch-corner-top-right');
		item.appendChild(cornerTopRight);

		let cornerBottomLeft = document.createElement('div');
		cornerBottomLeft.classList.add('ch-corners', 'ch-corner-bottom-left');
		item.appendChild(cornerBottomLeft);

		let cornerBottomRight = document.createElement('div');
		cornerBottomRight.classList.add('ch-corners', 'ch-corner-bottom-right');
		item.appendChild(cornerBottomRight);

		if (isFunction(mouseInAction))
			item.onmouseenter = () => mouseInAction();
		if (isFunction(mouseOutAction))
			item.onmouseleave = () => mouseOutAction();
	});
}
