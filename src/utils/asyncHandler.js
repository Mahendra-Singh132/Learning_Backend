 const asyncHandler = (requestHandler) =>{

    Promise.resolve(requestHandler(req,res,next))
    .catch((err)=>next(err))
    
 }
export {asyncHandler}


















//const asyncHandler = (fn) =>{ }
//const asyncHandler = (fn) =>async (req,res,next) =>{}
//const asyncHandler = (fn) =>{   ()  =>   {}  }



// const asyncHandler = (fn) =>async (req,res,next) => {

//     try{

//     }catch(error)
//     {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }

// }