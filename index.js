var reporter = require('cucumber-html-reporter');

const REPORT_LOCATION = process.env.report_location;
const OUTPUT_LOCATION = process.env.output_location;

console.log('REPORT_LOCATION:',REPORT_LOCATION)

if(REPORT_LOCATION.slice(-1) != '/') {
    console.log("File");
    var options = {
        theme: 'bootstrap',
        jsonFile: REPORT_LOCATION,
        output: OUTPUT_LOCATION+'/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        ignoreBadJsonFile: true,
        launchReport: false,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
} else {
    console.log("Directory");
var options = {
        theme: 'bootstrap',
        jsonDir: REPORT_LOCATION,
        output: OUTPUT_LOCATION+'/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        ignoreBadJsonFile: true,
        launchReport: false,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
}
    reporter.generate(options);
    

    //more info on `metadata` is available in `options` section below.

    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
