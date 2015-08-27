describe("app.views.BackToTop", function() {
  beforeEach(function() {
    spec.loadFixture("aspects_index");
    this.view = new app.views.BackToTop();
  });

  describe("backToTop", function() {
    it("scrolls to the top of the page", function() {
      var spy = spyOn($.fn, "animate");
      this.view.backToTop($.Event());
      expect(spy).toHaveBeenCalledWith({scrollTop: 0});
    });
  });

  describe("toggleVisibility", function() {
    it("toggles the button visibility depending on the scroll position", function() {
      expect($("#back-to-top")).not.toHaveClass("visible");
      var spy = spyOn($.fn, "scrollTop").and.returnValue(1000);
      this.view.toggleVisibility();
      expect($("#back-to-top")).not.toHaveClass("visible");
      spy.and.returnValue(1001);
      this.view.toggleVisibility();
      expect($("#back-to-top")).toHaveClass("visible");
      spy.and.returnValue(1000);
      this.view.toggleVisibility();
      expect($("#back-to-top")).not.toHaveClass("visible");
    });
  });
});