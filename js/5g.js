const RSS = require('vanilla-rss');
const rss = new RSS(
    document.querySelector("#rss-feeds"),
    "https://partnernetwork.ebay.de/epn-blog?format=rss",
    {}
);
rss.render();

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Example</title>
    <script src="dist/rss.global.min.js"></script>
    <script>
      window.onload = function() {
        new RSS(
          document.querySelector("#rss-feeds"),
          "https://partnernetwork.ebay.de/epn-blog?format=rss"
        ).render();
      };
    </script>
  </head>
  <body>
    <div id="rss-feeds"></div>
  </body>
</html>