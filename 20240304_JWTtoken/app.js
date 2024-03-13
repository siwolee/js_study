async function loginToken (state, val) {
	await axios.post(process.env.BACKEND_URL + '/api/users/login', val)
	.then( (res) => {
		localStorage.setItem('accessToken', res.data.data.accessToken)
		localStorage.setItem('refreshToken', res.data.data.refreshToken)
		localStorage.setItem('expiredTime', res.data.data.cur_time)
		axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken;
		
	},
	(error) => {}
	);



}