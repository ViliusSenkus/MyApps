import {BrowserRouter, Route, Router} from 'react-router-dom';

const Content = () => {
    return (
        <BrowserRouter>
            <Route path="/pages" component={Pages} />
            <Route path="/cv" component={CV} />
            <Route path="/blog" component={Blog} />
            <Route path="/more" component={MoreToCome} />
        </ BrowserRouter>
    )
}

export default Content;