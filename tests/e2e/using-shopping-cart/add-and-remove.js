module.exports = {
  'Testing add to basket functionality' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('img[class=productImg]', 1000)
      .click('img[class=productImg]')
      .pause(1000)
      .assert.containsText('b', '£ 50')
      .click('button[class=removeFromCartBtn]')
      .pause(1000)
      .assert.containsText('b', '£ 0')
      .end();
  }
};
