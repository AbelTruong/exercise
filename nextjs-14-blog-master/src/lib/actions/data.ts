import { ConnectToDb } from "../config/db";
import { BlogModel } from "../models/blog.model";
import { UserModel } from "../models/user.model";

export const getBlogs=async ()=>{
    try {
        ConnectToDb();
        const blogs=await BlogModel.find();
        return blogs;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch blogs");
    }
}
export const getBlogByName=async (name:String)=>{
    try {
        ConnectToDb();
        const blog=await BlogModel.findOne({name});
        return blog;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch blog by its name");
    }
}
export const getUsers=async ()=>{
    try {
        ConnectToDb();
        const users=await UserModel.find()
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}
export const getUserById=async (id:String)=>{
    try {
        ConnectToDb();
        const user=await UserModel.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user by its Id");
    }
}