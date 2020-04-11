import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./container/Quiz/Quiz";
import Auth from "./container/Auth/Auth";
import QuizCreator from "./container/QuizCreator/QuizCreator";
import QuizList from "./container/QuizList/Quizlist";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path={"/"}> <Quiz/> </Route>
                    <Route exact path={"/quiz/:id?"}> <Quiz/> </Route>
                    <Route exact path={"/auth"}> <Auth/> </Route>
                    <Route exact path={"/quiz-creator"}> <QuizCreator/> </Route>
                    <Route exact path={"/quiz-list"}><QuizList/></Route>
                </Switch>
            </Layout>
        </Router>
    );
}

