const response =(statusCode,data,message,res)=>{
    res.json(

    {
        datas:data,
        payload:{
            statusCode:statusCode,
            message:message
        },
      
    }
)
}
export default response