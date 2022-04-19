const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}
	return admins;
};
const userRoles = new Map();

userRoles.set('Rose', 'SUDO');
userRoles.set('Messias', 'ADMIN');
userRoles.set('Ellen', 'ADMIN');
userRoles.set('Neide', 'USER');
userRoles.set('Gabriel', 'USER');

console.log(getAdmins(userRoles));