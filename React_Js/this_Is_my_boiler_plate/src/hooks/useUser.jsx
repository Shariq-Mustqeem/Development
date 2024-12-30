import { useQuery } from "@tanstack/react-query";
import { user } from "../services/user.service";

const useUser = () => {
    const { data } = useQuery("user", user);
    return data;
};

export default useUser;
