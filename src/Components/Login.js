import React,{useState} from "react";
import "./login.css";
import { jsPDF } from "jspdf";
const Login = () => {

  
  // const numbers = [1, 2, 3, 4, 5];

  const [numbers, setnumbers] = useState([1])

  const [exp, setexp] = useState([1]);

  const listItems = numbers.map((number) =><>
  <br></br>
  <form id="educ2" className="educ2" method="POST">
    <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              College/University
            </label>
            <input
              type="text"
              className="form-control a"
              name="colleage"
              id="clg"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              CourseName
            </label>
            <input
              type="text"
              className="form-control b"
              id="cName"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              To
            </label>
            <input
              type="date"
              className="form-control c"
              id="to"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Frome
            </label>
            <input
              type="date"
              className="form-control d"
              id="from"
            />
          </div>
          
          </form>
    </>
  );


const listItems2 = exp.map((number) =><>
  <br></br>
  <form>
    <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control e"
              id="cpname"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control f"
              id="pname"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              To
            </label>
            <input
              type="date"
              className="form-control g"
              id="eto"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Frome
            </label>
            <input
              type="date"
              className="form-control h"
              id="efrom"
            />
          </div>
          </form>
    </>
  );

  const AddEd=(e)=>{
    e.preventDefault();
    setnumbers([...numbers, "k"])
  }

  const AddEx=(e)=>{
    e.preventDefault();
    setexp([...exp, "k"])
  }

 const make=(e)=>{
e.preventDefault();
  const doc = new jsPDF();

// doc.text("Hello world!", 10, 10);
                  //y,x
let y=10;
let x=10;
doc.text("Resume",50,10);
const fname=document.getElementById("fname").value;
const lname=document.getElementById("lname").value;

const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
let edA=[];
let cNameA=[];
let toA=[];
let fromA=[];


for(let i=0;i<numbers.length;i++){

edA.push(document.getElementsByClassName("a")[i].value);
cNameA.push(document.getElementsByClassName("b")[i].value);
toA.push(document.getElementsByClassName("c")[i].value);
fromA.push(document.getElementsByClassName("d")[i].value);

}

//experinec
let cpnameA=[];
let pnameA=[];
let etoA=[];
let efromA=[];


for(let i=0;i<exp.length;i++){

  cpnameA.push(document.getElementsByClassName("e")[i].value);
  pnameA.push(document.getElementsByClassName("f")[i].value);
  etoA.push(document.getElementsByClassName("g")[i].value);
  efromA.push(document.getElementsByClassName("h")[i].value);
  
  }

x=x+10;
doc.text("First Name  "+fname,y,x);
x=x+10;
doc.text("last Name  "+lname,y,x);
x=x+10;
doc.text("Email  "+email,y,x);
x=x+10;
doc.text("Phone Number "+phone,y,x);
x=x+10;


doc.text("EDUCATION",y,x);
x=x+10;

for(let i=0;i<numbers.length;i++){
  doc.text("Univeristy "+edA[i]+" CourseName "+cNameA[i]+" to "+toA[i]+" from "+fromA[i] ,y,x);
  x=x+10;
}

doc.text("Experiernce",y,x);
x=x+10;





for(let i=0;i<exp.length;i++){
  doc.text("Company Name "+cpnameA[i]+" title "+pnameA[i]+" to "+etoA[i]+" from "+efromA[i] ,y,x);
  x=x+10;
}

doc.save("a4.pdf");
 }
  
return (

  
    <>
      <div className="form1">
        <center>
          <h1 className="title1">RESUME MAKER</h1>
        </center>
        <br />
        <form>

        <h2>General INFO</h2>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
            />
          </div>

        <h2>Education Info</h2>

        <ul id="educ">{listItems}</ul>
       
       
        <center><button onClick={AddEd} className="btn-primary">Add Form </button></center>
       

  <br></br>
        <h2>Experience Info</h2>

        <ul>{listItems2}</ul>
       
        <center><button onClick={AddEx} className="btn-primary">Add Form </button></center>

        <br></br>
          <center><button type="submit" className="btn btn-primary" onClick={make}> 
            Save and Print
          </button>
          </center>

          <center><h2>MADE BY - Rcoder23</h2></center>
        </form>
      </div>
    </>
  );
};

export default Login;
