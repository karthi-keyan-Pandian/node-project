import express, {Application, json, Request, Response} from 'express'
import prisma from './prisma';
import { CreateBlogTypes } from './blog.types';
const app:Application = express();

app.use(express.json());

app.get('/users',(req:Request, res:Response)=>{
res.write("Hello World");
res.end();
})

app.get('/blogs',async(_req:Request, res:Response)=>{
    try{
    const blogs = await prisma.blogs.findMany();
    res.write(JSON.stringify(blogs))
    res.send({status:true,message:"blog created successfully"})
    }
    catch(error){
        res.end({error:true, message:"error occured"})
    }
})
app.post('/blogs/create', async(req: Request, res: Response)=>{
    const blogs:CreateBlogTypes = req.body
    try{
    const response = await prisma.blogs.create({data:{
        ...blogs
     }})
     res.write(JSON.stringify(response));
     res.send({status:true,message:"blog created successfully"});
    }
    catch(error){
        res.end({error:true, message:"error occured"})
    }
})
app.listen('4000',()=>{
    console.log("express start listen the server")
})