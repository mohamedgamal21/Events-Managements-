import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function ErrorPage() {
    const error = useRouteError();

    let title = 'An Error Occurred!';
    let message = "Something went wrong!"

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = "Page Not Found!";
        message = "Couldn't find the resource or page";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>
                    {message}
                </p>
            </PageContent>
        </>
    )
}  

export default ErrorPage;