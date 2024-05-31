import UserService, { CreateUserPayload } from "../../services/user";
import { mutations } from "./mutation"

const queries = {}

const mutation = {
    createUser:async(_:any,payload:CreateUserPayload) => {
        const user = await UserService.createUser(payload);
        return user.id;
    } 
    
}

export const resolvers = {
    queries,
     mutation,
}