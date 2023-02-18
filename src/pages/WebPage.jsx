
import { PagesContainer } from '../components/Pages'
import WebProject from '../components/WebProject'

function WebPage() {

    return (
        <PagesContainer>
            <WebProject 
                 />
                 {/* 
                    id={dataProject.id}
                name={dataProject.name}
                description={dataProject.description}
                opinion={dataProject.opinion}
                technologies={dataProject.technologies}
                */ }
        </PagesContainer>
    )
}

export default WebPage