import { useCallback, useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useAuth = () => {
	const [user, setUser] = useState(null)
	const [errMsg, setErrMsg] = useState('')

	const getToken = () => {
		const token = localStorage.getItem('authTokens')
		return token ? JSON.parse(token) : null
	}

	const [authToken, setAuthToken] = useState(getToken())

	// const fetchUserProfile = async () => {
	// 	try {
	// 		const response = await apiClient.get('/auth/users/me', {
	// 			headers: { Authorization: `JWT ${authToken?.access}` },
	// 		})
	// 		setUser(response.data)
	// 	} catch (error) {
	// 		console.log('Fetch user error', error)
	// 	}

	// }

	const fetchUserProfile = useCallback(async () => {
		try {
			const response = await apiClient.get('/auth/users/me', {
				headers: { Authorization: `JWT ${authToken?.access}` },
			})
			setUser(response.data)
		} catch (error) {
			console.log('Fetch user error', error)
		}
	}, [authToken])

	useEffect(() => {
		if (authToken) fetchUserProfile()
	}, [authToken, fetchUserProfile])

	const handleAPIError = (error, defaultMessage = 'Somethings went wrong!') => {
		if (error.response && error.response.data) {
			const errormsg = Object.values(error.response.data).flat().join('\n')
			setErrMsg(errormsg)
			return { success: false, message: errormsg }
		}
		setErrMsg(defaultMessage)
		return { success: false, message: defaultMessage }
	}

	// update user profile
	const updateUserProfile = async (data) => {
		setErrMsg('')
		try {
			await apiClient.put('/auth/users/me/', data, {
				headers: {
					Authorization: `JWT ${authToken?.access}`,
				},
			})
		} catch (error) {
			return handleAPIError(error)
		}
	}

	// password change
	const passwordChange = async (data) => {
		setErrMsg('')
		try {
			await apiClient.post('/auth/users/set_password/', data, {
				headers: {
					Authorization: `JWT ${authToken?.access}`,
				},
			})
		} catch (error) {
			return handleAPIError(error)
		}
	}

	// reset password
	const passwordReset = async (data) => {
		setErrMsg('')
		try {
			await apiClient.post('/auth/users/reset_password/', data)
			return {
				success: true,
				message: 'Reset E-mail send successfull. Check your E-mail.',
			}
		} catch (error) {
			console.log(error)
		}
	}

	// reset password confirm
	const passwordResetConfirm = async (data) => {
		setErrMsg('')
		try {
			await apiClient.post('/auth/users/reset_password_confirm/', data)
			return {
				success: true,
				message: 'Password Reset Successfull.',
			}
		} catch (error) {
			console.log(error)
		}
	}

	// resend activation email
	const ResendActivationEmail = async (data) => {
		setErrMsg('')
		try {
			await apiClient.post('/auth/users/resend_activation/', data)
			return {
				success: true,
				message: 'Activation mail send again successfull.',
			}
		} catch (error) {
			console.log(error)
		}
	}

	// login user
	const loginUser = async (userData) => {
		setErrMsg('')
		try {
			const response = await apiClient.post('/auth/jwt/create', userData)
			setAuthToken(response.data)
			localStorage.setItem('authTokens', JSON.stringify(response.data))

			//after login fetch user
			await fetchUserProfile()
		} catch (error) {
			setErrMsg(error.response.data?.detail)
		}
	}

	// Register user
	const registerUser = async (userData) => {
		setErrMsg('')
		try {
			await apiClient.post('/auth/users/', userData)
			return {
				success: true,
				message: 'Registration successfull. Check your email to activate your account.',
			}
		} catch (error) {
			return handleAPIError(error, 'Registration failed! Try Again.')
		}
	}

	const logoutUser = () => {
		setAuthToken(null)
		setUser(null)
		localStorage.removeItem('authTokens')
		localStorage.removeItem('cartId')
	}

	return {
		user,
		loginUser,
		errMsg,
		registerUser,
		logoutUser,
		updateUserProfile,
		passwordChange,
		passwordReset,
		passwordResetConfirm,
		ResendActivationEmail,
	}
}

export default useAuth
