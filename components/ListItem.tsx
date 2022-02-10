import React from 'react'
import Link from 'next/link'

import { GithubRepos } from '../types'

type Props = {
  data: GithubRepos
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.name}`}>
    <a>
      {data.name}: {data.description}
    </a>
  </Link>
)

export default ListItem
