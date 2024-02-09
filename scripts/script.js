let fileurl = "";  
let statusarray=[];
let departmentarray=[];
let locationarray=[];
let d = 
    [
        {
        "Role": "Customer Service Manager",
        "Department": "IT",
        "Location": "Hyderabad",
        "TotalEmployees": "+43"
        },
        {
        "Role": "UX Designer",
        "Department": "Product Engg.",
        "Location": "Mumbai",
        "TotalEmployees": "+40"
        },
        {
        "Role": "Assistant Backend Developer",
        "Department": "UIUX",
        "Location": "Delhi",
        "TotalEmployees": "+41"
        },
        {
        "Role": "Backend Developer",
        "Department": "IT",
        "Location": "Delhi",
        "TotalEmployees": "+41"
        },
        {
        "Role": "Front End Developer",
        "Department": "Product Engg.",
        "Location": "Mumbai",
        "TotalEmployees": "+40"
        },
        {
        "Role": "Senior Developer",
        "Department": "UIUX",
        "Location": "Delhi",
        "TotalEmployees": "+41"
        }
    ];
let tabledata=[
  {
    "ProfilePic":"",
    "USER": "Edgar Jones",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "Full-stack Developer",
    "EMPNO": "TZ002341",
    "STATUS": "Active",
    "JOINDT": "12/03/2023",
    "EMAIL": "edgar.jones@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "John Doe",
    "LOCATION": "Mumbai",
    "DEPARTMENT": "UIUX",
    "ROLE": "UI/UX Designer",
    "EMPNO": "TZ002342",
    "STATUS": "Inactive",
    "JOINDT": "15/05/2022",
    "EMAIL": "john.doe@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Alice Smith",
    "LOCATION": "Delhi",
    "DEPARTMENT": "IT",
    "ROLE": "Systems Analyst",
    "EMPNO": "TZ002343",
    "STATUS": "Active",
    "JOINDT": "08/11/2021",
    "EMAIL": "alice.smith@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Bob Johnson",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "Backend Developer",
    "EMPNO": "TZ002344",
    "STATUS": "Inactive",
    "JOINDT": "22/09/2020",
    "EMAIL": "bob.johnson@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Sara White",
    "LOCATION": "Mumbai",
    "DEPARTMENT": "UIUX",
    "ROLE": "Frontend Developer",
    "EMPNO": "TZ002345",
    "STATUS": "Active",
    "JOINDT": "03/07/2022",
    "EMAIL": "sara.white@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "David Brown",
    "LOCATION": "Delhi",
    "DEPARTMENT": "IT",
    "ROLE": "Network Engineer",
    "EMPNO": "TZ002346",
    "STATUS": "Inactive",
    "JOINDT": "19/04/2021",
    "EMAIL": "david.brown@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Emily Davis",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "UI Designer",
    "EMPNO": "TZ002347",
    "STATUS": "Active",
    "JOINDT": "14/12/2022",
    "EMAIL": "emily.davis@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Tom Wilson",
    "LOCATION": "Mumbai",
    "DEPARTMENT": "UIUX",
    "ROLE": "Frontend Developer",
    "EMPNO": "TZ002348",
    "STATUS": "Inactive",
    "JOINDT": "26/08/2020",
    "EMAIL": "tom.wilson@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Eva Green",
    "LOCATION": "Delhi",
    "DEPARTMENT": "IT",
    "ROLE": "Database Administrator",
    "EMPNO": "TZ002349",
    "STATUS": "Active",
    "JOINDT": "10/02/2023",
    "EMAIL": "eva.green@example.com"
  },
  {
    "ProfilePic":"",
    "USER": "Michael Taylor",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "DevOps Engineer",
    "EMPNO": "TZ002350",
    "STATUS": "Inactive",
    "JOINDT": "05/06/2021",
    "EMAIL": "michael.taylor@example.com"
  }
]
let users = [
  {
      "username": "Robert Fox",
      "userrole": "Head of Product Design",
      "stamp": "INF 289",
      "useremail": "robert@gmail.com",
      "userdepartment": "product",
      "location": "Illinois"
  },
  {
      "username": "Marvin McKinney",
      "userrole": "Head of Engineering",
      "stamp": "INF 150",
      "useremail": "sravani@yahoo.com",
      "userdepartment": "admin",
      "location": "Connecticut"
  },
  {
      "username": "Eleanor Pena",
      "userrole": "Senior Interaction Designer",
      "stamp": "INF240",
      "useremail": "grolschie@mac.com",
      "userdepartment": "customer executive",
      "location": "Illinois"
  },
  {
      "username": "Jane Cooper",
      "userrole": "Product Analyst",
      "stamp": "INF389",
      "useremail": "chronos@aol.com",
      "userdepartment": "product",
      "location": "Virginia"
  },
  {
      "username": "Floyd Miles",
      "userrole": "Visual Designer",
      "stamp": "INF209",
      "useremail": "dgatwood@msn.com",
      "userdepartment": "customer executive",
      "location": "Illinois"
  },
  {
      "username": "Dianne Russell",
      "userrole": "Full Stack Software Engineer",
      "stamp": "INF922",
      "useremail": "kspiteri@live.com",
      "userdepartment": "human research",
      "location": "Michigan"
  }
]; 
function filterSection(){
    const filteroption = document.querySelector(".filter-option");
    if(filteroption.style.display == "none"){
        filteroption.style.display = "flex";
    }
    else{
        filteroption.style.display = "none";
    }
}
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");
    const headersearchbar = document.querySelector(".header-searchbar");
    const smallsidebar=document.querySelector(".small-sidebar");
    smallsidebar.style.display="none";
    sidebar.style.display = "flex";
    menu.style.display = "none";
    navbar.style.marginLeft="12rem";
    headersearchbar.style.marginLeft="1rem";
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");
    const headersearchbar = document.querySelector(".header-searchbar");
    const smallsidebar = document.querySelector(".small-sidebar");
    sidebar.style.display = "none";
    menu.style.display = "block";
    smallsidebar.style.display = "flex";
    headersearchbar.style.marginLeft = "1rem";
    navbar.style.marginLeft = "1rem"
}
function createCard(data){
    let infocard = document.createElement("div");
    infocard.setAttribute("class", "info-card");
    let inforow = document.createElement("div");
    var imgelmnt = document.createElement("img");
    var h = document.createElement("h5");
    inforow.setAttribute("class", "info-row");
    h.innerHTML = data.Role;
    imgelmnt.src="assets/svg/blueeditbox.svg";
    imgelmnt.alt='BlueEditBox symbol';
    inforow.appendChild(h);
    inforow.appendChild(imgelmnt);
    infocard.appendChild(inforow);
    //row2
    let inforow1 = document.createElement("div");
    let spanins=document.createElement('span');
    var imgelmnt1 = document.createElement("img");
    var span=document.createElement("span");
    let infocarditems=document.createElement("div");
    inforow1.setAttribute("class", "info-row");
    infocarditems.setAttribute("class","infocard-items");
    imgelmnt1.src="assets/svg/group.svg";
    imgelmnt1.alt="Group symbol";
    span.innerText="Department";
    spanins.innerText=data.Department;
    inforow1.appendChild(infocarditems);
    infocarditems.appendChild(imgelmnt1);
    infocarditems.appendChild(span);
    inforow1.appendChild(spanins);
    infocard.appendChild(inforow1);
    //row3
    let inforow2 = document.createElement("div");
    var spaninside=document.createElement("span");
    var imgelmnt2 = document.createElement("img");
    var span2=document.createElement("span");
    let infocarditems2=document.createElement("div");
    inforow2.setAttribute("class", "info-row");
    infocarditems2.setAttribute("class","infocard-items");
    imgelmnt2.src="assets/svg/location.svg";
    imgelmnt2.alt="Location symbol";
    span2.innerText="Location";
    spaninside.innerText=data.Location;
    infocarditems2.appendChild(imgelmnt2);
    infocarditems2.appendChild(span2);
    inforow2.appendChild(infocarditems2);
    inforow2.appendChild(spaninside);
    infocard.appendChild(inforow2);
    //row4
    let inforow3=document.createElement('div');
    let span3=document.createElement('span');
    let span3ins=document.createElement('span');
    let div1=document.createElement('div');
    let div2=document.createElement('div');
    let div3=document.createElement('div');
    let div4=document.createElement('div');
    let div5=document.createElement('div');
    let img1=document.createElement('img');
    let img2=document.createElement('img');
    let img3=document.createElement('img');
    inforow3.setAttribute('class','info-row');
    div1.setAttribute('class','profiles-many');
    div2.setAttribute('class','img1');
    div3.setAttribute('class','img2');
    div4.setAttribute('class','img3');
    div5.setAttribute('class','employee-count');
    span3.innerText="Total Employees";
    img1.src="assets/images/avatar.png";
    img2.src="assets/images/avatar.png";
    img3.src="assets/images/gamer.png";
    span3ins.innerText=data.TotalEmployees;
    inforow3.appendChild(span3);
    div2.appendChild(img1);
    div3.appendChild(img2);
    div4.appendChild(img3);
    div5.appendChild(span3ins);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(div5);
    inforow3.appendChild(div1);
    infocard.appendChild(inforow3);
    //row5
    let inforow4=document.createElement('div');
    inforow4.setAttribute('class','arrow-item');
    let span4=document.createElement('span');
    let img4=document.createElement('img');
    let div6=document.createElement('div');
    span4.innerText="View all Employees";
    img4.src="assets/svg/arrow.svg";
    img4.onclick=function(){
      showAllEmp();
    };
    div6.appendChild(span4);
    div6.appendChild(img4);
    inforow4.appendChild(div6);
    infocard.appendChild(inforow4);
    return infocard;
}
function showAllCards()
{
    let infocardslist = document.querySelector(".info-cards-list");
    infocardslist.innerHTML="";
    for(var i in d){
        var res =createCard(d[i]);
        infocardslist.appendChild(res);
    }
}
function filter()
{
    var selectedlocation = document.getElementById("role-location");
    var selecteddepartment = document.getElementById("role-departments");
    let infolist=document.querySelector(".info-cards-list");
    infolist.innerHTML="";
    for(var i in d){
        const doc = d[i];
        if(doc.Department == selecteddepartment.value && doc.Location == selectedlocation.value)
        {
            var res=createCard(doc);
            infolist.appendChild(res);
        }
    }
}
function showDropDown()
{
    var arrow=document.querySelector(".arrow");
    var dropdown=document.querySelector(".userstatus-menu");
    arrow.src="assets/svg/arrowdownorange.svg";
    if(dropdown.style.display == "none"){
        dropdown.style.display="block";
    }
    else if(dropdown.style.display="block"){
        arrow.src="assets/svg/arrowforwardorange.svg"
        dropdown.style.display="none";
    }
}

function createUserRow(data)
{
var tableRow = document.createElement('tr');
var radioCell = document.createElement('td');
var radioInput = document.createElement('input');
radioInput.setAttribute('type', 'checkbox');
radioInput.setAttribute('name', 'checkbox4');
radioInput.setAttribute('id', 'checkbox4');
var labelForRadio = document.createElement('label');
labelForRadio.setAttribute('for', 'sample');
radioCell.appendChild(radioInput);
radioCell.appendChild(labelForRadio);
tableRow.appendChild(radioCell);
// Create user profile cell
var userProfileCell = document.createElement('td');
userProfileCell.classList.add('user-profile-box');
// Create user avatar image
var avatarImage = document.createElement('img');
if(data.ProfilePic == ""){
  avatarImage.setAttribute('src', 'assets/images/man.jpg');
  avatarImage.setAttribute('alt', 'Human Avatar');
}
else{
  avatarImage.setAttribute('src', data.ProfilePic);
  avatarImage.setAttribute('alt', 'Human Avatar');
}
userProfileCell.appendChild(avatarImage);
// Create user details span
var userDetailsSpan = document.createElement('span');
userDetailsSpan.classList.add('span-outside-userprofilebox');
// Add user name and email to details span
userDetailsSpan.innerHTML = `${data.USER}<br><span class="span-inside-userprofilebox">${data.EMAIL}</span>`;
userProfileCell.appendChild(userDetailsSpan);
// Add user profile cell to the table row
tableRow.appendChild(userProfileCell);
// Create and add other cells to the table row
var locationCell = document.createElement('td');
locationCell.textContent = data.LOCATION;
tableRow.appendChild(locationCell);
var departmentCell = document.createElement('td');
departmentCell.textContent = data.DEPARTMENT;
tableRow.appendChild(departmentCell);
var roleCell = document.createElement('td');
roleCell.textContent = data.ROLE;
tableRow.appendChild(roleCell);
var empNoCell = document.createElement('td');
empNoCell.textContent = data.EMPNO;
tableRow.appendChild(empNoCell);
var statusCell = document.createElement('td');
var activeButton = document.createElement('div');
activeButton.classList.add('active-button');
activeButton.innerHTML = `<span>${data.STATUS}</span>`;
statusCell.appendChild(activeButton);
tableRow.appendChild(statusCell);
var joinDateCell = document.createElement('td');
joinDateCell.textContent = data.JOINDT;
tableRow.appendChild(joinDateCell);
const id="own-model"+data.USER[0]+data.USER[1];
var dotsCell = document.createElement('td');
var dotsImage = document.createElement('img');
dotsImage.setAttribute('src', 'assets/svg/threedots.svg');
dotsImage.setAttribute('alt', 'Threedots symbol');
dotsImage.classList.add("own-model-button"+data.USER[0])
dotsImage.onclick=function() {
  console.log(id);
  show3dots(id);
};
var ownModalDiv = document.createElement('div');
ownModalDiv.classList.add(id);
var viewParagraph = document.createElement('p');
viewParagraph.textContent = 'View';
ownModalDiv.appendChild(viewParagraph);
var editParagraph = document.createElement('p');
editParagraph.textContent = 'Edit';
ownModalDiv.appendChild(editParagraph);
var deleteParagraph = document.createElement('p');
deleteParagraph.textContent = 'Delete';
ownModalDiv.appendChild(deleteParagraph);

dotsCell.appendChild(dotsImage);
dotsCell.appendChild(ownModalDiv);
ownModalDiv.style.border=".3px solid black";
ownModalDiv.style.display="none";
ownModalDiv.style.backgroundColor="white";
ownModalDiv.style.flexDirection="column";
ownModalDiv.style.alignItems="center";
ownModalDiv.style.position="relative";
ownModalDiv.style.marginTop="-1.8rem";
ownModalDiv.style.marginLeft="2.3rem";
ownModalDiv.style.height="5rem";
ownModalDiv.style.width="3rem";
ownModalDiv.style.zIndex="999";
ownModalDiv.style.fontSize=".5rem";
ownModalDiv.style.color="black";
tableRow.appendChild(dotsCell);

return tableRow;
}
function showTableRows()
{
  var table = document.getElementById('UserTable');
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  console.log(dataarray);
  for(let i in dataarray)
  {
    let doc=createUserRow(dataarray[i]);
    table.querySelector('tbody').appendChild(doc);
  }
}
function filterTableRows()
{
  var table = document.getElementById('UserTable');
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  function filterData(selectedStatus, selectedLocation, selectedDepartment) {
    return dataarray.filter(obj => {
        return (selectedStatus.includes(obj.STATUS) || selectedStatus.length === 0) &&
               (selectedLocation.includes(obj.LOCATION) || selectedLocation.length === 0) &&
               (selectedDepartment.includes(obj.DEPARTMENT) || selectedDepartment.length === 0);
    });
}
  const filteredData = filterData(statusarray, locationarray, departmentarray);
  setTimeout(function () {
    table.querySelector('tbody').innerHTML = "";
    console.log(table.querySelector('tbody'));

    filteredData.forEach(function (row) {
      let res = createUserRow(row);
      table.querySelector('tbody').appendChild(res);
    });
  }, 10); 
}
function showActiveUsers(Inp)
{
  var table = document.getElementById('UserTable');
  table.querySelector('tbody').innerHTML="";
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  for(let i in dataarray){
    var doc=dataarray[i];
    if(Inp == doc.STATUS)
    {
      let res=createUserRow(doc);
      
      table.querySelector('tbody').appendChild(res);
    }
  }
}
function showInActiveUsers()
{
  var table = document.getElementById('UserTable');
  table.querySelector('tbody').innerHTML="";
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  for(let i in dataarray){
    var doc=dataarray[i];
    if("Inactive" == doc.STATUS)
    {
      let res=createUserRow(doc);
      
      table.querySelector('tbody').appendChild(res);
    }
  }
}
function showFieldDropdown()
{
  var list = document.querySelector(".checkbox-dropdownlist");
  var checkboxes = document.getElementsByName("dp-empdetails");
  var placeholder = document.getElementById("searchPlaceholder");
  var searchinp=document.getElementById("searchemp");

  if (list.style.display === "none") {
      list.style.display = "flex";
  } else {
      list.style.display = "none";
  }

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          placeholder.textContent = checkboxes[i].value;
          break;  
      }
      else{
        placeholder.innerText=searchinp.value;
      }
  }

}
function showAddEmployeePage()
{
  var mainpage=document.querySelector(".table-part");
  var emppage=document.querySelector(".addemployee-page");
  var addemp=document.querySelector(".add-employee");
  if(mainpage.style.display == "block")
  {
    mainpage.style.display="none";
    emppage.style.display="block";
    addemp.style.display = "block";
  }
  else{
    mainpage.style.display="none";
    addemp.style.display = "none";
    emppage.style.display="block";
  }
}
function showAddRolePage()
{
  var usertable=document.querySelector(".info-cards-list");
  var rolepage=document.querySelector(".addnewrole-page");
  var filterrole=document.querySelector(".filterrole");
  var addrole=document.querySelector(".add-roledetails");
  if(usertable.style.display == "block"){
    usertable.style.display = "none";
    filterrole.style.display="none";
    addrole.style.display = "none";
    rolepage.style.display = "flex";
  }
  else{
    usertable.style.display = "block";
    filterrole.style.display="flex";
    rolepage.style.display = "none";
    addrole.style.display = "flex";
  }
}

var fileInput=document.getElementById("addfilepicker");
var profilepic=document.querySelector(".profilepic");
fileInput.addEventListener('change',()=>{
  const fr=new FileReader();
  fr.readAsDataURL(fileInput.files[0]);
  fr.addEventListener('load',()=>{
    fileurl=fr.result;
    console.log(fileurl);
  });
});
profilepic.src=fileurl;

function addEmployeeData()
{
  var empNumber = document.getElementById("emp-number").value;
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dob = document.getElementById("dob").value;
  var emailId = document.getElementById("email-id").value;
  var mobileNo = document.getElementById("mobile-no").value;
  var joiningDate = document.getElementById("joining-date").value;
  var location = document.getElementById("add-select-loc").value;
  var jobTitle = document.getElementById("add-select-jobtitle").value;
  var department = document.getElementById("add-select-department").value;
  var assignManager = document.getElementById("managers").value;
  var assignProject = document.getElementById("projects").value;
  
  var EmpModel={
    ProfilePic:fileurl,
    USER: firstName + lastName,
    LOCATION: location,
    DEPARTMENT: department,
    ROLE: "",
    EMPNO: empNumber,
    STATUS: "Inactive",
    JOINDT: joiningDate,
    EMAIL: emailId,
    DOB:dob,
    MobileNumber:mobileNo,
    JobTitle:jobTitle,
    Manager:assignManager,
    Project:assignProject,
  };
  var NewEmpModel=[EmpModel];
  var existingData = localStorage.getItem("EmployeeData");
  if(existingData !== null)
  {
    var dataarray=JSON.parse(existingData);
    dataarray.push(EmpModel);
    var jsonString = JSON.stringify(dataarray);
    localStorage.setItem("EmployeeData",jsonString);
    alert("Added Successfully");
  }
  else{
    var jsonString=JSON.stringify(NewEmpModel);
    localStorage.setItem("EmployeeData",jsonString);
    alert("Added Successfully");
  }
  profilepic.src="";
  fileurl="";
}
function addRoleData()
{
  var roleName = document.getElementById("role-rolename").value;
  var department = document.getElementById("role-selectdepartment").value;
  var description = document.getElementById("role-description").value;
  var location = document.getElementById("role-selectlocation").value;
  var empname=document.getElementById("searchPlaceholder").innerText;
  var RoleModel= 
  {
    EmpName:empname,
    Role: roleName,
    Department: department,
    Location: location,
    TotalEmployees: "+43",
    Description:description,
  };
  var NewRoleModel=[RoleModel];
  var existingData = localStorage.getItem("RoleData");
  if(existingData!== null)
  {
    var dataarray=JSON.parse(existingData);
    dataarray.push(RoleModel);
    var jsonString = JSON.stringify(dataarray);
    localStorage.setItem("RoleData",jsonString);
    alert("Added Successfully");
  }
  else{
    var jsonString=JSON.stringify(NewRoleModel);
    localStorage.setItem("RoleData",jsonString);
    alert("Added Successfully");
  }

  var existingempData = localStorage.getItem("EmployeeData");
  var empdataarray=JSON.parse(existingempData);
  for(let i in empdataarray)
  {
    let doc=empdataarray[i];
    if(doc.USER == empname && doc.ROLE == "")
    {
      doc.ROLE=roleName;
      var jsonstring=JSON.stringify(empdataarray);
      localStorage.setItem("EmployeeData",jsonstring);
    }
  }
}
function sampledelete(){
  const employeeDataString = localStorage.getItem('RoleData');
  let employeeData = JSON.parse(employeeDataString);
  const indexesToDelete = [0, 1, 2]; 
  indexesToDelete.sort((a, b) => b - a);
  indexesToDelete.forEach(index => {
      if (index >= 0 && index < employeeData.length) {
          employeeData.splice(index, 1);
      } else {
          console.log(`Invalid index ${index}.`);
      }
  });

  const updatedEmployeeDataString = JSON.stringify(employeeData);
  localStorage.setItem('RoleData', updatedEmployeeDataString);
  console.log('Objects deleted successfully.');
}
function addToExcel()
{
    const table = document.getElementById('UserTable');
    const data = [];
    for (let i = 0; i < table.rows.length; i++) {
        const row = [];
        const tableRow = table.rows[i];
        for (let j = 0; j < tableRow.cells.length; j++) {
            const cell = tableRow.cells[j];
            row.push(cell.textContent.trim());
        }
        data.push(row.join(','));
    }
    const csvContent = data.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'table_data.csv';
    link.click(); 
}
function filterByAlphabet(inp)
{
  var table = document.getElementById('UserTable');
  var existingdata=localStorage.getItem("EmployeeData");
  var array=JSON.parse(existingdata);
  var ficon=document.querySelector(".filter-image");
  table.querySelector('tbody').innerHTML="";
  var filtered=[];
  filtered=[];
  for(let i in array)
  {
    let doc=array[i];
    if(doc.USER[0] == inp){
      filtered.push(doc);
    }
    else{
      continue;
    }
  }
  if(filtered.length > 0){
    ficon.src="assets/images/filter.png";
  for(let j in filtered){
    let res=createUserRow(filtered[j]);
    table.querySelector('tbody').appendChild(res);
  }}
  else{
    ficon.src="assets/images/filterblack.png";
  }
}
function sortAccordToCol(inp)
{
  var existingdata=localStorage.getItem("EmployeeData");
  var array=JSON.parse(existingdata);

  array.sort((a, b) => {
    if (a[inp] < b[inp]) return -1;
    if (a[inp] > b[inp]) return 1;
    return 0;
  });
  console.log(array);
  var table = document.getElementById('UserTable');
  table.querySelector('tbody').innerHTML="";

  for(let i in array)
  {
    let doc=createUserRow(array[i]);
    table.querySelector('tbody').appendChild(doc);
  }
}
function sortDecToCol(inp)
{
  var existingdata=localStorage.getItem("EmployeeData");
  var array=JSON.parse(existingdata);
  array.sort((a, b) => {
    if (a[inp] < b[inp]) return 1; 
    if (a[inp] > b[inp]) return -1; 
    return 0; 
  });
  console.log(array);
  var table = document.getElementById('UserTable');
  table.querySelector('tbody').innerHTML="";

  for(let i in array)
  {
    let doc=createUserRow(array[i]);
    table.querySelector('tbody').appendChild(doc);
  }
}
function show3dots(inp){
  var dots3 = document.querySelector("."+inp);
    if (dots3.style.display === "none") {
        dots3.style.display = "flex";
    }
    else{
      dots3.style.display = "none";
    }
}
function createRoleCard(userInformation){
  var infoCardContainer = document.createElement("div");
  infoCardContainer.classList.add("info-card-2");
  var userProfileBox = document.createElement("div");
  userProfileBox.classList.add("user-profile-box-2");
  var userProfileImage = document.createElement("img");
  userProfileImage.src = "assets/images/man.jpg";
  userProfileImage.alt = "Human Avatar";
  var userProfileText = document.createElement("span");
  userProfileText.classList.add("span-outside");
  userProfileText.innerHTML = userInformation.username + "<br><span class='span-inside'>" + userInformation.userrole + "</span>";
  userProfileBox.appendChild(userProfileImage);
  userProfileBox.appendChild(userProfileText);
  infoCardContainer.appendChild(userProfileBox);
  infoCardContainer.appendChild(document.createElement("br"));
  // Create infocard items
  var infoCardItems = document.createElement("div");
  infoCardItems.classList.add("infocard-items");
  var stampIcon = document.createElement("img");
  stampIcon.src = "assets/svg/stamp.svg";
  stampIcon.alt = "Stamp symbol";
  var stampText = document.createElement("span");
  stampText.innerHTML = userInformation.stamp;
  infoCardItems.appendChild(stampIcon);
  infoCardItems.appendChild(stampText);
  infoCardContainer.appendChild(infoCardItems);
  var emailItem = document.createElement("div");
  emailItem.classList.add("infocard-items");
  var emailIcon = document.createElement("img");
  emailIcon.src = "assets/svg/email.svg";
  emailIcon.alt = "Email symbol";
  var emailText = document.createElement("span");
  emailText.innerHTML = userInformation.useremail;
  emailItem.appendChild(emailIcon);
  emailItem.appendChild(emailText);
  infoCardContainer.appendChild(emailItem);
  var departmentItem = document.createElement("div");
  departmentItem.classList.add("infocard-items");
  var departmentIcon = document.createElement("img");
  departmentIcon.src = "assets/svg/group.svg";
  departmentIcon.alt = "Group symbol";
  var departmentText = document.createElement("span");
  departmentText.innerHTML = userInformation.userdepartment;
  departmentItem.appendChild(departmentIcon);
  departmentItem.appendChild(departmentText);
  infoCardContainer.appendChild(departmentItem);
  var locationItem = document.createElement("div");
  locationItem.classList.add("infocard-items");
  var locationIcon = document.createElement("img");
  locationIcon.src = "assets/svg/location.svg";
  locationIcon.alt = "Location symbol";
  var locationText = document.createElement("span");
  locationText.innerHTML = userInformation.location;
  locationItem.appendChild(locationIcon);
  locationItem.appendChild(locationText);
  infoCardContainer.appendChild(locationItem);
  var arrowItem = document.createElement("div");
  arrowItem.classList.add("arrow-item");
  var arrowImage = document.createElement("img");
  arrowImage.src = "assets/svg/arrow.svg";
  arrowImage.alt = "Arrow symbol";
  var viewSpan = document.createElement("span");
  viewSpan.innerHTML = "View";
  arrowItem.appendChild(viewSpan);
  arrowItem.appendChild(arrowImage);
  infoCardContainer.appendChild(arrowItem);
  return infoCardContainer;
}
function showRoleCard(){
  var space=document.querySelector(".info-cards-list-2");
  space.innerHTML="";
  for(let i in users){
    let res=createRoleCard(users[i]);
    space.appendChild(res);
  }
}
function showDepartmentWise(Inp)
{
  var table = document.getElementById('UserTable');
  table.querySelector('tbody').innerHTML="";
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  for(let i in dataarray){
    var doc=dataarray[i];
    if(Inp == doc.DEPARTMENT)
    {
      let res=createUserRow(doc);
      
      table.querySelector('tbody').appendChild(res);
    }
  }
}

var containers = document.querySelectorAll(".alphabet");
var previousContainer = null;
containers.forEach(function(container) {
container.addEventListener("click", function(event) {
  if (previousContainer !== null) {
    previousContainer.style.backgroundColor = ""; 
  }
  container.style.backgroundColor = "rgba(244,72,72,255)";
  container.style.color="white";
  previousContainer = container;
});
});

function showFilterStatusDropdown()
{
  var list = document.querySelector(".filtercheckbox-dropdownlist");
  var placeholder = document.getElementById("filter-display1");
  var chk=document.querySelectorAll('input[type="checkbox"][name="filter-status"]');
  if (list.style.display === "none") {
      list.style.display = "flex";
  } else {
      list.style.display = "none";
  }
  let arr=[];
  chk.forEach(function(event){
    event.addEventListener("click",function(){
        let v=event.value;
        if(event.checked){
          arr.push(v);
        }
        else{
          const index = arr.indexOf(v);
          if (index !== -1) {
              arr.splice(index, 1);
          }
        }
        statusarray=arr;
        placeholder.innerText=arr.length +" "+ "Selected";
    });
  });
}
function showFilterDepartmentDropdown(){
  var list = document.querySelector(".filtercheckbox-dropdownlist2");
  var placeholder = document.getElementById("filter-display2");
  var chk=document.querySelectorAll('input[type="checkbox"][name="filter-department"]');
  if (list.style.display === "none") {
      list.style.display = "flex";
  } else {
      list.style.display = "none";
  }
  let arr=[]
  chk.forEach(function(event){
    event.addEventListener("click",function(){
        let v=event.value;
        if(event.checked){
          arr.push(v);
        }
        else{
          const index = arr.indexOf(v);
          if (index !== -1) {
              arr.splice(index, 1);
          }
        }
        departmentarray=arr;
        console.log(departmentarray);
        placeholder.innerText=arr.length +" "+ "Selected";
    });
  });
}
function showFilterLocationDropdown(){
  var list = document.querySelector(".filtercheckbox-dropdownlist3");
  var placeholder = document.getElementById("filter-display3");
  var chk=document.querySelectorAll('input[type="checkbox"][name="filter-location"]');
  if (list.style.display === "none") {
      list.style.display = "flex";
  } else {
      list.style.display = "none";
  }
  let arr=[]
  chk.forEach(function(event){
    event.addEventListener("click",function(){
        let v=event.value;
        if(event.checked){
          arr.push(v);
        }
        else{
          const index = arr.indexOf(v);
          if (index !== -1) {
              arr.splice(index, 1);
          }
        }
        locationarray=arr;
        console.log(locationarray);
        placeholder.innerText=arr.length +" "+ "Selected";
    });
  });
}
function showEmp(){
  var employeepage = document.querySelector(".employee-page");
  var roledetailspage = document.querySelector(".roledetails-page");
  var rolepage = document.querySelector(".role-page");
  if(employeepage.style.display == "none"){
      employeepage.style.display = "block";
      roledetailspage.style.display = "none";
      rolepage.style.display = "none";
  }
  else{
      employeepage.style.display = "none";
  }
}
function showRole(){
  var employeepage=document.querySelector(".employee-page");
  var roledetailspage=document.querySelector(".roledetails-page");
  var rolepage=document.querySelector(".role-page");
  if(roledetailspage.style.display == "none"){
      roledetailspage.style.display = "block";
      employeepage.style.display = "none";
      rolepage.style.display = "none";
  }
  else{
      roledetailspage.style.display = "none";
  }
  showAllCards();
}

function showAllEmp(){
  var employeepage = document.querySelector(".employee-page");
  var roledetailspage = document.querySelector(".roledetails-page");
  var rolepage = document.querySelector(".role-page");
  showRoleCard();
  if(rolepage.style.display == "none"){
      rolepage.style.display = "block";
      employeepage.style.display = "none";
      roledetailspage.style.display = "none";
  }
  else{
      rolepage.style.display = "none";
  }
}