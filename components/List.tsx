import * as React from 'react'
import ListItem from './ListItem'
import { GithubRepos } from '../types'

type Props = {
  items: GithubRepos[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.name}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
