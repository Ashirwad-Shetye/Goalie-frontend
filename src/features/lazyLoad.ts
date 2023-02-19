import { lazy } from "react"
import TimelineCard from "../components/dashboard/timeline"
export function lazyLoad(path:string) {
    return lazy(() => {
        const promise = import(path)
            return promise
    })
}