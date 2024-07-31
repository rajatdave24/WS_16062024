import React, {useState} from 'react';
import Footer from '../Footer';
import './About.css';
import NavBar from '../NavBar';

const About =()=> {

  const [menu, setMenu] = useState(false);

  return(
    <>

        <NavBar/>

        <div className='infoPageContainer col-md-12'>
            <div className='i1'>
              <ul>
                <div>
                  <li>
                      <a href='#/about/ISKCON' style={{}}>ISKCON</a>
                  </li>
                </div>
                <div>
                  <li>
                      <a href='#/about/OurMission'>Our Mission</a>
                  </li>
                </div>
                <div>
                  <li>
                      <a href='#/about/FounderAcharya'>Founder Acharya</a></li>
                </div>
              </ul>

            </div>
        
            <div className='i2'>
              <div>
                <h1 style={{color:'#60349e',fontSize:'35px'}}>International Society for Krishna Consciousness</h1>
              </div>  
                <p>International Society for Krishna Consciousness, also popularly known as the Hare Krishna movement is a spiritual society founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in July 1966 in New York. ISKCON belongs to the Gaudiya-Vaishnava sampradaya, a monotheistic tradition within Vedic culture. Today ISKCON comprises of more than 400 temples, 40 rural communities and over 100 vegetarian restaurants. It also conducts special projects throughout the world, such as “Food for Life”, the only free vegetarian relief program in the world.</p>
                <p>The aim of ISKCON is to acquaint all people of world with universal principles of self-realization and God consciousness so that they may derive the highest benefit of spiritual understanding, unity and peace. The Vedic literature recommend that in the present age of Kali-yuga the most effective means of achieving self-realization is always hear about, glorify, and remember the all-attractive Supreme Lord Sri Krishna. Therefore, it recommends the chanting of the Holy Names: Hare Krishna Hare Krishna Krishna Krishna Hare Hare / Hare Rama Hare Rama Rama Rama Hare Hare. This sublime chanting puts the chanter directly in touch with the Supreme Lord through the sound vibration of His Holy Name.</p>
                <p>ISKCON follows the teachings of the Vedas and Vedic scriptures, including the Bhagavad-gita and Srimad Bhagavatam which teach Vaishnavism or devotion to God (Krishna) in His Supreme Personal aspect of Sri Sri Radha Krishna.</p>
                <p>These teachings are received through the preceptorial line known as the Brahma-Madhav-Gaudiya Vaishnava sampradaya. ISKCON is part of the disciplic succession which started with Lord Krishna Himself and continued with Srila Vyasadeva, Srila Madhavacharya, Sri Caitanya Mahaprabhu and in the present day His Divine Grace A. C. Bhaktivedanta Swami Prabhupada and his followers.</p>
                <p>ISKCON’s teachings are non-sectarian, following the principle of sanatana dharma or eternal religion, which denotes the eternal activity of all living beings – loving devotional service (bhakti-yoga) to Supreme Personality of Godhead.</p>

                <h1 style={{color:'#60349e',fontSize:'35px'}}>History of the Hare Krishna Movement</h1>
                <p>In 1965, at the age of 69, A. C. Bhaktivedanta Swami Prabhupada boarded the steamship ‘Jaladuta’ from Mumbai on his way to United States. At an age when most people think of retiring Srila Prabhupada undertook this arduous journey to fulfill the mission of Lord Caitanya and follow the instruction of his spiritual master Bhaktisiddhanta Saraswati Thakur to carry the message of Bhagavad-gita and Srimad Bhagavatam to Western world.</p>
                <p>After arriving in New York City in September 1965, Srila Prabhupada struggled alone for the first year to establish his Krishna conscious movement. He lived simply, lectured whenever and wherever he got the opportunity and gradually began to attract some small interest in his teaching. In July of 1966, while still working from an obscure storefront on New York City’s Lower East Side, Srila Prabhupada nonetheless founded a spiritual society intended for worldwide participation. He called it International Society for Krishna Consciousness or ISKCON for short and thus began the Hare Krishna movement in America.</p>
                <p>At the time of incorporation, Srila Prabhupada had not attracted even one committed follower. Undeterred, he enlisted volunteers from among the small group of regular attendees at his evening lectures to act as ISKCON’s first trustees. That was then. Today, ISKCON comprises of more than 400 temples worldwide, 40 rural communities and over 100 vegetarian restaurants. It also conducts special projects throughout the world, such as “Food for Life”, the only free vegetarian relief program in the world.</p>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default About;