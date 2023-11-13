import './heading.css'

const Heading = ({name, bio, imgSrc, profession}) => {

  return (
    <>
      <header className="data-container" >
        <h1>ATHLETE 019</h1>
        <div className='user-info-container'>
          <div className='img'><img src={imgSrc} alt="Athlete-Joshua" /></div>
        <div className='user-info'>
            <p>Full Name:</p>
            <p>Biographpy:</p>
            <br/><br/><br/><br/><br/><br/>
            <p>Profession:</p>
        </div>
        <div className='user-info2'>
            <p>{name}</p>
            <p>{bio}</p>
            <p>{profession}</p>
        </div>
        </div>
      </header>
    </>
  );
};

export default Heading;
