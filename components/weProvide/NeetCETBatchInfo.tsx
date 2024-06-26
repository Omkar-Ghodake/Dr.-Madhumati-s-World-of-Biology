import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { NeetCETBatchInfoType } from '@/types/componentTypes'
import { Clock, Dot } from 'lucide-react'

const NeetCETBatchInfo: NeetCETBatchInfoType = ({
  cardTitle,
  cardDesc,
  programHighlights,
  batches,
  timings,
  className,
}) => {
  return (
    <Card className={cn('shadow-md md:shadow-lg md:min-h-96 h-fit', className)}>
      <CardHeader className='pb-3'>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription className='md:text-base'>{cardDesc}</CardDescription>
      </CardHeader>

      <CardContent className='flex items-start space-x-5'>
        {programHighlights && (
          <div className='overflow-y-auto h-full md:h-36 custom-scrollbar scrollbar-sm'>
            <ul className='list-disc'>
              {programHighlights.map((item) => (
                <li key={item} className='flex justify-start space-x-2'>
                  <span className='animate-pulse'>●</span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {batches &&
          batches.map((item) => (
            <div key={item.title} className='w-1/2 flex flex-col md:space-y-5'>
              <strong>{item.title}</strong>

              <div className='w-full h-fit bg-secondary p-2 md:p-5 rounded-lg'>
                <strong>Boards</strong>
                <ul className=''>
                  {item.eduBoards.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* <strong>Subject(s)</strong>
                <ul>
                  {item.eduSubjects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
      </CardContent>

      {timings && (
        <CardFooter className=''>
          <strong className='flex justify-center items-center space-x-2'>
            <span>
              <Clock />
            </span>
            <span>Timings</span>
            <span>:</span>
          </strong>
          <p>&nbsp;{timings}</p>
        </CardFooter>
      )}
    </Card>
  )
}

export default NeetCETBatchInfo
