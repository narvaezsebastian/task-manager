import mongoose, {Schema, Document} from "mongoose";

export type ProjectType = Document & {
    
    projectName: String
    clientName: string
    description: string
}

const ProjectSchema: Schema = new Schema(
    {
        projectName: {
            type: String,
            requiered: true,
            trin: true
        },
        clientName: {
            type: String,
            requiered: true,
            trin: true
        },
        description: {
            type: String,
            requiered: true,
            trin: true
        }
    }
)

const Project = mongoose.model<ProjectType>(`Project`, ProjectSchema)
export default Project