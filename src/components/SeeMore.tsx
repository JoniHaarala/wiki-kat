import Link from 'next/link'

export const SeeMore = () => {
  return (
    <div>
      <p>Most Searched Breeds</p>
      <h2>66+ Breeds For you to discover</h2>
      <Link href={`/BreedList`} />
    </div>
  )
}
