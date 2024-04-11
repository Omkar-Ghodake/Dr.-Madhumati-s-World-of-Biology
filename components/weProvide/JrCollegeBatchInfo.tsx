import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Clock } from 'lucide-react'
import { BatchInfoType } from '@/types/componentTypes'
import { cn } from '@/lib/utils'

const JrCollegeBatchInfo: BatchInfoType = ({
  cardTitle,
  cardDesc,
  eduBoards,
  eduSubjects,
  timings,
  className,
}) => {
  return (
    <Card className={cn('shadow-lg', className)}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription className='md:text-base'>{cardDesc}</CardDescription>
      </CardHeader>

      <CardContent className='flex items-start space-x-5'>
        <div className='w-1/2 h-36 md:h-[17vh] bg-secondary p-2 md:p-5 rounded-lg'>
          <strong>Boards</strong>
          <ul className=''>
            {eduBoards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='w-1/2 h-36 md:h-[17vh] bg-secondary p-2 md:p-5 rounded-lg'>
          <strong>Subject(s)</strong>
          <ul>
            {eduSubjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <strong className='flex justify-center items-center space-x-2'>
          <span>
            <Clock />
          </span>
          <span>Timings</span>
          <span>:</span>
        </strong>
        <p>&nbsp;{timings}</p>
      </CardFooter>
    </Card>
  )
}

export default JrCollegeBatchInfo
