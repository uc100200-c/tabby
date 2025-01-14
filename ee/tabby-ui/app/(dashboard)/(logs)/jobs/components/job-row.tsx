'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import humanizerDuration from 'humanize-duration'
import { isNil } from 'lodash-es'
import moment from 'moment'
import { useQuery } from 'urql'

import { listJobRuns, queryJobRunStats } from '@/lib/tabby/query'
import { cn } from '@/lib/utils'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import LoadingWrapper from '@/components/loading-wrapper'
import { ListRowSkeleton } from '@/components/skeleton'

function JobAggregateState({
  count,
  activeClass,
  tooltip
}: {
  count?: number
  activeClass: string
  tooltip: string
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(
              'flex h-8 w-8 cursor-default items-center justify-center rounded-full',
              {
                [activeClass]: count,
                'bg-muted text-muted': !count
              }
            )}
          >
            {count || ''}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function JobRunState({ name }: { name: string }) {
  const [{ data, fetching }] = useQuery({
    query: queryJobRunStats,
    variables: {
      jobs: [name]
    }
  })
  return (
    <LoadingWrapper
      loading={fetching}
      fallback={<ListRowSkeleton className="w-1/3" />}
    >
      <div className="flex items-center gap-3">
        <JobAggregateState
          count={data?.jobRunStats.success}
          activeClass="bg-green-700 text-xs text-white"
          tooltip="Success"
        />
        <JobAggregateState
          count={data?.jobRunStats.pending}
          activeClass="bg-blue-700 text-xs text-white"
          tooltip="Pending"
        />
        <JobAggregateState
          count={data?.jobRunStats.failed}
          activeClass="bg-red-700 text-xs text-white"
          tooltip="Failed"
        />
      </div>
    </LoadingWrapper>
  )
}

export default function JobRow({ name }: { name: string }) {
  const RECENT_DISPLAYED_SIZE = 10

  const [{ data, fetching }] = useQuery({
    query: listJobRuns,
    variables: {
      last: RECENT_DISPLAYED_SIZE,
      jobs: [name]
    }
  })

  const edges = data?.jobRuns?.edges
  const displayJobs = useMemo(() => {
    return edges?.slice().reverse()
  }, [edges])
  const lastJob = displayJobs?.[0]
  const lastFinishedJob = displayJobs?.find(job => Boolean(job.node.finishedAt))
  const lastSuccessAt = lastFinishedJob
    ? moment(lastFinishedJob.node.finishedAt).format('YYYY-MM-DD HH:mm')
    : null
  return (
    <LoadingWrapper
      loading={fetching}
      fallback={
        <TableRow>
          <TableCell colSpan={4}>
            <ListRowSkeleton />
          </TableCell>
        </TableRow>
      }
    >
      <TableRow className="h-16">
        <TableCell className="font-bold">{name}</TableCell>
        <TableCell>
          <div className="grid grid-cols-5 flex-wrap gap-1.5  xl:flex">
            {displayJobs?.map(job => {
              const { createdAt, finishedAt } = job.node
              const startAt =
                createdAt && moment(createdAt).format('YYYY-MM-DD HH:mm')
              const duration: string | null =
                (createdAt &&
                  finishedAt &&
                  humanizerDuration.humanizer({
                    language: 'shortEn',
                    languages: {
                      shortEn: {
                        d: () => 'd',
                        h: () => 'h',
                        m: () => 'm',
                        s: () => 's'
                      }
                    }
                  })(
                    moment
                      .duration(moment(finishedAt).diff(createdAt))
                      .asMilliseconds(),
                    {
                      units: ['d', 'h', 'm', 's'],
                      round: true,
                      largest: 1,
                      spacer: '',
                      language: 'shortEn'
                    }
                  )) ??
                null

              let displayedDuration = ''
              if (duration !== null) {
                const isSecond = duration.endsWith('s')
                if (isSecond) {
                  displayedDuration = duration
                } else {
                  const unit = duration.charAt(duration.length - 1)
                  const roundNumber = parseInt(duration) + 1
                  displayedDuration = roundNumber + unit
                }
              }

              return (
                <TooltipProvider delayDuration={0} key={job.node.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`/jobs/detail?id=${job.node.id}`}
                        className={cn(
                          'flex h-8 w-8 items-center justify-center rounded text-xs text-white hover:opacity-70',
                          {
                            'bg-blue-700': isNil(job.node.exitCode),
                            'bg-green-700': job.node.exitCode === 0,
                            'bg-red-700': job.node.exitCode === 1
                          }
                        )}
                      >
                        {displayedDuration}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      {startAt && <p>{startAt}</p>}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
        </TableCell>
        <TableCell>
          <Link
            href={`/jobs/detail?id=${lastJob?.node.id}`}
            className="flex items-center underline"
          >
            <p>{lastSuccessAt}</p>
          </Link>
        </TableCell>
        <TableCell>
          <JobRunState name={name} />
        </TableCell>
      </TableRow>
    </LoadingWrapper>
  )
}
