import './App.css';
import React, { useState}  from 'react';
import header from './header.png';
import edit2 from './edit2.png';
import icon1 from './icon1.png';
import zeptoLogo from './zeptoLogo.png';
import pattern1 from './pattern1.png';
import pattern2 from './pattern2.png';
import axios from 'axios';


function App() {
  
  const [tuitionFee,setTuitionFee] = useState("");

  const getDataFromApi = () => {
    fetch("https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab")
    .then((response) => response.json())
    .then((data) => {
      setTuitionFee({tuitionFee:data.scholarship.tuition});
    });
    console.log(tuitionFee);
    };


  return (
    <div className="App">
      <div className="AppNavigation">
        <img src={header} className="AppHeader"/>
      </div>
    
      <img src={icon1} className="AppIcon1"/>
    
      <span className="AppInteractionDesignText" style={{height:'96px',left:'13.89%',right:'55.56%',top:'261px'}}>
        Interaction Design Apprenticeship
      </span>
      <span className="SmallText1" style={{height:'64px',left:'13.96%',right:'55.49%',top:'405px'}}>
        A fully funded work-study program to launch your tech career 
      </span>
      <span className="SmallText2" style={{height: '160px',left: '13.89%',right: '55.56%',top:'509px'}}>
        Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship. 
      </span>
      <span className="SmallTextPosition">
          Position:
      </span>
      <span className="SmallText2" style={{height: '33px',left: '20.56%',right: '55.56%',top:'709px'}}>
         Marketing Performance      
      </span>

      <button className="ApplyButton" onClick={getDataFromApi}>
        <div>
          {tuitionFee ? (<span className="ApplyButtonText">
          Tuition Fee:{tuitionFee.tuitionFee}
        </span>)
        :(<span className="ApplyButtonText">
          Apply
        </span>)}
        </div>
      </button>
     
      <img alt="" className="ZeptolabLogo" src={zeptoLogo}/>
      <span className="SmallerText1" >
        Powered by:    
      </span>
      <span className="ZeptolabText" >
        Zeptolab 
      </span>
      <img src={pattern1} className="Pattern1"/>
      <div className="InfoRectangle1">
        
      </div>

      <span className="InforTableInnerText1">
          Application closes in
      </span>
      <span className="InforTableInnerText2">
          6 Day  :  22 Hrs  :  56 Min  :  13 Seg 
      </span>

      <div className="InfoRectangle2">
        
      </div>
     
    <span className="InforTableInnerTextSmaller1" style={{height: '49px',left: '59%',right: '92.03%',top:'535px'}}>
          Location
    </span>
    <span className="InforTableInnerTextSmaller2" style={{height: '49px',left: '59%',right: '92.03%',top:'580px'}}>
          Bangkok
    </span>

    <span className="InforTableInnerTextSmaller1" style={{height: '49px',left: '77%',right: '92.03%',top:'535px'}}>
          Duration
    </span>
    <span className="InforTableInnerTextSmaller2" style={{height: '49px',left: '77%',right: '19.03%',top:'580px'}}>
        1 Year
    </span>
    <span className="InforTableInnerTextSmaller2" style={{height: '49px',left: '77%',right: '9.03%',top:'603px'}}>
        Full-Time
    </span>


    <span className="InforTableInnerTextSmaller1" style={{height: '49px',left: '59%',right: '22.03%',top:'615px'}}>
          Start date
    </span>
    <span className="InforTableInnerTextSmaller2" style={{height: '49px',left: '59%',right: '19.03%',top:'660px'}}>
        30 June 2020
    </span>
    
    <span className="InforTableInnerTextSmaller1" style={{height: '49px',left: '77%',right: '2.03%',top:'615px'}}>
          End date
    </span>
    <span className="InforTableInnerTextSmaller2" style={{height: '49px',left: '77%',right: '9.03%',top:'660px'}}>
        3 Aug 2020
    </span>
              
    <img alt="" className="Pattern2" src={pattern2}/>
    <img alt="" className="Ellipse1" src={edit2}/>
    <span className="AboutTextHeader">
      About the apprenticeship
    </span>
          
    <span className="AboutText">
      Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  
    </span>

      </div>
  );
}

export default App;
