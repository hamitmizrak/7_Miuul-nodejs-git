// Export (header) Tekli Function
const headerOther= require('./headerFile');
// node main.js
// node main
// nodemon main.js
// nodemon main
headerOther();


// Export Footers Çoklu Function (Alias)
const foot1Function=require('./footerFile').foot1;
const foot2Function=require('./footerFile').foot2;
foot1Function();
foot2Function();


