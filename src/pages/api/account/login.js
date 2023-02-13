import { withSessionRoute } from "@/lib/ironsession/withSession";
import axios from "axios";

export default withSessionRoute(handleLogin());

async function handleLogin (user, pass) {
    try {
        return (await axios.post(
            `${window.location.origin}/api/mongo/login`,
            {
                username: user,
                password: pass,
            }
        )).status;

    } catch (error) {
        return error.response.status;
    }
}