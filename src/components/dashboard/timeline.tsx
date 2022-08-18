import React from 'react'
import { Timeline } from 'flowbite-react'

function TimelineCard() {
  return (
    <div className="mt-16 md:mt-14">
        <div className="text-2xl font-lato font-semibold mt-2 mb-3 ml-10 text-orange-500">Goal Timeline</div>
        <div className="justify-center w-full mx-auto align-middle h-80 px-12 overflow-x-clip lg: 
        overflow-scroll py-5 scrollbar-thin scrollbar-thumb-11 scrollbar-thumb-orange-400 scrollbar-track-transparent overflow-y-scroll
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full"> 
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        <div className="text-lg text-slate-600">
                            February 2022
                        </div>
                    </Timeline.Time>
                    <Timeline.Title>
                        Application UI code in Tailwind CSS
                    </Timeline.Title>
                    <Timeline.Body>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        <div className="text-lg text-slate-600">
                            March 2022
                        </div>
                    </Timeline.Time>
                    <Timeline.Title>
                        Marketing UI design in Figma
                    </Timeline.Title>
                    <Timeline.Body>
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        <div className="text-lg text-slate-600">
                            April 2022
                        </div>
                    </Timeline.Time>
                    <Timeline.Title>
                        E-Commerce UI code in Tailwind CSS
                    </Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        <div className="text-lg text-slate-600">
                            April 2022
                        </div>
                    </Timeline.Time>
                    <Timeline.Title>
                        E-Commerce UI code in Tailwind CSS
                    </Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    </div>
    
  )
}

export default TimelineCard