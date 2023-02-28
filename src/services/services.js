import db from '../db/db.json'
import entries from '../db/entries.json'
export const getProjects = async (type) => {
    if (type === 'PostProjects') {
        const  { PostProjects } =  db
        return PostProjects
    }
    if (type === 'WebProjects') {
        const  { WebProjects } = db
        return WebProjects
    }
    if(type === 'Entries') {
        const { Entries } = entries
        return Entries
    }
}   
