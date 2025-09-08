import { Skeleton } from "./ui/Skeleton"

export const SkeletonCard = () => {
    return (
        <div className="flex space-y-3">
            <Skeleton className="h-[297px] w-[295px]" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
            </div>
        </div>
    )
}