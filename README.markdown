Quilting
==============

Javascript Platform Detection
-----------------------------

Depending on your situation, you might need to handle things differently. Here are 3 methods to detect mac in order to provide Mac users with alternate content.

### Write
This method detects the platform directly in the link string as it's being written. It modifies the string so the link will lead to its corresponding Mac-specific counterpart.

### Refresh
A meta-refresh is wrapped in a platform detection conditional. If the platform is Mac, it will display the meta refresh string and re-direct to a Mac-specific page.

### Get Element by ID
This adds a click event function to the link and replaces the string in the link to the Mac-specific version.
