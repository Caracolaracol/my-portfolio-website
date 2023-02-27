
import * as Tooltip from '@radix-ui/react-tooltip';

function TechAndLinks(props) {


    return (
        <div className="tablet:flex tablet:justify-between ">
                        <div>
                            <h2 className='font-chrono text-[1.7rem]'>
                                Technologies i used
                            </h2>
                            <div key={props.tech} className='flex flex-wrap gap-3 transicioncorta'>
                                {
                                    props.tech.map(s => (
                                        <div key={s.idtech}>
                                            <Tooltip.Provider delayDuration='80' skipDelayDuration='120'>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild >
                                                        <img
                                                            key={s.idtech}
                                                            src={s.img}
                                                            width='40'
                                                            height='40'
                                                            rel="noreferrer noopener"
                                                            className="svg"


                                                        />
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Portal>
                                                        <Tooltip.Content className="TooltipContent" sideOffset={5} aria-label={s.description} side="bottom" >
                                                            <div className="rounded-sm bg-whitem max-w-lg ">
                                                                <p className="text-purpuralh px-3 py-2">{s.description}</p>
                                                            </div>
                                                            <Tooltip.Arrow className="TooltipArrow" />
                                                        </Tooltip.Content>
                                                    </Tooltip.Portal>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </div>))
                                }
                            </div>
                        </div>
                        <div className="pt-[1.4rem]">
                            <div className="flex justify-end">
                                <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={props.dataProject.github} target='_blank' >
                                    Github Repository
                                </a>
                            </div>
                            {props.dataProject.link ? <div className="flex justify-end">
                                <a className='font-tommyregular text-[1.2rem] text-naranja hover:text-naranjahover' href={props.dataProject.link} target='_blank' >
                                    Go to the site
                                </a>
                            </div> : null}

                        </div>
                    </div>
    )
}

export default TechAndLinks