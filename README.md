# Squarespace Email Blacklist

Summary
-------

This project allows SquareSpace websites to prevent users from submitting forms
with public, free email accounts.  However, it can be easily modified to blacklist
any email domain.

License
-------

This project is released under the GNU Affero General 
Public License Version 3

Usage
-----

To use this project, paste the following code into your page...

```html
<script type="javascript" src="https://sharptopco.github.io/squarespace-email-blacklist/email-blacklist.js"></script>
<script type="javascript">
    $( document ).ready( function() {
        initializeBlacklistListener();
    });
</script> 
```