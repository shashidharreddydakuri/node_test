const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (function () {
	ac.grant('employee').readOwn('profile').updateOwn('profile');

	ac.grant('admin').extend('employee').readAny('profile');

	ac.grant('superadmin')
		.extend('employee')
		.extend('admin')
		.updateAny('profile')
		.deleteAny('profile');

	return ac;
})();
