import React from 'react';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import  Questions  from '../../components/reusable/Questions/Questions';
 import  Process from '../../components/reusable/Process/Process';
 import Price from '../../components/reusable/Price/Price';
 import NewsletterSection from '../../components/reusable/Newsletter/NewsletterSection';

 
 import { 
     mentStudentArr, 
     heroObjTwo, 
     infoObjOne, 
     mentoringCardArr, 
     titleObjOne, 
     mentPriceArr,
     mentQuestionsArr,
     processArrMent,
     mentPrice
} from './Data';

function Mentoring({showNewsletter}) {
    showNewsletter = false; 
    
    return (
        <div>
            <Hero {...heroObjTwo} />
            <Info {...infoObjOne}/>
            <InfoCards data={mentoringCardArr} {...titleObjOne} />
            <Student data={mentStudentArr} {...titleObjOne} />
            <Process data={processArrMent} />
            <Price data={mentPriceArr} {...titleObjOne} {...mentPrice} />
            {showNewsletter &&
            <NewsletterSection/>
            }
            <Questions data={mentQuestionsArr} {...infoObjOne}/>
        </div>
    )
}

export default Mentoring;
