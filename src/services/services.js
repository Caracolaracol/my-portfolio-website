import db from '../db/db.json'

export const getProjects = async (type) => {
    if (type === 'PostProjects') {
        const  { PostProjects } =  db
        return PostProjects
    }
    if (type === 'WebProjects') {
        const  { WebProjects } = db
        return WebProjects
    }
}   

export const getSingleWebProject = async (params) => {
    const { WebProjects } = db
    const data = WebProjects.find((el)=>el.id === params)
    return data

}

export const getObsidianProject = async () => {
    const { WebProjects } = db
    const data = WebProjects.find(el => el.id === 'obsidian')
    return data
}

export const getNextProject = async (id) => {
    const { WebProjects } = db 
    const currentProject = WebProjects.find((el)=>el.id === id)
    const indexCurr = WebProjects.indexOf(currentProject)
    let data =  WebProjects[indexCurr+1]
    console.log(data)
    return data
    
}