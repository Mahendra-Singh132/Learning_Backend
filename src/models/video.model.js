import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema= new Schema({
    vedioFile:{
        type:String, //cloudinary url
        required:true,
    },
    thumbnail:{
        type:String, //cloudinary url
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId, //cloudinary url
        ref:"User",
        required:true,
    },
    title:{
        type:String, 
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duration:{
            types:Number,
            required:true
    },
    views:{
        type:Number,
        default: 0
    },
    isPublished:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video",videoSchema);