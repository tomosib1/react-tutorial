import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function List() {
  const chemists = people.filter((person) => person.profession === 'chemist')
  const chemistListItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  const others = people.filter((person) => person.profession !== 'chemist')
  const otherItemList = others.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistListItems}</ul>
      <h1>Others</h1>
      <ul>{otherItemList}</ul>
    </article>
  )
}
