const webdriver=require('selenium-webdriver');
const USERNAME='agustin.amaya.g21';
const KEY='gotUbOMQKfA1664aZFTVH4EHx4UcOQDIiUV3YNVNN2mocfZL2v'
const GRID_HOST='hub.lambdatest.com/wd/hub';

function searchTextOnGoogle(){
    //setup input capabilities
    const capability = {
        "browserName": "Chrome"
        ,
        "browserVersion": "108.0",
        "LT:Options": {
            "username": "agustin.amaya.g21",
            "accessKey": "gotUbOMQKfA1664aZFTVH4EHx4UcOQDIiUV3YNVNN2mocfZL2v",
            "visual": true,
            "video": true,
            "platformName": "Windows 8",
            "project": "TechnoGift Test",
            "tunnel": false,
            "w3c": true,
            "plugin": "node_js-node_js" 
        }
    }

    const gridUrl='https://'+USERNAME+':'+KEY+'@'+GRID_HOST;

    const driver=new webdriver.Builder().usingServer(gridUrl).withCapabilities(capability).build();

    driver.get('https://apptareas.herokuapp.com/create').then(function(){
       
        driver.findElement(webdriver.By.name('title')).sendKeys('Custom').then(function()
        {
          driver.getTitle().then(function(title)


          
          {
              setTimeout(function()
              {
                  console.log(title);
              },6000);
          })
        });

        driver.findElement(webdriver.By.name('description')).sendKeys('Resucitar a Jambrina').then(function()
        {
          driver.getTitle().then(function(title)
          {
              setTimeout(function()
              {
                  console.log(title);
              },6000);
          })
        });


        /*driver.findElement(webdriver.By.name('title')).sendKeys('Tarea 1').then(function(){
            console.log("Titulo escrito exitosamente.");
         });
         driver.findElement(webdriver.By.name('description')).sendKeys('Resucitar a jambrina').then(function(){
             console.log("Descripción escrita exitosamente.");

             driver.findElement(webdriver.By.id('btnSubmit')).click().then(function(){
                console.log("Registro añadido.");
            })
          });*/
 

    }).catch(function(err){
        console.log("test failed with reason "+err)
        driver.executeScript('lambda-status=failed');
        driver.quit();
    });


}

searchTextOnGoogle();