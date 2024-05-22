//Cambio de menú
var menuIcon = document.getElementById("icon");
var menu = document.getElementById('menu');

menuIcon.addEventListener('click', function(){
    if (icon.className == 'bx bx-menu' && menu.style.display == 'none') {
        icon.className = 'bx bx-x';
        menu.style.display = 'flex';
    } else {
        icon.className = 'bx bx-menu';
        menu.style.display = 'none';
    }
})


//Redirección a GitHub
var git = document.getElementById('github');
git.addEventListener('click', function(){
    alert("Redirecting to GitHub...");
    window.location.href = 'https://github.com/PauProg';
})



//Redirección a paginas

//Cambio a login
var loginButton = document.getElementById('loginButton');
var aboutPage = document.getElementById('aboutPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');
var loginPage = document.getElementById('loginPage');

loginButton.addEventListener('click', function(){
    var loginPageState = window.getComputedStyle(loginPage);

    if (loginPageState.display === 'none'){
        aboutPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        loginPage.style.display = 'flex';
    }
})

//Cambio a login desde hidden
var loginButtonHidden = document.getElementById('loginButtonHidden');
var aboutPage = document.getElementById('aboutPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');
var loginPage = document.getElementById('loginPage');
var menuIcon = document.getElementById("icon");
var menu = document.getElementById('menu');

loginButtonHidden.addEventListener('click', function(){
    var loginPageState = window.getComputedStyle(loginPage);

    if (loginPageState.display === 'none'){
        aboutPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        loginPage.style.display = 'flex';
        icon.className = 'bx bx-menu';
        menu.style.display = 'none';
    }
})


//Cambio a about
var aboutButton = document.getElementById('aboutButton');
var loginPage = document.getElementById('loginPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');
var aboutPage = document.getElementById('aboutPage');

aboutButton.addEventListener('click', function(){
    var aboutPageState = window.getComputedStyle(aboutPage);

    if (aboutPageState.display === 'none'){
        loginPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        aboutPage.style.display = 'flex';
    }
})

//Cambio a about desde hidden
var aboutButtonHidden = document.getElementById('aboutButtonHidden');
var loginPage = document.getElementById('loginPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');
var aboutPage = document.getElementById('aboutPage');
var menuIcon = document.getElementById("icon");
var menu = document.getElementById('menu');

aboutButtonHidden.addEventListener('click', function(){
    var aboutPageState = window.getComputedStyle(aboutPage);

    if (aboutPageState.display === 'none'){
        loginPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        aboutPage.style.display = 'flex';
        icon.className = 'bx bx-menu';
        menu.style.display = 'none';
    }
})

//Cambio a about desde login
var loginButtonForm = document.getElementById('loginButtonForm');
var loginPage = document.getElementById('loginPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');
var aboutPage = document.getElementById('aboutPage');

loginButtonForm.addEventListener('click', function(){
    var aboutPageState = window.getComputedStyle(aboutPage);

    if (aboutPageState.display === 'none'){
        loginPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        aboutPage.style.display = 'flex';
    }
})

//Cambio a services
var servicesButton = document.getElementById('servicesButton');
var loginPage = document.getElementById('loginPage');
var aboutPage = document.getElementById('aboutPage');
var opinionsPage = document.getElementById('opinionsPage');
var servicesPage = document.getElementById('servicesPage');

servicesButton.addEventListener('click', function(){
    var servicesPageState = window.getComputedStyle(servicesPage);

    if (servicesPageState.display === 'none'){
        loginPage.style.display = 'none';
        aboutPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        servicesPage.style.display = 'flex';
    }
})

//Cambio a services desde hidden
var servicesButtonHidden = document.getElementById('servicesButtonHidden');
var loginPage = document.getElementById('loginPage');
var aboutPage = document.getElementById('aboutPage');
var opinionsPage = document.getElementById('opinionsPage');
var servicesPage = document.getElementById('servicesPage');
var menuIcon = document.getElementById("icon");
var menu = document.getElementById('menu');

servicesButtonHidden.addEventListener('click', function(){
    var servicesPageState = window.getComputedStyle(servicesPage);

    if (servicesPageState.display === 'none'){
        loginPage.style.display = 'none';
        aboutPage.style.display = 'none';
        opinionsPage.style.display = 'none';
        servicesPage.style.display = 'flex';
        icon.className = 'bx bx-menu';
        menu.style.display = 'none';
    }
})

//Cambio a opinions
var opinionsButton = document.getElementById('opinionsButton');
var loginPage = document.getElementById('loginPage');
var aboutPage = document.getElementById('aboutPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');

opinionsButton.addEventListener('click', function(){
    var opinionsPageState = window.getComputedStyle(opinionsPage);

    if (opinionsPageState.display === 'none'){
        loginPage.style.display = 'none';
        aboutPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'flex';
    }
})

//Cambio a opinions desde hidden
var opinionsButtonHidden = document.getElementById('opinionsButtonHidden');
var loginPage = document.getElementById('loginPage');
var aboutPage = document.getElementById('aboutPage');
var servicesPage = document.getElementById('servicesPage');
var opinionsPage = document.getElementById('opinionsPage');
var menuIcon = document.getElementById("icon");
var menu = document.getElementById('menu');

opinionsButtonHidden.addEventListener('click', function(){
    var opinionsPageState = window.getComputedStyle(opinionsPage);

    if (opinionsPageState.display === 'none'){
        loginPage.style.display = 'none';
        aboutPage.style.display = 'none';
        servicesPage.style.display = 'none';
        opinionsPage.style.display = 'flex';
        icon.className = 'bx bx-menu';
        menu.style.display = 'none';
    }
})