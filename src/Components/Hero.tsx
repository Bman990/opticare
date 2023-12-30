
import '/StyleSheet/Hero.css'
import bg2 from '/bgVid2.mp4'

export const Hero: React.FC = () => {
    return (
      <section className="heroContainer">
        <div className="heroContent">
            <div className='companyNameDiv'>
                <h1>OptiCare</h1>
                <h3>Seamless Customer Care Solutions.</h3>
            </div>
        </div>

        <video className="heroVideo" autoPlay loop muted>
          <source src={bg2} type="video/mp4" />
        </video>
      </section>
    );
  };