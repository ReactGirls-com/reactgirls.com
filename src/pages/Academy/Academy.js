import React from 'react';
import { Program }  from '../../components';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import  Questions  from '../../components/reusable/Questions/Questions';
 import  Process from '../../components/reusable/Process/Process';
 import Price from '../../components/reusable/Price/Price';
 import NewsletterSection from '../../components/reusable/Newsletter/NewsletterSection';

 import { 
    acadStudentArr, 
    academyCardArr, 
    heroObjThree, 
    infoObjTwo, 
    titleObjTwo, 
    acadPriceArr,
    programArr1,
    acadQuestionsArr,
    processArrAcad,
    acadPrice
    } from './Data';

function Academy({showProgramTable, showNewsletter}) {
    /* show or hide ProgramTable*/
    showProgramTable = true;  
    showNewsletter = false; 
    return (
        <>
            <Hero {...heroObjThree} />
            <Info {...infoObjTwo} />
            {showProgramTable &&
            <Program data={programArr1}/>
            }
            <InfoCards data={academyCardArr} {...titleObjTwo} />
            <Student data={acadStudentArr} {...titleObjTwo} />
            <Process data={processArrAcad} />
            <Price data={acadPriceArr} {...titleObjTwo} {...acadPrice} />
            {showNewsletter &&
            <NewsletterSection/>
            }
            <Questions data={acadQuestionsArr} {...infoObjTwo}/>
        </>
    )
}

export default Academy;
