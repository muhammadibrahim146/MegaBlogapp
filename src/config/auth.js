import conf from "./config";
import { Account, Client, ID } from "appwrite";
export class Auth{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.appwrite_project)
        this.account=new Account(this.client);

    }
    async createAccount({email,password,name}){

//this.account.create(ID.unique(),email,password,name)
try {
 const userAccount= await  this.account.create(ID.unique(),email,password,name)
if(userAccount){
    return this.login({email,password});
}
} catch (error) {
console.error("Account ",message)    
return null
}
}
async login({email,password}){
    try {
        return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        console.error("Login",message)
    }
}
async getCurrentUser(){
    try {
        return await this.account.get()
    } catch (error) {
        console.error("Get CurrentUser",error.message)

    }
    return null
}
 async  logout(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        console.error("logout",message);
    }

 }

    }
    const authSevice=new Auth();
    export default authSevice;
