
export function ShowProjects(projects, params, setNextData, setPrevData, setAtEnd, setAtStart) {
        const currentProject = projects.find((el)=>el.id === params)
        const indexCurr = projects.indexOf(currentProject)
        const nextProject = projects[indexCurr+1]
        const prevProject = projects[indexCurr-1]
        setPrevData(prevProject)
        const lastArrayIndex = projects.length - 1
        if(indexCurr - 1 < 0) {
            setAtStart(true)
        } else {
            setAtStart(false)
        }
        if (indexCurr == lastArrayIndex){
            setAtEnd(true)
        } else {
            if( prevProject == undefined ) {
            } else {
                setPrevData(prevProject)
            }
            setNextData(nextProject)
            setAtEnd(false)
        }
        return currentProject
}
