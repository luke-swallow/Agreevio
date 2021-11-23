import Figure from 'react-bootstrap/Figure'

function HomePage() {
  return (
    <div>
      <div>
        <p>
          Search and analyze user agreements.
          Find which companies are misusing your data and impeding on your privacy rights.
        </p>
      </div>
      <div>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt=""
          src="holder.js/171x180"
        />
      </Figure>
      </div>
    </div>
  )
}

export default HomePage;