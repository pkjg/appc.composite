module.exports = function(APIBuilder) {
	return APIBuilder.Model.extend('composite', {
		fields: {
			account: { type: Object, model: 'account' },
			contract: { type: Object, model: 'contract' }
		},
		connector: 'appc.composite',
		metadata: {
			'appc.composite': {
				left_join: {
					model: 'contract',
					readonly: true,
					join_properties: {
						'AccountId': 'id'
					}
				}
			}
		}
	});
};