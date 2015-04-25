describe("Bot", function(){
  var mobile;
  var userAgent;

  beforeEach(function() {
    mobile    = null;
    userAgent = null;
  });

  describe("Googlebot UserAgent", function() {

    beforeEach(function() {
      userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
      mobile = new isMobile.Class(userAgent);
    });

    it("should not be an iPhone", function() {
      expect(mobile.apple.phone).toBe(false);
    });

  });
});
