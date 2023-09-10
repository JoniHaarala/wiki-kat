import { Suspense } from 'react'
import { Similar } from '../Similar'
import { Information } from '../Information'
import CircularProgress from '@mui/material/CircularProgress';

type ParamsProps = {
  params: {
    id: string
  }
}
export default function page({ params }: ParamsProps) {
  console.log(params.id)
  return (
    <Suspense fallback={<CircularProgress size={200} />}>
      <Information />
      <Similar />
    </Suspense>
  )
}
