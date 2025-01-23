import conf from "./config";
import {Client ,Databases,ID, Query, Storage} from "appwrite"
export class Service{
     client=new Client()
     databases;
     bucket;
     constructor(){
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.appwrite_project)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

     }
    async createPost({title,content,status,featureImage,userID,slug})
    {
        try {
         return await this.databases.createDocument(
            conf.appwrite_database,
            conf.appwrite_collection,
            slug,
            {
                title,
                content,
                status,
             featureImage,
             userID,


            }
         )        
        } catch (error) {
            console.error(message);
            toastify.error(message)
        }

    }
     async  updatepost(slug,{title,content,featureImage,userID,status}){
        try {
            await this.databases.updateDocument(
                conf.appwrite_database,
                conf.appwrite_bucket,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log(error)
        }

     }
     async deletepost(slug){
try {
await this.databases.deleteDocument(    conf.appwrite_database,
        conf.appwrite_collection,
        slug,
)
return true
    } 
catch (error) {
console.log(error);
return false
}
}
async getPost(slug){
    try{
    await this.databases.getDocument(
        conf.appwrite_database,
        conf.appwrite_collection,
        slug,
    )
    return true
    }
    catch(error){
        console.error(message,"getpost error");

    }
}
async getPosts(querires=[Query.equal("status","active")]){
    try {
        await this.databases.listDocuments(
            conf.appwrite_database,
            conf.appwrite_collection,
            querires
        )
    } catch (error) {
        console.log(error,"getposts");
    }

}
async uploadfile(file){
    try {
       return await this.bucket.createFile(
            conf.appwrite_bucket,
            ID.unique(),
            file,

        )
    } catch (error) {
console.error(message)        
    }
}
async deleteFile(fileid){
    try {
        return await this.bucket.deleteFile(
            conf.appwrite_bucket,
            fileid
        )
    } catch (error) {
        console.error(message);
    }
}
getFilepreview(fileid){
    return this.bucket.getFilePreview(
        conf.appwrite_bucket,
        fileid,
    )
}
}