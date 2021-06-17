import React, { ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyle from 'styles/GlobalStyles'

const App = (): ReactElement => (
	<>
		<GlobalStyle />
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	</>
)

export default App
