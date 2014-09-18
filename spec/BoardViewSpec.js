describe('ChessboardView', function() {
  var view;

  beforeEach(function() {
    view = new BoardView({model: new Board({n:4})});
  });

  xit('should exist', function() {
    expect(view).to.be.ok;
  });
});
