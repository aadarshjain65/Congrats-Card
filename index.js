const element = (
  <div className='congrats-card-container'>
    <h1 className='heading'> Congratulations </h1>
    <div className='congrats-card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='profile-image'
      />
      <p className='profile-name'> Kiran V </p>
      <p className='profile-description'> Vishnu Institute of Computer Education and Technology, Bhimavaram </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
