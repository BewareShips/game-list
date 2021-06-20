import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyle from 'styles/GlobalStyles'
import GameInfo from 'components/GameInfo/GameInfo'

const App = (): ReactElement => (
	<div>
		<GlobalStyle />
		<Switch>
			<Route path="/game/:id" exact={true} component={GameInfo} />
			<Route path="/game" component={GameInfo} />
			<Route path="/" component={Home} />
		</Switch>
	</div>
)

export default App
