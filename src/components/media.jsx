import styled from 'styled-components';

const MediaCSS = styled.div`
    
  @media screen and (max-width: 1200px) {
    .header-content-initial .content .mission > span {
      font-size: 52px;
    }
    .header-content-panel .content .menu .item {
      font-size: 25px;
    }
  }
  
  @media screen and (max-width: 1100px) {
    .container .what-to-do-section .title {
      font-size: 26px;
    }
    .clients {
      padding-left: 0;
    }
    .clients > .contents .cl_logo {
      text-align: center;
    }
    .biglogo {
      width: 400px;
      height: 396px;
      background: url("/assets/images/logoV2.png");
    }
    footer {
      padding: 50px 20px;
    }
  }
  
  @media screen and (max-width: 1000px) {
    .about-clients .cl_logo {
      width: 40%;
    }
    .whoweare-container-about .value_statement_logos .logo {
      width: 40%;
      margin: 20px;
    }
    .quickfacts .facts {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .quickfacts .facts .fact {
      margin: 20px 0;
      width: 50%;
    }
    .whoweare-container-about > .image {
      height: 36%;
    }
  }
  
  @media screen and (max-width: 930px) {
    .header-content-panel .content .menu .item {
      font-size: 24px;
    }
  }
  
  @media screen and (max-width: 880px) {
    .header-content-initial .content .mission > span {
      display: inline-block;
    }
    .header-content-initial .content .mission {
      max-width: 500px;
      margin: 20px auto;
      text-align: center;
    }
    .header-content-initial .content .mission .tools {
      margin: 0 auto;
      text-align: center;
      font-size: 25px;
      max-width: 300px;
    }
    .header-content-initial .content .mission .btn-tools {
      margin: 20px auto;
      font-size: 20px;
      max-width: 225px;
      padding: 25px;
      border-radius: 40px;
    }
    .clients {
      margin-left: 0;
    }
    .clients > .contents .cl_logo {
      width: 40%;
    }
    .clients > .contents > .logos {
      max-width: 500px;
    }
    .header-content-initial > .content {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
          -ms-flex-direction: column-reverse;
              flex-direction: column-reverse;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .header-content-panel > .content {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
    .header-content-panel > .content .logo {
      -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
              order: 1;
    }
    .header-content-panel > .content .menu {
      -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
              order: 2;
      width: 328px;
      margin: 10px auto;
    }
    .header-content-panel > .content .contact {
      -webkit-box-ordinal-group: 4;
          -ms-flex-order: 3;
              order: 3;
      margin: 10px auto;
      text-align: left;
    }
    .clients > .header {
      margin-left: auto;
      margin-right: auto;
    }
    .clients > .contents > .logos {
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  @media screen and (max-width: 700px) {
    .second-button.about {
      margin: 0;
    }
    footer {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      height: 100%;
    }
    footer > div {
      width: 100%;
      margin: 20px 0;
      text-align: left;
    }
    .keep_in_touch {
      height: 120px;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
    }
    .container .bg-top-right {
      background-size: cover;
      position: absolute;
      z-index: 3;
      top: 630px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 70%;
      height: 600px;
    }
    .container .what-to-do-section-container {
      width: 100%;
      padding: 30px 0;
    }
    .container .what-to-do-section {
      width: 90%;
      margin-left: 0;
      margin-top: 30px;
    }
    .container .what-to-do-section .title {
      font-size: 40px;
    }
    .bg-left-what-to-do {
      display: none;
    }
    .container .bg-top-right {
      top: 500px;
      width: 97%;
    }
    .container .what-to-do-products-container {
      width: 90%;
      top: 730px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      margin-left: 15px;
    }
    .container .bg-top-right {
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .container .what-to-do-products-container {
      margin-left: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .clients {
      padding: 0;
    }
    .whoweare-container > .image-hexagone {
      width: 55%;
    }
    .container .what-to-do-section {
      margin-left: 10px;
    }
    .header-content-initial .content .mission > span {
      font-size: 40px;
    }
    .whoweare-container > .content .title {
      font-size: 30px;
    }
    .quickfacts .facts {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
    }
    .quickfacts .facts .fact, .quickfacts .facts .fact .image {
      width: 100%;
    }
    .quickfacts .facts .fact .shortdescription,
    .quickfacts .facts .fact .description {
      max-width: 100%;
      height: 100%;
    }
    .whoweare-container-about > .content {
      padding-right: 0;
    }
    .whoweare-container-about > .image {
      position: relative;
      width: 100%;
      height: 500px;
    }
    .whoweare-container-about > .image {
      right: 0;
    }
    .whoweare-container-about .value_statement{
      padding-bottom : 0;
    }
    .whoweare-container-about .value_statement_logos .logo .description{
      padding-right : 20px;
    }
    .whoweare-container-about .value_statement_logos{
      flex-direction: column;
    }
    .whoweare-container-about .value_statement_logos .logo {
      width: 100%;
      margin: 20px;
    }
  }
  
  @media screen and (max-width: 560px) {
    footer {
      padding: 50px 30px;
    }
    .clients > .contents .cl_logo {
      width: 50%;
      text-align: center;
    }
    .clients > .header {
      margin: 10px auto;
      width: 300px;
    }
    .clients > .header .title {
      margin: 20px auto;
      text-align: center;
      font-size: 15px;
    }
    .whoweare-container > .image {
      margin-left: 0;
      width: 100%;
      right: 0;
    }
    .whoweare-container > .content {
      width: 70%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: 300px;
    }
  }
  
  @media screen and (max-width: 500px) {
    .whoweare-container > .image-hexagone {
      top: 300px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .biglogo {
      width: 300px;
      height: 273px;
      background: url("/assets/images/logoV-small.png");
    }
    .about-clients .cl_logo {
      width: 100%;
      margin: 20px;
    }
    .whoweare-container-about .value_statement_logos .logo {
      width: 100%;
      margin: 20px;
    }
    .about-clients > .our_clients {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  
  @media screen and (max-width: 400px) {
    .clients > .contents .cl_logo {
      width: 100%;
      text-align: center;
    }
    .clients > .contents > .logos {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
    }
    .header-content-initial, .header-content-panel {
      padding: 0 10px;
    }
  }
  
  @media screen and (max-width: 300px) {
    .biglogo {
      width: 215px;
      height: 208px;
      background: url("/assets/images/logoV-verysmall.png");
    }
  }
`;

export default MediaCSS;