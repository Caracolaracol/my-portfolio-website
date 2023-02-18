import db from '../db/db.json'

export const getProjects = async (type) => {
    if (type === 'PostProjectsSection') {
        const  { PostProjects } =  db
        return PostProjects
    }
    if (type === 'WebProjectsSection') {
        const  { WebProjects } = db
        return WebProjects
    }
}   

export const getSingleWebProject = async (params) => {
    const { WebProjects } = db
    const data = WebProjects.find((el)=>el.id === params)
    return data

}
