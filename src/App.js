import React from "react";
import { withRouter } from "utils";

function App({ children }) {
	return (
		<>
			{children}
		</>
	);
}

export default withRouter(App);
