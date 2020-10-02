const puppeteer = require('puppeteer');

(async () => {
    const user = ""
    const pass =""
    const browser = await puppeteer.launch({ slowMo: 100});
    const page = await browser.newPage();
   
    await page.goto('https://zeusr.sii.cl//AUT2000/InicioAutenticacion/IngresoRutClave.html?https://misiir.sii.cl/cgi_misii/siihome.cgi');
   
    const usuario  = await page.type('#rutcntr',user)
    const password = await page.type("#clave",pass)
    const form = await page.$eval('#bt_ingresar', form => form.click())
    /*foto antes de enviar*/
    await page.screenshot({path: 'data.png'})
    await page.waitForNavigation()
    await page.waitFor(1000);
      /*foto ya enviado enviar*/
    await page.screenshot({path: 'result.png'})
    await browser.close();
  })();