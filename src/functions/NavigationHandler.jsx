import { useEffect } from "react";
import { useNavigate } from "react-router";
import { SetNavigate } from "./NavigateTo";

export default function NavigationHandler() {
	const navigate = useNavigate();

	useEffect(() => {
		SetNavigate(navigate);
	}, [navigate]);

	return null;
}