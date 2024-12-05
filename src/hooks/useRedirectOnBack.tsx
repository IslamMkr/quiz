import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useRedirectOnBack = (redirectTo: string = "/") => {
	const navigate = useNavigate()

	useEffect(() => {
		const handlePopState = () => {
			navigate(redirectTo, { replace: true })
		}

		window.addEventListener("popstate", handlePopState)

		return () => {
			window.removeEventListener("popstate", handlePopState)
		}
	}, [navigate, redirectTo])
}

export default useRedirectOnBack
