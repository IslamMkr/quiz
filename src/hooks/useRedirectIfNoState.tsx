import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const useRedirectIfNoState = (redirectTo: string = "/") => {
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (!location.state) {
			navigate(redirectTo, { replace: true })
		}
	}, [location.state, navigate, redirectTo])
}

export default useRedirectIfNoState
