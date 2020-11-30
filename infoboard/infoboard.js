Infoboard = function (containerId, ...items) {
	this.container = document.getElementById(containerId);
	this.container.classList.add("infoboard")
	this.items = items;
	const me = this;
	items.forEach(item => {
		const itemName = item[0];
		const initialValue = item[1] == null ? "" : item[1];

		let itemElem = document.createElement('div');
		itemElem.classList.add('infoboard-item');

		let labelElem = document.createElement('span');
		labelElem.classList.add("infoboard-label");
		labelElem.innerText = itemName + ": ";
		itemElem.appendChild(labelElem);

		let valueElem = document.createElement('span');
		valueElem.classList.add("infoboard-value");
		itemElem.appendChild(valueElem);

		me["get" + itemName] = function () { return valueElem.innerText };
		me["set" + itemName] = function (val) { valueElem.innerText = val };

		me["set" + itemName](initialValue);
		me.container.appendChild(itemElem);
	});
}
