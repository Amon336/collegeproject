import React, { useState } from 'react';
import './App.css';
import headerlogo from './img/Implement.png';
import planet from './img/planett.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import Typewriter from "typewriter-effect";


const App = () => {
  const [lang, setLang] = useState('en');
  const [barsStyle, setBarsStyle] = useState({ display: 'block' });
  const [xMarkStyle, setXMarkStyle] = useState({ display: 'none' });
  const [menuStyle, setMenuStyle] = useState({ maxHeight: 0 });
  const [animation, setAnimation] = useState({transform:'scale(0.5 , 0.5)'})
  const [upbtnanimation , setPos] = useState({bottom : '-100px'})
  let [aboutusinfo, SetInfo] = useState({
    icons : ["fa fa-light fa-graduation-cap", "bi bi-lightning","bi bi-code-slash"],
    texts : [
            'We are college students at AITU and are pleased to inform you that now we can implement ideas both inside and outside the college' ,            
            'Our team consists of different directions in the IT field, which helps the club to function properly. Our team will expand in order to implement your ideas.',
            'Ideas are born from the students of our college, and from the members of the club, if they do not have the strength to implement their project, we are ready to help your endeavors.'
          ]
  })

  let info_ = aboutusinfo.icons.map((item, index) => {
    return (
      <div className="info center" style={window.innerWidth > 1200 && window.innerWidth < 2000 ? animation : {}} key={index}>
        <div className="center icon">
          <i className={item}></i>
        </div>
        <p>
          {aboutusinfo.texts[index]}
        </p>
      </div>
    );
  });

  const blockanimation = {transform:'scale(1 , 1)'}

  const changeRU = () => {
    setLang('ru');
    SetInfo({
      icons: ["fa fa-light fa-graduation-cap", "bi bi-lightning", "bi bi-code-slash"],
        texts : [
          'Мы являемся студентами колледжа AITU и рады сообщить вам, что теперь мы можем реализовывать идеи как внутри колледжа, так и за его пределами',
          'Наша команда состоит из представителей разных направлений в сфере информационных технологий, что помогает клубу функционировать должным образом. Наша команда будет расширяться, чтобы реализовать ваши идеи.',
          'Идеи рождаются как у студентов нашего колледжа, так и у членов клуба, если у них нет сил реализовать свой проект, мы готовы помочь вашим начинаниям.'
        ]
    });
  };

  const changeEN = () => {
    setLang('en');
    SetInfo({
      icons: ["fa fa-light fa-graduation-cap", "bi bi-lightning", "bi bi-code-slash"],
        texts : [
          'We are college students at AITU and are pleased to inform you that now we can implement ideas both inside and outside the college',
          'Our team consists of different directions in the IT field, which helps the club to function properly. Our team will expand in order to implement your ideas.',
          'Ideas are born from the students of our college, and from the members of the club, if they do not have the strength to implement their project, we are ready to help your endeavors.'
        ]
    })
  };

  const handleScroll = () => {
    if (window.innerWidth > 1000 && window.innerWidth < 2000 && window.scrollY > 400) {
      setAnimation({ transform: 'scale(1 , 1)' });
    }else if(window.innerWidth > 1000 && window.innerWidth < 2000 && window.scrollY <= 400){
      setAnimation({transform:'scale(0.5, 0.5)'})
    }
  };
  useEffect(() => {window.addEventListener('scroll', handleScroll);}, []);

  useEffect(() => {
    let allinfo = document.getElementsByClassName('info');
    if(window.innerWidth <= 800){
      for(let i = 0; i < allinfo.length; i++){
        allinfo[i].classList.add('wow', 'fadeInDown');
      }
    }
  }, []);

  const displaybars = () => {
    setBarsStyle({ display: 'block' });
    setXMarkStyle({ display: 'none' });
    setMenuStyle({ maxHeight: 0 });
  };

  const displayx = () => {
    setBarsStyle({ display: 'none' });
    setXMarkStyle({ display: 'block' });
    setMenuStyle({ maxHeight: '256px' });
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 600) {
        setPos({ bottom: '30px' });
      } else {
        setPos({ bottom: '-100px' });
      }
    };

    window.addEventListener('scroll', handlescroll);

    handleScroll();
  } , [])

  return (
    <>
      <header id='header'>
        <section className="fixedmenu">
          <nav className="display-flex justify-around">
            <div className="display-flex align-items-center adaptivemenu">
              <div className="burgermenu">
                <i
                  className="fa fa-solid fa-bars-staggered"
                  style={barsStyle}
                  onClick={displayx}
                ></i>
                <i
                  className="fa fa-solid fa-x"
                  style={xMarkStyle}
                  onClick={displaybars}
                ></i>
              </div>
              <a href="#" className="adaptivelogo">
                <img src={headerlogo} />
              </a>
            </div>
            <div className="display-flex menu" style={menuStyle}>
              <div className="buttonssecond display-flex adaptive">
                <button
                  style={{
                    borderRadius: '8px 0 0 8px',
                    borderRight: 'none',
                  }}
                  onClick={changeRU}
                >
                  Ru
                </button>
                <button
                  style={{
                    borderRadius: '0 8px 8px 0',
                    borderLeft: 'none',
                  }}
                  onClick={changeEN}
                >
                  En
                </button>
              </div>
              <a href="#aboutus">{lang === 'ru' ? 'О нас' : 'About us'}</a>
              <a href="#goals">{lang === 'ru' ? 'Наши цели' : 'Our goals'}</a>
              <a href="#suggestion">{lang === 'ru' ? 'Предложения' : 'Suggestions'}</a>
              <div className="buttons display-flex">
                <button
                  style={{
                    borderRadius: '8px 0 0 8px',
                    borderRight: 'none',
                  }}
                  onClick={changeRU}
                >
                  Ru
                </button>
                <button
                  style={{
                    borderRadius: '0 8px 8px 0',
                    borderLeft: 'none',
                  }}
                  onClick={changeEN}
                >
                  En
                </button>
              </div>
            </div>
          </nav>
        </section>
        <section className="display-flex justify-around started">
          <div className="texts">
            <div className="App">
                <Typewriter
            
                onInit={(typewriter)=> {
            
                typewriter
                .changeDelay(5)
                .typeString("Club for the implementation of all startups for our college")
                .start();
                }}
                />
            </div>
            <a href='#aboutus'>{lang === 'ru' ? 'Начать':'Get started'}</a>
          </div>
          <img src={planet}/>
        </section>
      </header>
      <main>
        <section className='aboutUs' id='aboutus'>
          <div className='display-flex center aboutusdivs wrap'>
            {info_}
          </div>
        </section>
          <section className='ourgoals center' id='goals'>
            <h1>{lang === 'ru' ? 'Наши цели':'Our goals'}</h1>
            <div className='radial'></div>
              <div className='goals display-flex wrap center'>
                <div className='display-flex flex-column'>
                  <h2 className='goalnumber'>1</h2>
                  <div className='center goal'>
                      <h3>{lang === 'ru' ? 'Развитие':'Development'}</h3>
                      <p style={{textAlign:'left'}}>
                        {lang === 'ru' ? 'Цель нашего клуба "implement club" стремиться постоянно развиваться в сфере айти. Наша цель брать разные заказы, чтобы приобретать опыт и улучшать свои навыки в различных областях IT-индустрии. Мы также стремимся к созданию сильной команды, способной справляться с любыми задачами и проектами. Наша цель - не только выполнение заказов, но и нахождение эффективных решений для наших клиентов, что бы иметь довольных клиентов и долгосрочные отношения с ними. Мы готовы использовать свои знания и опыт, чтобы помочь нашим клиентам в достижении их целей и росте бизнеса.':'The goal of our club "implementation club" is to strive to constantly develop in the field of IT. Our goal is to take different orders in order to gain experience and improve our skills in various areas of the IT industry. We also strive to create a strong team capable of coping with any tasks and projects. Our goal is not only to fulfill orders, but also to find effective solutions for our customers in order to have satisfied customers and long-term relationships with them. We are ready to use our knowledge and experience to help our clients achieve their goals and grow their business.'}
                      </p>
                  </div>
                </div>
                <div className='display-flex flex-column'>
                  <h2 className='goalnumber'>2</h2>
                  <div className='center goal'>
                      <h3>{lang === 'ru' ? 'Помощь':'Support'}</h3>
                      <p style={{textAlign:'left'}}>
                        {lang === 'ru' ? 'Цель нашего клуба помогать и поддерживать клиентов, коллег в их начинаниях в сфере информационных технологий. Мы стремимся предоставлять высококачественные услуги в различных областях IT, включая веб-разработку, мобильную разработку, разработку программного обеспечения и многое другое. Мы также постоянно ищем новые возможности для расширения наших знаний и навыков, чтобы улучшить качество наших услуг и оставаться на передовой технологического развития.' : 'The goal of our club is to help and support clients and colleagues in their endeavors in the field of information technology. We strive to provide high-quality services in various IT fields, including web development, mobile development, software development and much more. We are also constantly looking for new opportunities to expand our knowledge and skills in order to improve the quality of our services and stay at the forefront of technological development.'}
                      </p>
                  </div>
                </div>
                <div className='display-flex flex-column'>
                  <h2 className='goalnumber'>3</h2>
                  <div className='center goal'>
                      <h3>{lang === 'ru' ? 'Креативность':'Creativity'}</h3>
                      <p style={{textAlign:'left'}}>
                        {lang === 'ru' ? 'Поиск новых идей и решений, которые могут привести к созданию новых продуктов и сервисов, является важным аспектом развития любой компании. Также существует множество инновационных методов, которые помогают генерировать новые идеи и решения. Некоторые из этих методов включают brainstorming, дизайн-мышление, мозговой штурм и другие. Анализ конкурентов также является важным фактором. Анализ конкурентов может помочь выявить области, в которых необходимо усовершенствоваться, и определить новые продукты и сервисы, которые можно разработать.':
                        'The search for new ideas and solutions that can lead to the creation of new products and services is an important aspect of the development of any company. There are also many innovative methods that help generate new ideas and solutions. Some of these methods include brainstorming, design thinking, brainstorming, and others. Competitor analysis is also an important factor. Competitor analysis can help identify areas where improvement is needed and identify new products and services that can be developed.'
                        }
                      </p>
                  </div>
                </div>
              </div>
          </section>
      </main>
      <footer>
            <div className='left suggestion' id='suggestion'>
                <h1>{lang === 'ru' ? 'Вы так же можете предложить свою идею':'You can also suggest us a new idea'}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <section className='center realfoot'>
                <img src={headerlogo}/>
                <div className='socialnetworks display-flex'>
                  <a href='https://t.me/vspxd'><i className="bi bi-telegram"></i></a>
                  <a href='mailto:prvel549@gmail.com'><i className="bi bi-envelope-at-fill"></i></a>
                  <a href='https://wa.me/77761477599'><i className="bi bi-whatsapp"></i></a>
                </div>
            </section>
      </footer>
      <a href='#header' className='upbutton' style={upbtnanimation}><i className="bi bi-arrow-up"></i></a>
    </>
    );
}
export default App;