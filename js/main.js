var scheme1 = {
			name: 'Gate',
			type: 'XOR',
			children: [{
				name: 'Gate',
				type: 'AND',
				children: [{
					name: 'Switch',
					type: 'ON',
					state: 1
				}, {
					name: 'Switch',
					type: 'OFF',
					state: 0
				}]
			}, {
				name: 'Gate',
				type: 'NOT',
				children: [{
					name: 'Switch',
					type: 'ON',
					state: 1
				}]
			}]
		},

		scheme2 = {
			name: 'Gate',
			type: 'AND',
			children: [{
				name: 'Gate',
				type: 'OR',
				children: [{
					name: 'Switch',
					type: 'ON',
					state: 1
				}, {
					name: 'Gate',
					type: 'XOR',
					children: [{
						name: 'Switch',
						type: 'OFF',
						state: 0
					}, {
						name: 'Gate',
						type: 'NOT',
						children: [{
							name: 'Switch',
							type: 'ON',
							state: 1
						}]
					}]
				}]
			}, {
				name: 'Gate',
				type: 'NOT',
				children: [{
					name: 'Switch',
					type: 'ON',
					state: 1
				}]
			}]
		},

		scheme3 = {
			name: 'Gate',
			type: 'XOR',

			children: [{
				name: 'Gate',
				type: 'NOT',
				children: [{
					name: 'Switch',
					type: 'OFF',
					state: 0
				}]
			}, {
				name: 'Gate',
				type: 'OR',
				children: [{
					name: 'Gate',
					type: 'OR',
					children: [{
						name: 'Switch',
						type: 'OFF',
						state: 0
					}, {
						name: 'Gate',
						type: 'AND',
						children: [{
							name: 'Switch',
							type: 'OFF',
							state: 0
						}, {
							name: 'Switch',
							type: 'ON',
							state: 1
						}]
					}]
				}, {
					name: 'Switch',
					type: 'OFF',
					state: 0
				}]
			}]
		};

var scheme4 = {
			name: 'Gate',
			type: 'XOR',

			children: [{
				name: 'Gate',
				type: 'NOT',
				children: [{
					name: 'Switch',
					type: 'OFF',
					state: 0
				}]
			}, {
				name: 'Gate',
				type: 'OR',
				children: [{
					name: 'Gate',
					type: 'OR',
					children: [{
						name: 'Switch',
						type: 'OFF',
						state: 0
					}, {
						name: 'Gate',
						type: 'AND',
						children: [{
							name: 'Switch',
							type: 'OFF',
							state: 0
						}, {
							name: 'Switch',
							type: 'ON',
							state: 1
						}]
					}]
				}, {
					name: 'Switch',
					type: 'OFF',
					state: 0
				}]
			}]
		};

function geat(child){
		var result;
		if (child.name == "Switch") {
			result = child.state;
		} else {
			switch (child.type){
				case "AND":
				result = geat(child.children[0]) && geat(child.children[1]);
				break;
				case "OR":
				result = geat(child.children[0]) || geat(child.children[1]);
				break;
				case "XOR":
				result = geat(child.children[0]) ^ geat(child.children[1]);
				break;
				case "NOT":
				result = !geat(child.children[0]);
				break;
			}
	}
		return result;
	}

console.log("Scheme4 = "+(geat(scheme4) ? "Лампочка горит" : "Лампочка не горит"));
console.log("Scheme2 = "+(geat(scheme2) ? "Лампочка горит" : "Лампочка не горит"));
console.log("Scheme1 = "+(geat(scheme1) ? "Лампочка горит" : "Лампочка не горит"));