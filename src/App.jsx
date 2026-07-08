import Topbar from "./components/Topbar/Topbar";
import BottomNav from "./components/BottomNav/BottomNav";
import styles from "./App.module.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import { useState } from "react";

import Dashboard from "./pages/Dashboard/Dashboard";
import Members from "./pages/Members/Members";
import MemberDetails from "./pages/MemberDetails/MemberDetails";
import AddMember from "./pages/AddMember/AddMember";
import PaymentList from "./pages/PaymentList/PaymentList";
import PaymentRecord from "./pages/PaymentRecord/PaymentRecord";
import BranchManagement from "./pages/BranchManagement/BranchManagement";
import StaffManagement from "./pages/StaffManagement/StaffManagement";
import Settings from "./pages/Settings/Settings";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PlansManagement from "./pages/PlansManagement/PlansManagement";
import CreatePlan from "./pages/CreatePlan/CreatePlan";
import CreateBranch from "./pages/CreateBranch/CreateBranch";
import LandingPage from "./pages/LandingPage/LandingPage";
import { AppLayout, WebLayout } from "./components/Layouts/Layouts";
import AddStaff from "./pages/AddStaff/AddStaff";
import NavigationHandler from "./functions/NavigationHandler";



function App() {
	return (
		<BrowserRouter>
			<NavigationHandler />
			<Routes>
				<Route path="/">
					<Route path="/" element={<WebLayout />}>
						<Route index element={<Navigate to="web" replace />} />
						<Route path="web" element={<LandingPage />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="forgot-password" element={<ForgotPassword />} />
					</Route>
					<Route path="/app" element={<AppLayout />}>
						<Route index element={<Navigate to="dashboard" replace />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="members" element={<Members />} />
						<Route path="member-details" element={<MemberDetails />} />
						<Route path="add-member" element={<AddMember />} /> 
						<Route path="payments" element={<PaymentList />} />
						<Route path="branchs" element={<BranchManagement />} />
						<Route path="create-branch" element={<CreateBranch />} />
						<Route path="settings" element={<Settings />} />
						<Route path="staff-management" element={<StaffManagement />} />
						<Route path="add-staff" element={<AddStaff />} />
						<Route path="plans-management" element={<PlansManagement />} />
						<Route path="settings" element={<PaymentRecord />} />
						<Route path="payment-record" element={<PaymentRecord />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
