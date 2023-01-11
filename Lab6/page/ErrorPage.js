import { useRouteError } from "react-router-dom";

import Card from "../UI/Card";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <Card>
            <main>
                <h1>Oooops!</h1>
                <p>Shos' pishlo nie tak</p>
                <p>{error.statusText ?? error.message}</p>
            </main>
        </Card>
    );
};