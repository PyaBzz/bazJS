Infoboard = function (containerId, ...items) {
	this.container = document.getElementById(containerId);
	this.container.classList.add("infoboard")
	this.items = {};
	const me = this;
	items.forEach(item => {
		const itemKey = item[0];
		const initialValue = item[1] == null ? "" : item[1];

		let itemElem = document.createElement('div');
		itemElem.classList.add('infoboard-item');

		let labelElem = document.createElement('span');
		labelElem.classList.add("infoboard-label");
		labelElem.innerText = itemKey + ": ";
		itemElem.appendChild(labelElem);

		let valueElem = document.createElement('span');
		valueElem.classList.add("infoboard-value");
		itemElem.appendChild(valueElem);

		me.items[itemKey] = {};
		me.items[itemKey].get = function () { return valueElem.innerText };
		me.items[itemKey].set = function (val) { valueElem.innerText = val };

		me.items[itemKey].set(initialValue);
		me.container.appendChild(itemElem);
	});
}

Infoboard.prototype.get = function (key) {
	return this.items[key].get();
}

Infoboard.prototype.set = function (key, value) {
	return this.items[key].set(value);
}
