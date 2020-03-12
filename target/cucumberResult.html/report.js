$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "line": 1,
  "name": "To Verify the Documentation Page of developer portal",
  "description": "",
  "id": "to-verify-the-documentation-page-of-developer-portal",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "To Verify Angular has initialized for all internal documentation links",
  "description": "",
  "id": "to-verify-the-documentation-page-of-developer-portal;to-verify-angular-has-initialized-for-all-internal-documentation-links",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the valid credentials for developer portal",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Validate all internal dcumentation links on that page are loading and they are angular initialized or not",
  "keyword": "Then "
});
formatter.match({
  "location": "PallaviSeleniumTest_Here.the_valid_credentials_for_developer_portal()"
});
formatter.result({
  "duration": 11406871362,
  "status": "passed"
});
formatter.match({
  "location": "PallaviSeleniumTest_Here.validate_all_internal_dcumentation_links_on_that_page_are_loading_and_they_are_angular_initialized_or_not()"
});
