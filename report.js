     const report = require('multiple-cucumber-html-reporter');

     report.generate({
     	jsonDir: 'target/cucumber-json/',
     	reportPath: 'target/report/',
     	metadata:{
             browser: {
                 name: 'chrome'
             },
             device: 'Local test machine',
             platform: {
                 name: 'Windows'
             }
         },
         customData: {
             title: 'Run info',
             data: [
                 {label: 'Project', value: 'ZTrain web automation'}
             ]
         }
     });