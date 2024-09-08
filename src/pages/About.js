import React, {useState} from 'react';
import Footer from '../Footer';
import './About.css';
import NavBar from '../NavBar';

const About =()=> {

  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(1);

  return(
    <>

        <NavBar/>

        <div className='infoPageContainer col-md-12'>
            <div className='i1'>
              <ul>
                <div onClick={()=>{setPage(1)}}>
                  <li>
                      <a href='#/about/ISKCON' style={{}}>ISKCON</a>
                  </li>
                </div>
                <div onClick={()=>{setPage(2)}}>
                  <li>
                      <a href='#/about/OurMission'>Our Mission</a>
                  </li>
                </div>
                <div onClick={()=>{setPage(3)}}>
                  <li>
                      <a href='#/about/FounderAcharya'>Founder Acharya</a></li>
                </div>
              </ul>

            </div>

            {(page ==1) &&
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
            }

            {(page ==2) &&
            <div className='i2'>
              <div>
                <h1 style={{color:'#60349e',fontSize:'35px'}}>Our Mission</h1>
              </div> 
              <ol> 
                <p>When Prabhupada began the International Society for Krishna Consciousness (in New York City in 1966), he formulated a clear mission statement. Thus the 7 Purposes of ISKCON are as follows:</p>
                <li>To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world.</li>
                <li>To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, Bhagavad-gita and Srimad-Bhagavatam.</li>
                <li>To bring the members of the liociety together with each other and nearer to Krishna, the prime entity, thus developing the idea within the members, and humanity at large, that each soul is part and parcel of the quality of Godhead (Krishna).</li>
                <li>To teach and encourage the sankirtana movement, congregational chanting of the holy name of God, as revealed in the teachings of Lord Sri Caitanya Mahaprabhu.</li>
                <li>To erect for the members and for society at large a holy place of transcendental pastimes dedicated to the personality of Krishna.</li>
                <li>To bring the members closer together for the purpose of teaching a simpler, natural way of life.</li>
                <li>With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, magazines, books and other writings.</li>
              </ol>  
            </div>
            }

            {(page ==3) &&
            <div className='i2'>
              <div>
                <h1 style={{color:'#60349e',fontSize:'35px'}}>Founder Acharya</h1>
              </div>  
                <p><u>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</u></p>
                <img src="Prabhupada_with_children.jpg" className='Prabhupada' alt="Srila Prabhupada" />
                <p>His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, Founder-Acharya of International Society for Krishna Consciousness (ISKCON), was born Abhay Charan De, on the 1 September 1896, in Calcutta. In 1922 he met His Divine Grace Bhaktisiddanta Sarasvati Thakur, Founder of Gaudiya Math, who requested Abhay to broadcast Vedic knowledge in the English medium. In 1933, at Allahabad, Abhay was formally initiated and made it his life ambition to expound the Vedic conclusion that real freedom means liberation from the miseries of material life : birth, death, old age and disease, a state that can be permanently attained by awakening one’s pure love for God, Krishna-prema or Krishna-bhakti.</p>
                <p>In the ensuing years Abhay Charanaravinda (his initiated name), wrote a commentary on the Bhagavad-gita. In 1944 he started the Back to Godhead magazine, which to this day is being continued by his disciples.</p>
                <p>In recognition of his philosophical knowledge and devotion the Gaudiya Vaishnava Society honored him with the title Bhaktivedanta in 1947. Following his retirement from married life, A.C. Bhaktivedanta traveled to Vrindavan where he lived in the humble surrounding of the Radha Damodar temple. In 1959 he took the sannyasa order of life and, as A.C. Bhaktivedanta Swami, started his work on the multi-volume translation and commentary of the 18,000 verse Srimad Bhagavatam. In 1965, at the age of 69, when ordinary persons are thinking of retirement, he went to the United States to fulfill the mission of his spiritual master and founded ISKCON.</p>
                <p>He brought to the West the divine teachings of Lord Caitanya Mahaprabhu who taught the public glorification of Hare Krishna mantra. Srila Prabhupada, (as he was affectionately called by his followers), taught on a non-sectarian level that every living being is an eternal servant of Lord Krishna with a dormant natural propensity to experience the eternal bliss of pure love of God.</p>
            </div>
            }
        </div>
        <Footer/>
    </>
  );
}

export default About;