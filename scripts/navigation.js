function ShowEmp(){
    var page1=document.querySelector(".page1");
    var page2=document.querySelector(".page2");
    var page4=document.querySelector(".page4");

    if(page1.style.display == "none"){
        page1.style.display = "block";
        page2.style.display = "none";
        page4.style.display = "none";
    }
    else{
        page1.style.display = "none";
    }
}

function ShowRole(){
    var page1=document.querySelector(".page1");
    var page2=document.querySelector(".page2");
    var page4=document.querySelector(".page4");

    if(page2.style.display == "none"){
        page2.style.display = "block";
        page1.style.display = "none";
        page4.style.display = "none";
    }
    else{
        page2.style.display = "none";
    }
}

function ShowPage2(){
    var iframe = document.getElementById("iframeContent");
    var page3 = document.querySelector(".page3");
  
    if (iframe.style.display === "none") {
        iframe.style.display = "block";
        page3.innerHTML = iframe.contentWindow.document.querySelector(".page2").innerHTML;
    } else {
        iframe.style.display = "none";
        page3.innerHTML = ""; // Clear the content of page3
    }
  }

  function ShowPage1(){
    var page1Content=document.querySelector(".page1");
    var page3=document.querySelector(".page3"); 
   
    
    const isPage1InPage3 = page3.querySelector('.add-employee') !== null;
    if (isPage1InPage3) {
        const page1InPage3 = page3.querySelector('.add-employee');
        const sp=document.querySelector(".sample-body");
        const addemppage=document.querySelector(".addemployee-page");
        page1InPage3.remove();
        sp.remove();
        addemppage.remove();
    } else {
        const page1Clone = page1Content.cloneNode(true);
        page1Clone.classList.remove('page1');
        page3.appendChild(page1Clone);
    }
  }
  
  function ShowAllEmp(){
      var page1=document.querySelector(".page1");
      var page2=document.querySelector(".page2");
      var page4=document.querySelector(".page4");
      ShowRoleCard();
      if(page4.style.display == "none"){
          page4.style.display = "block";
          page1.style.display = "none";
          page2.style.display = "none";
      }
      else{
          page4.style.display = "none";
      }
  }