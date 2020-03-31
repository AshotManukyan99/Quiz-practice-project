import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter as Switch, Route} from "react-router-dom";
import Quiz from "./container/Quiz/Quiz";
import Auth from "./container/Auth/Auth";
import QuizCreator from "./container/QuizCreator/QuizCreator";
import QuizList from "./container/QuizList/Quizlist";

function App() {
    return (
        <>
            <Layout>
                <Switch>
                    <Route  exact path={"/quiz"} component={Quiz} />
                    <Route  exact path={"/auth"} component={Auth} />
                    <Route  exact path={"/quiz-creator"} component={QuizCreator} />
                    <Route  exact path={"/quizList"} component={QuizList} />
                </Switch>
            </Layout>

        </>

    );
}

export default App;