import React from 'react';
import './timeline.css';
export default function Timeline() {
  return (
    <div>
      <h2>Working History</h2>
      <h1>Please view my work journey</h1>

      <div className='timeline'>
        <div className='timeline__event  animated fadeInUp delay-3s timeline__event--type1'>
          <div className='timeline__event__icon '>
            <i className='lni-sport'></i>
          </div>
          <div className='timeline__event__date'>September 2017</div>
          <div className='timeline__event__content '>
            <div className='timeline__event__title'>
              Nepal Bank Limited (intern)
            </div>
            <div className='timeline__event__description'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event animated fadeInUp delay-2s timeline__event--type2'>
          <div className='timeline__event__icon'>
            <i className='lni-sport'></i>
          </div>
          <div className='timeline__event__date'>June 2018</div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              NAV Sloution Pvt.Ltd(Receptionist)
            </div>
            <div className='timeline__event__description'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event animated fadeInUp delay-1s timeline__event--type3'>
          <div className='timeline__event__icon'>
            <i className='lni-sport'></i>
          </div>
          <div className='timeline__event__date'>October 2018</div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Al Ajeets Management and Outsourcing Pvt Ltd(Documentation)
            </div>
            <div className='timeline__event__description'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event animated fadeInUp timeline__event--type1'>
          <div className='timeline__event__icon'>
            <i className='lni-sport'></i>
          </div>
          <div className='timeline__event__date'>October 2020 till now </div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Lucky Hr Solution(Documentation Officer ){' '}
            </div>
            <div className='timeline__event__description'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event  animated fadeInUp delay-3s timeline__event--type1'>
          <div className='timeline__event__icon '>
            <i className='lni-sport'></i>
          </div>
          <div className='timeline__event__date'> 202..</div>
          <div className='timeline__event__content '>
            <div className='timeline__event__title'>waiting to come </div>
            <div className='timeline__event__description'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
