let CodersArray = [];

let elCodersList = document.getElementById('coders-list');
//let elStudentForm = document.getElementById('new-student');
let elCodersForm = document.getElementById('coders-form');
let elCoderName = document.getElementById('coder-name');
//console.log(elCoderName);


// define a constructor
let CodeCorner = function(name, school, language) {
    //declaring a property
        this.name = name;
        this.school = school;
        this.language = language;
      //  this.note = note;
    
    }
    if(localStorage.storageCodeArray){
        let getCodeArray = localStorage.getItem('storageCodeArray');
        studentArray = JSON.stringify(getCodeArray);
    }else{
    let CoderOne = new CodeCorner('Sharon More', 'CodeEcademy', 'JS');
    let CoderTwo = new CodeCorner('Kim AnnT Do', 'CodeWise', 'PHP');
    let CoderThr = new CodeCorner('Apple Peel', 'CodeWise', 'JS');
       
        CodersArray.push(CoderOne, CoderTwo, CoderThr);
    
        // console.log(CoderOne, CoderTwo, CoderThr);
        // console.log(CodersArray);
     
    }
    
    for(let i = 0; i < CodersArray.length; i++){
        let elCoder = document.createElement('li');
        elCodersList.appendChild(elCoder);
//        elCoder.innerHTML = CodersArray[i].join("<br>") + "<br>";
         elCoder.innerHTML = CodersArray[i].name;
                }
    ////////////////Review here////////////////
    let CoderName = elCodersForm.CoderName; 


    function createNewCoder(event) {
        event.preventDefault();

let newCoder = new CodeCorner (CoderName.value, 'CodeCamper', 'JS');

CodersArray.push(newCoder);
   }  //<--- huh

 //console.log(newCoder);

        elCodersForm.addEventListener('submit', createNewCoder); 
        //    console.log(elCodersForm.CoderName);
        
        
        //let newStudent = new Student(studentName, 32 ,'undeclared');
        localStorage.setItem('storageCodeArray', JSON.stringify(CodersArray));
        //let studentName = elStudentForm.student;  // undefined at this position
//        CodersArray.push(newCoder);  //try4
        elCodersForm.addEventListener('submit', createNewCoder);
//    }
//}