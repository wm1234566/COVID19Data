import express, {Express,Router,Request,Response} from "express";
import axios from "axios"
const app:Express=express();

const router:Router=express.Router();

app.all("*",(req, res, next)=>{

    ///console.log("到跨域阶段--->", req.url, "《----");

        // 不同端口，和协议都可以跨域

            // 注意 发送的时候也要开启cookie
            // var xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;
            //允许跨域携带cookie
            res.setHeader("Access-Control-Allow-Credentials", "true");
            // 对应的响应头
            res.setHeader("Access-Control-Allow-Origin","*");
            // 服务器接受的方法
            res.setHeader(
                "Access-Control-Allow-Methods",
                "POST, GET, OPTIONS, DELETE, PUT"
            );
            // 允许发送请求的字段
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
            );
            if (req.method === "OPTIONS") {
                res.send(200); /*让options请求快速返回*/
            }
            {
                next();
            }


})

router.get("/api/list", async (req, res, next)=>{

   let result=await axios.post("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf");

   res.json({ ...result.data.data})
})

app.use(router);

app.listen(3001,()=>{
    console.log("success server http://localhost:3001'")
})