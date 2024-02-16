const app = (function() {
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
      "username": "Alice Johnson",
      "userrole": "Lead Software Engineer",
      "stamp": "INF 102",
      "useremail": "alice.johnson@example.com",
      "userdepartment": "Engineering",
      "location": "California"
    },  
    {
      "username": "John Smith",
      "userrole": "Marketing Manager",
      "stamp": "INF 458",
      "useremail": "john.smith@example.com",
      "userdepartment": "Marketing",
      "location": "New York"
    },
    {
      "username": "Emily Davis",
      "userrole": "HR Coordinator",
      "stamp": "INF 705",
      "useremail": "emily.davis@example.com",
      "userdepartment": "Human Resources",
      "location": "Texas"
    },
    {
      "username": "Michael Brown",
      "userrole": "Financial Analyst",
      "stamp": "INF 315",
      "useremail": "michael.brown@example.com",
      "userdepartment": "Finance",
      "location": "Florida"
    },  
  ];
  let roleData = [
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
  let fileUrl = "";
  let statusArray = [];
  let departmentArray = [];
  let locationArray = [];
  let itCount = 0;
  let peCount = 0;
  let uiuxCount = 0;
  let filterAlphabet = "";
  let filterDropdownModel = {
    filterDisplayName: "Status",
    checkboxItems: [
        { label: "Active", value: "Active", id: "status",name: "filter-status"},
        { label: "Inactive", value: "Inactive", id: "status",name:"filter-status"}
    ]
  };
  let filterDropdownModel2 = {
    filterDisplayName: "Department",
    checkboxItems: [
        { label: "Product Engg", value: "ProductEngg", id: "departments", name: "filter-department" },
        { label: "UIUX", value: "UIUX", id: "departments", name: "filter-department" },
        { label: "IT", value: "IT", id: "departments", name: "filter-department" }
    ]
  };
  let filterDropdownModel3 = {
    filterDisplayName: "Location",
    checkboxItems: [
        { label: "Hyderabad", value: "Hyderabad", id: "location", name: "filter-location" },
        { label: "Mumbai", value: "Mumbai", id: "location", name: "filter-location" },
        { label: "Pune", value: "Pune", id: "location", name: "filter-location" },
        { label: "Delhi", value: "Delhi", id: "location", name: "filter-location" }
    ]
  };

  function Employee(profilePic,
    user,
    location,
    department,
    role,
    empNo,
    status,
    joinDt,
    email,
    dob,
    mobileNumber,
    jobTitle,
    manager,
    project,
    ){
    this.ProfilePic = profilePic;
    this.USER = user;
    this.LOCATION = location;
    this.DEPARTMENT = department;
    this.ROLE = role;
    this.EMPNO = empNo;
    this.STATUS = status;
    this.JOINDT = joinDt;
    this.EMAIL = email;
    this.DOB = dob;
    this.MobileNumber = mobileNumber;
    this.JobTitle = jobTitle;
    this.Manager = manager;
    this.Project = project;
  }

  function roleModel(roleName,department,description,location,empName){
    this.EmpName=empName;
    this.Role=roleName;
    this.Department = department;
    this.Location = location;
    this.TotalEmployees = "+43";
    this.Description = description;
  }

  (function(){
    handleFileInputChange(),
    alphabetStateChange(),
    createMultiSelectDropDown(),
    getDepartmentCount("UIUX","IT","ProductEngg")
  })();

  function createUserRow(data){
    var tableRow = document.createElement('tr');
    var radioCell = document.createElement('td');
    var radioInput = document.createElement('input');
    let deletebutton=document.querySelector(".delete-button");
    radioInput.setAttribute('type', 'checkbox');
    radioInput.setAttribute('name', 'checkbox4');
    radioInput.setAttribute('id', 'checkbox4');
    radioInput.onchange=function() {
      if(this.checked){
        deletebutton.classList.add("checked-delete-button");
      }
      else{
        deletebutton.classList.remove("checked-delete-button");
      }
    }
    
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
    if(data.ProfilePic != "" && "ProfilePic" in data){
      avatarImage.setAttribute('src', data.ProfilePic);
      avatarImage.setAttribute('alt', 'Human Avatar');
    }
    else{
      avatarImage.setAttribute('src', 'assets/images/man.png');
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
    var dotsCell = document.createElement('td');
    var dotsImage = document.createElement('img');
    dotsImage.setAttribute('src', 'assets/svg/threedots.svg');
    dotsImage.setAttribute('alt', 'Threedots symbol');
    dotsImage.classList.add("own-model-button")
    dotsImage.onclick=function() {
      var ownModalDiv = this.nextElementSibling;
      ownModalDiv.style.display = (ownModalDiv.style.display === 'block') ? 'none' : 'block';
    };
    var ownModalDiv = document.createElement('div');
    ownModalDiv.classList.add("own-model");
    var viewParagraph = document.createElement('p');
    viewParagraph.textContent = 'View';
    ownModalDiv.appendChild(viewParagraph);
    var editParagraph = document.createElement('p');
    editParagraph.textContent = 'Edit';
    ownModalDiv.appendChild(editParagraph);
    var deleteParagraph = document.createElement('p');
    deleteParagraph.textContent = 'Delete';
    ownModalDiv.appendChild(deleteParagraph);
    viewParagraph.classList.add("own-model-p");
    editParagraph.classList.add("own-model-p");
    deleteParagraph.classList.add("own-model-p");

    dotsCell.appendChild(dotsImage);
    dotsCell.appendChild(ownModalDiv);
    tableRow.appendChild(dotsCell);
    return tableRow;
  }

  function test(){
    setTimeout(()=>{
      console.log("hi");
    let toast=document.querySelector(".toast-employee");
    toast.style.display = "none";
    showAddEmployeePage();
    },3000);
  }

  function addEmployeeData(event){
    event.preventDefault();
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
    var EmpModel=new Employee(
      fileUrl,
      firstName + lastName,
      location,
      department,
      "",
      empNumber,
      "Inactive",
      joiningDate,
      emailId,
      dob,
      mobileNo,
      jobTitle,
      assignManager,
      assignProject
    );
    var NewEmpModel = [EmpModel];
    var existingData = localStorage.getItem("EmployeeData");
    if(existingData !== null)
    {
      var dataarray=JSON.parse(existingData);
      dataarray.push(EmpModel);
      var jsonString = JSON.stringify(dataarray);
      localStorage.setItem("EmployeeData",jsonString);
    }
    else{
      var jsonString=JSON.stringify(NewEmpModel);
      localStorage.setItem("EmployeeData",jsonString);
    }
    let toast=document.querySelector(".toast-employee");
    toast.style.display = "flex";
    test();
    profilepic.src="";
    fileUrl="";
  }

  function deleteRow(){
    const employeeDataString = localStorage.getItem('EmployeeData');
    let employeeData = JSON.parse(employeeDataString);
    const indextodelete = [15,16,17,18,19]; 
    indextodelete.sort((a, b) => b - a);
    indextodelete.forEach(index => {
        if (index >= 0 && index < employeeData.length) {
            employeeData.splice(index, 1);
        } else {
            console.log(`Invalid index ${index}.`);
        }
    });
    const updatedEmployeeDataString = JSON.stringify(employeeData);
    localStorage.setItem('EmployeeData', updatedEmployeeDataString);
    console.log('Objects deleted successfully.');
  }

  function addToCsv(){
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
    link.download = 'data.csv';
    link.click(); 
  }

  function getDepartmentCount(cat1,cat2,cat3){
    let existingdata=localStorage.getItem("EmployeeData");
    let array=JSON.parse(existingdata);
    array.filter((val)=>{
      if(val.DEPARTMENT == cat1){
        uiuxCount += 1;
      }
      else if(val.DEPARTMENT == cat2){
        itCount += 1;
      }
      else if(val.DEPARTMENT == cat3 || val.DEPARTMENT == "Product Engg"){
        peCount += 1;
      }
      let itBox=document.querySelector(".department-button-square-one");
      let uiuxBox=document.querySelector(".department-button-square-two");
      let peBox=document.querySelector(".department-button-square-three");
      itBox.textContent=itCount;
      uiuxBox.textContent=uiuxCount;
      peBox.textContent=peCount;
    })
  }

  function filterByAlphabet(inp){
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

  function sortAccordToCol(inp){
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
      let doc=this.createUserRow(array[i]);
      table.querySelector('tbody').appendChild(doc);
    }
  }

  function sortDecToCol(inp){
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

  function showFilterStatusDropdown(){
    var list = document.querySelector(".filtercheckbox-dropdownlist");
    var placeholder = document.getElementById("filter-display1");
    var chk=document.querySelectorAll('input[type="checkbox"][name="filter-status"]');
    if (!list.style.display || list.style.display === "none") {
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
          statusArray=arr;
          placeholder.innerText=arr.length +" "+ "Selected";
      });
    });
  }

  function showFilterDepartmentDropdown(){
    var list = document.querySelector(".filtercheckbox-dropdownlist2");
    var placeholder = document.getElementById("filter-display2");
    var chk=document.querySelectorAll('input[type="checkbox"][name="filter-department"]');
    if (!list.style.display || list.style.display === "none") {
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
          departmentArray=arr;
          console.log(departmentArray);
          placeholder.innerText=arr.length +" "+ "Selected";
      });
    });
  }

  function showFilterLocationDropdown(){
    var list = document.querySelector(".filtercheckbox-dropdownlist3");
    var placeholder = document.getElementById("filter-display3");
    var chk=document.querySelectorAll('input[type="checkbox"][name="filter-location"]');
    if (!list.style.display || list.style.display === "none") {
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
          locationArray=arr;
          console.log(locationArray);
          placeholder.innerText=arr.length +" "+ "Selected";
      });
    });
  }

  function showTableRows(){
    var table = document.getElementById('UserTable');
    var data = localStorage.getItem("EmployeeData");
    var dataarray = JSON.parse(data);
    table.querySelector("tbody").innerHTML = "";
    for(let i in dataarray)
    {
      let doc=createUserRow(dataarray[i]);
      table.querySelector('tbody').appendChild(doc);
    }
  }

  function filterData(dataarray,selectedStatus, selectedLocation, selectedDepartment) {
    return dataarray.filter(obj => {
        var nameStartsWithSpanValue = filterAlphabet && obj.USER.startsWith(filterAlphabet);
        
        return (selectedStatus.includes(obj.STATUS) || selectedStatus.length === 0) &&
            (selectedLocation.includes(obj.LOCATION) || selectedLocation.length === 0) &&
            (selectedDepartment.includes(obj.DEPARTMENT) || selectedDepartment.length === 0) &&
            (filterAlphabet ? nameStartsWithSpanValue : true); 
    });
  }

  function filterTableRows(){
    var table = document.getElementById('UserTable');
    var data = localStorage.getItem("EmployeeData");
    var dataarray = JSON.parse(data);
  
    const filteredData = filterData(dataarray,statusArray, locationArray, departmentArray);
    setTimeout(()=> {
        table.querySelector('tbody').innerHTML = "";
        console.log(table.querySelector('tbody'));
        filteredData.forEach((row)=> {
            var res = createUserRow(row);
            table.querySelector('tbody').appendChild(res);
        });
    }, 10);
  }

  function showSpecific(inp,cat){
    var table = document.getElementById('UserTable');
    table.querySelector('tbody').innerHTML="";
    var data=localStorage.getItem("EmployeeData");
    var dataarray=JSON.parse(data);
    for(let i in dataarray){
      var doc=dataarray[i];
      if(inp == doc[cat])
      {
        let res=createUserRow(doc);
        
        table.querySelector('tbody').appendChild(res);
      }
    }
  }

  function addRoleData(){
    var roleName = document.getElementById("role-rolename").value;
    var department = document.getElementById("role-selectdepartment").value;
    var description = document.getElementById("role-description").value;
    var location = document.getElementById("role-selectlocation").value;
    var empname=document.getElementById("searchPlaceholder").innerText;
    var RoleModel= new roleModel(roleName,department,description,location,empname);
    var NewRoleModel=[RoleModel];
    var existingData = localStorage.getItem("RoleData");
    if(existingData!== null)
    {
      var dataarray=JSON.parse(existingData);
      dataarray.push(RoleModel);
      var jsonString = JSON.stringify(dataarray);
      localStorage.setItem("RoleData",jsonString);
    }
    else{
      var jsonString=JSON.stringify(NewRoleModel);
      localStorage.setItem("RoleData",jsonString);
    }
    let toast=document.querySelector(".toast-role");
    toast.style.display = "flex";

    setTimeout(function() {
      console.log("hi");
      toast.style.display = "none";
      
    }, 300000);
  
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

  function showAllCards(){
    let infocardslist = document.querySelector(".info-cards-list");
    infocardslist.innerHTML="";
    for(var i in roleData){
        var res =createCard(roleData[i]);
        infocardslist.appendChild(res);
    }
  }

  function filter(){
    var selectedlocation = document.getElementById("role-location");
    var selecteddepartment = document.getElementById("role-departments");
    let infolist=document.querySelector(".info-cards-list");
    infolist.innerHTML="";
    for(var i in roleData){
        const doc = roleData[i];
        if(doc.Department == selecteddepartment.value && doc.Location == selectedlocation.value)
        {
            var res=createCard(doc);
            infolist.appendChild(res);
        }
    }
  }

  function showEmp(){
    showTableRows();
    var employeepage = document.querySelector(".employee-page");
    var roledetailspage = document.querySelector(".roledetails-page");
    var rolepage = document.querySelector(".role-page");
    if(!employeepage.style.display || employeepage.style.display == "none"){
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
    if(!roledetailspage.style.display ||roledetailspage.style.display == "none"){
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

  function showFieldDropdown(){
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

  function showAddEmployeePage(){
    var mainpage=document.querySelector(".table-part");
    var emppage=document.querySelector(".addemployee-page");
    var addemp=document.querySelector(".add-employee");
    if(mainpage.style.display == "block")
    {
      mainpage.style.display = "none";
      emppage.style.display = "block";
      addemp.style.display = "none";
    }
    else if(emppage.style.display == "block"){
      mainpage.style.display = "block";
      addemp.style.display = "flex";
      emppage.style.display = "none";
    }
    else{
      mainpage.style.display = "none";
      addemp.style.display = "none";
      emppage.style.display = "block";
    }
  }

  function showAddRolePage(){
    var usertable = document.querySelector(".info-cards-list");
    var rolepage = document.querySelector(".addnewrole-page");
    var filterrole = document.querySelector(".filterrole");
    var addrole = document.querySelector(".add-roledetails");
    var roledetails = document.querySelector(".roledetails-page");
    
    var isUserTableVisible = usertable.style.display === "grid" || getComputedStyle(usertable).display === "grid";
    var isRolePageVisible = rolepage.style.display === "block" || getComputedStyle(rolepage).display === "block";
    if (isUserTableVisible && !isRolePageVisible) {
        usertable.style.display = "none";
        filterrole.style.display = "none";
        addrole.style.display = "none";
        rolepage.style.display = "flex";
    } else if (!isUserTableVisible && isRolePageVisible) {
        rolepage.style.display = "none";
        usertable.style.display = "grid";
        filterrole.style.display = "flex";
        addrole.style.display = "flex";
        roledetails.style.display = "block";
    } else {
        usertable.style.display = "grid";
        filterrole.style.display = "flex";
        rolepage.style.display = "none";
        addrole.style.display = "flex";
    }
  }

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
    const navbarpages=document.querySelector(".navbar-pages");
    const sidebarsmallsidebar=document.querySelector(".sidebar-smallsidebar");
    const smallsidebar=document.querySelector(".small-sidebar");
    smallsidebar.style.display="none";
    sidebar.style.display = "flex";
    sidebarsmallsidebar.style.width="16%";
    navbarpages.style.width="84%";
  }

  function hideSidebar(){
      const sidebar = document.querySelector(".sidebar");     
      const smallsidebar = document.querySelector(".small-sidebar");
      const navbarpages = document.querySelector(".navbar-pages");
      const sidebarsmallsidebar = document.querySelector(".sidebar-smallsidebar");
      sidebar.style.display = "none";
      smallsidebar.style.display = "flex";
      sidebarsmallsidebar.style.width="3%";
      sidebarsmallsidebar.style.height="100%";
      navbarpages.style.width="95%";
  }

  function showDropDown(){
      var arrow=document.querySelector(".arrow");
      var dropdown=document.querySelector(".userstatus-menu");
      arrow.src="assets/svg/arrowdownorange.svg";
      if(!dropdown.style.display ||dropdown.style.display == "none"){
          dropdown.style.display="block";
      }
      else if(dropdown.style.display="block"){
          arrow.src="assets/svg/arrowforwardorange.svg"
          dropdown.style.display="none";
      }
  }

  function handleFileInputChange(){
    var fileInput=document.getElementById("addFilePicker");
    var profilepic=document.querySelector(".profilepic");
    fileInput.addEventListener('change',()=>{
      const fr=new FileReader();
      fr.readAsDataURL(fileInput.files[0]);
      fr.addEventListener('load',()=>{
        fileUrl=fr.result;
        profilepic.src=fileUrl;
        console.log(fileUrl);
      });
    });
    profilepic.src="assets/images/profile-user.png";
    fileUrl="";
  }
  
  function alphabetStateChange(){
    var containers = document.querySelectorAll(".alphabet");
    var previousContainer = null;
    var clickTimer;
    containers.forEach(function(container) {
        container.addEventListener("click", function(event) {
          var spanValue = container.querySelector("span").textContent;
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
                container.classList.remove("change-alphabet");
                filterAlphabet="";
                showTableRows();
            } else {
                clickTimer = setTimeout(function() {
                    clickTimer = null;
                    if (previousContainer !== null) {
                      previousContainer.classList.remove("change-alphabet");
                    }
                    container.classList.add("change-alphabet");
                    filterAlphabet=spanValue;
                    previousContainer = container;
                }, 300); 
            }
        });
    });
  }

  function createFilterDropdown(model, divId,spanId,dropDownId,callback) {
    var filterDropdownContainer = document.createElement("div");
    filterDropdownContainer.classList.add(divId);
    filterDropdownContainer.onclick=function(){
      callback();
    };
    var filterDisplaySpan = document.createElement("span");
    filterDisplaySpan.id = spanId;
    filterDisplaySpan.textContent = model.filterDisplayName;
    filterDropdownContainer.appendChild(filterDisplaySpan);
    var arrowImg = document.createElement("img");
    arrowImg.src = "assets/images/arrowdown.png";
    arrowImg.alt = "Arrowdown symbol";
    arrowImg.width = "10";
    arrowImg.height = "10";
    filterDropdownContainer.appendChild(arrowImg);
    var dropdownListContainer = document.createElement("div");
    dropdownListContainer.classList.add(dropDownId);
    model.checkboxItems.forEach(function(item) {
        var checkboxItem = document.createElement("div");
        checkboxItem.classList.add("checkbox-items");
  
        var span = document.createElement("span");
        span.textContent = item.label;
        checkboxItem.appendChild(span);
  
        var input = document.createElement("input");
        input.type = "checkbox";
        input.value = item.value;
        input.name = item.name;
        input.id = item.id;
        checkboxItem.appendChild(input);
        dropdownListContainer.appendChild(checkboxItem);
    });
    filterDropdownContainer.appendChild(dropdownListContainer);
  return filterDropdownContainer;
  }

  function createMultiSelectDropDown(){
    const filterleft=document.querySelector(".filter-left");

    let dropone=createFilterDropdown(filterDropdownModel,"filter-dropdown-1","filter-display1","filtercheckbox-dropdownlist",showFilterStatusDropdown);
    filterleft.appendChild(dropone);
    let droptwo=createFilterDropdown(filterDropdownModel2,"filter-dropdown-2","filter-display2","filtercheckbox-dropdownlist2",showFilterDepartmentDropdown);
    filterleft.appendChild(droptwo);
    let dropthree=createFilterDropdown(filterDropdownModel3,"filter-dropdown-3","filter-display3","filtercheckbox-dropdownlist3",showFilterLocationDropdown);
    filterleft.appendChild(dropthree);
  }

  function showEmptyDisplay(){
    emppage=document.querySelector(".employee-page");
    roledetailspage=document.querySelector(".roledetails-page"); 
    rolepage=document.querySelector(".role-page");
    if(rolepage.style.display == "block" || roledetailspage.style.display == "block" || emppage.style.display == "block"){
      rolepage.style.display  = "none"; 
      roledetailspage.style.display = "none";
      emppage.style.display = "none";
    }
  }
  
  return {
    createUserRow: createUserRow,
    addEmployeeData: addEmployeeData,
    deleteRow: deleteRow,
    addToCsv: addToCsv,
    filterByAlphabet: filterByAlphabet,
    sortAccordToCol: sortAccordToCol,
    sortDecToCol: sortDecToCol,
    showFilterStatusDropdown: showFilterStatusDropdown,
    showFilterDepartmentDropdown: showFilterDepartmentDropdown,
    showFilterLocationDropdown: showFilterLocationDropdown,
    showTableRows: showTableRows,
    filterTableRows: filterTableRows,
    showSpecific: showSpecific,
    addRoleData: addRoleData,
    createRoleCard: createRoleCard,
    showRoleCard: showRoleCard,
    createCard: createCard,
    showAllCards: showAllCards,
    filter: filter,
    showEmp: showEmp,
    showRole: showRole,
    showAllEmp: showAllEmp,
    showFieldDropdown: showFieldDropdown,
    showAddEmployeePage: showAddEmployeePage,
    showAddRolePage: showAddRolePage,
    filterSection: filterSection,
    showSidebar: showSidebar,
    hideSidebar: hideSidebar,
    showDropDown: showDropDown,
    handleFileInputChange: handleFileInputChange,
    alphabetStateChange: alphabetStateChange,
    createMultiSelectDropDown:createMultiSelectDropDown,
    showEmptyDisplay:showEmptyDisplay,
    getDepartmentCount:getDepartmentCount,
    test:test,
  }
})();






