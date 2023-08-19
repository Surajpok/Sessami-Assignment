import Card from './components/card'
import { cards, headings } from './constants';

const App = () => {
  return (
    <>
      
      <div className='m-9 '>
        <div className='w-90 justify-center'>
          {headings.map((heading) => (
            <h1 key={heading.key} className='text-left text-2xl ss:text-3xl sm:text-4xl font-bold uppercase'>{heading.title}</h1>
          ))}
          <div className='grid xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 pt-10'>
            {cards.map((card) => (
              <Card key={card.id} icon={card.icon} title={card.title} country={card.country} content={card.content} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App