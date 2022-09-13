var data = {
    "name" : "Manuel Sadosky",
    "backImage": "https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-black-shading-red-shard-geometry-banner-background-shadingred-debrisred-glowgeometry-image_80184.jpg",
    "image": "https://i2.wp.com/imagenes.milenio.com/E-yJnq9EhkZhWaU7T_2utkyTymQ=/958x596/smart/https://www.milenio.com/uploads/media/2018/10/05/steve-jobs-perdio-vida-consecuencia_0_199_1193_742.jpg?w=640&ssl=1",
    "position" : "informático",
    "company" : {
      "name": "CONICET",
      "img": "https://es.wikipedia.org/wiki/Consejo_Nacional_de_Investigaciones_Cient%C3%ADficas_y_T%C3%A9cnicas_(Argentina)#/media/Archivo:Conicet_Logo_con_letras.png",
      "url" : "#"
    },
    "school": {
      "name": "Universidad de Buenos Aires",
      "img": "https://es.wikipedia.org/wiki/Universidad_de_Buenos_Aires#/media/Archivo:UBA.svg",
      "url": "#"
    },
    "ubication" : "Buenos Aires (Argentina) ",
    "about": "Matemático, físico e informático argentino considerado por muchos como el padre de la computación en la Argentina.",
    "experience": [
      {
        "position": "Backend Developer",
        "company": "Pixar",
        "img": "https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154?e=1637798400&v=beta&t=gyinTA0GPG1xIBDPj01L33mQHcdOdyMOdpoRHY640Pc",
        "mode": "Jornada parcial",
        "start": "mar 2019",
        "end": "actualidad",
        "timeElapsed" : "2 años y 6 meses"
      }
    ],
    "education": [
      {
        "school": "UTN",
        "title": "Ingeniería",
        "img": "https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg",
        "career": "Sistemas Computacionales",
        "score": 0,
        "start": "2019",
        "end": "2023"
      },
      {
        "school": "Centro de Enseñanza Técnica Industrial",
        "title": "Tecnologo",
        "img": "https://media-exp1.licdn.com/dms/image/C560BAQEUHhax7RCj0A/company-logo_100_100/0/1584819716706?e=1637798400&v=beta&t=4UkXYz39PCtn4PqDYbwXZNWPSC3MgoHckfDfqQLBlHc",
        "career": "Desarrollo de Software",
        "score": 82,
        "start": "2014",
        "end": "2018"
      },
      {
        "school": "Escuela Secundaria Técnica 14",
        "title": "Técnico",
        "img": "https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154?e=1637798400&v=beta&t=gyinTA0GPG1xIBDPj01L33mQHcdOdyMOdpoRHY640Pc",
        "career": "Electronica, comunicacion y sistemas de control",
        "score": 0,
        "start": "2012",
        "end": "2014"
      }
    ],
    "aptitudes": [
      {
        "name": "Resolución de problemas",
        "progress": 75,
        "confirms": 2,
        "confirmsNames": [
          {
            "name": "Nikolai Emmanuel Bayro Jablonski"
          }
        ]
      },
      {
        "name": "Diseño de Sistemas",
        "confirms": 3,
        "confirmsNames": [
          {
            "name": "Nikolai Emmanuel Bayro Jablonski"
          }
        ]
      }
    ],
    "achivements": [
      {
        "name": "Huaro App"
      },
      {
        "name": "Lanterns 19/09"
      }
    ]
  
  
};
updateView(); 

function updateView(){
    $('#info-name')[0].innerText = data.name;
    $('#info-position')[0].innerText = data.position;;
    $('#info-company')[0].innerText = data.company.name;
    $('#info-ubication')[0].innerText = data.ubication;
    $('#about')[0].innerText = data.about;
    $('#expList').empty();
    $('#eduList').empty();
    populateExp();
    populateEducation();
}

function populateExp(){
    document.getElementById('expList').innerHTML = data.experience.map(company=>`
    <li>
      <div class="data-container">
        <a href="#">
          <div class="logo-image-container"><img id="exp-img" class="logo-image" src="${company.img}"></div>
          <div class="list-info">
            <div>
              <h3 id="exp-position">${company.position}</h3>
              <p><span id="exp-company">${company.company}</span> - <span id="exp-mode">${company.mode}</span></p>
              <h4><span id="exp-initial">${company.start}</span> – <span id="exp-end">${company.end}</span> - <span id="exp-time">${company.timeElapsed}</span></h4>
              <h4 id="exp-place">Guadalajara y alrededores, México</h4>
            </div>
          </div>
        </a>
      </div>
      <div class="data-control">
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditExpModal('${company.company}')"></i></a></div>
        <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteExp('${company.company}')"></i></a></div>
      </div>
    </li>
    `).join('');
}

function populateEducation(){
  document.getElementById('eduList').innerHTML = data.education.map(school=>`
  <li>
    <div class="data-container">
      <a href="#">
        <div class="logo-image-container"><img id="edu-img" class="logo-image" src="${school.img}"></div>
        <div class="list-info">
          <div>
            <h3 id="edu-school">${school.school}</h3>
            <p><span id="edu-title">${school.title}</span>, <span id="edu-career">${school.career}</span>, <span id="edu-score">${school.score}</span></p>
            <p><time id="edu-start">${school.start}</time> - <time id="edu-end">${school.end}</time></p>
          </div>
        </div>
      </a>
    </div>
    <div class="data-control">
      <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-pen" onclick="showEditEduModal('${school.school}')"></i></a></div>
      <div class="btn-edit"><a href="#" class="btn-right"><i class="fa fa-trash" onclick="deleteEdu('${school.school}')"></i></a></div>
    </div>
  </li>
    `).join('');
}

function showEditProfileModal(){
    $('#inputName')[0].value = data.name;
    $('#inputPosition')[0].value = data.position;
    $('#inputCompany')[0].value = data.company.name;
    $('#inputUbication')[0].value = data.ubication;
    $('#editProfile').modal("toggle");
}

function showEditAboutModal(){
    $('#inputAbout')[0].value = data.about;
    $('#editAbout').modal("toggle");
}

function showNewExpModal(){
    $('#newExp').modal("toggle");
}

function showEditExpModal(companyName){
    var company = data.experience.filter(obj => obj.company === companyName)[0];
    $('#inputPositionExpEdit')[0].value = company.position;
    $('#inputCompanyExpEdit')[0].value = company.company;
    $('#inputModeExpEdit')[0].value = company.mode;
    $('#inputImgExpEdit')[0].value = company.img;
    $('#inputInitialExpEdit')[0].value = company.start;
    $('#inputEndExpEdit')[0].value = company.end;
    $('#inputTimeExpEdit')[0].value = company.timeElapsed;
    $('#editExp').modal("toggle");
    
}

function deleteExp(companyName){
  data.experience = data.experience.filter(obj => obj.company !== companyName);
  updateView();
}

function showNewEduModal(){
    $('#newEdu').modal("toggle");
}

function showEditEduModal(schoolName){
    var school = data.education.filter(obj => obj.school === schoolName)[0];
    $('#inputSchoolEdit')[0].value = school.school;
    $('#inputTitleEdit')[0].value = school.title;
    $('#inputSchoolImageEdit')[0].value = school.img;
    $('#inputCareerEdit')[0].value = school.career;
    $('#inputScoreEdit')[0].value = school.score;
    $('#inputSchoolInitialEdit')[0].value = school.start;
    $('#inputSchoolEndEdit')[0].value = school.end;
    $('#editEdu').modal("toggle");
}

function deleteEdu(schoolName){
  data.education = data.education.filter(obj => obj.school !== schoolName);
  updateView();
}

function showNewAptModal(){
    $('#newApt').modal("toggle");
}

function showNewAchModal(){
    $('#newAch').modal("toggle");
}

function saveEditProfileModal(){
    data.name = $('#inputName')[0].value;
    data.position = $('#inputPosition')[0].value;;
    data.company.name = $('#inputCompany')[0].value;
    data.ubication = $('#inputUbication')[0].value;
    updateView();
    $('#editProfile').modal("toggle");
}

function saveEditAboutModal(){
    data.about = $('#inputAbout')[0].value;
    updateView();
    $('#editAbout').modal("toggle");
}

function saveNewExpModal(){
  data.experience.push({
    "position": $('#inputPositionExp')[0].value,
    "company": $('#inputCompanyExp')[0].value,
    "img": $('#inputImgExp')[0].value,
    "mode": $('#inputModeExp')[0].value,
    "start": $('#inputInitialExp')[0].value,
    "end": $('#inputEndExp')[0].value,
    "timeElapsed" : $('#inputTimeExp')[0].value
  });
  updateView();
  $('#newExp').modal("toggle");
}

function saveEditExpModal(companyName){
    data.experience.forEach(company=>{
      if(companyName === company.company){
        company.position = $('#inputPositionExpEdit')[0].value;
        company.img = $('#inputImgExpEdit')[0].value;
        company.mode = $('#inputModeExpEdit')[0].value;
        company.start = $('#inputInitialExpEdit')[0].value;
        company.end = $('#inputEndExpEdit')[0].value;
        company.timeElapsed = $('#inputTimeExpEdit')[0].value;
      }
    })
    updateView();
    $('#editExp').modal("toggle");
}

function saveNewEduModal(){
  data.education.push({
    "school": $('#inputSchool')[0].value,
    "title": $('#inputTitle')[0].value,
    "img": $('#inputSchoolImage')[0].value,
    "career": $('#inputCareer')[0].value,
    "score": $('#inputScore')[0].value,
    "start": $('#inputSchoolInitial')[0].value,
    "end": $('#inputSchoolEnd')[0].value
  });
  updateView();
  $('#newEdu').modal("toggle");

}

function saveEditEduModal(schoolName){
  data.education.forEach(school=>{
    if(schoolName === school.school){
      console.log(school)
      school.title = $('#inputTitleEdit')[0].value;
      school.img = $('#inputSchoolImageEdit')[0].value;
      school.career = $('#inputCareerEdit')[0].value;
      school.score = $('#inputScoreEdit')[0].value;
      school.start = $('#inputSchoolInitialEdit')[0].value;
      school.end = $('#inputSchoolEndEdit')[0].value;
    }
  })
  updateView();
  $('#editEdu').modal("toggle");
}

function saveNewAptModal(){
  data.aptitudes.push({
    "name": $('#inputSchoolEdit')[0].value,
    "confirms": 3,
    "confirmsNames": [
      {
        "name": "Nikolai Emmanuel Bayro Jablonski"
      }
    ]
  });
  updateView();
  $('#newApt').modal("toggle");
}

function saveNewAchModal(){
  data.achivements.push({
    "name": $('#inputAch')[0].value
  });
  updateView();
  $('#newAch').modal("toggle");
}