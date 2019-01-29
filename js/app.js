var db = ImmortalDB.ImmortalDB
var editor = ace.edit("bigvimbox");
editor.renderer.setShowGutter(false);
editor.setKeyboardHandler("ace/keyboard/vim");
editor.setShowPrintMargin(false);
editor.getSession().setMode("ace/mode/markdown");
editor.getSession().setUseWrapMode(true);
editor.$blockScrolling = Infinity

var VimApi = require("ace/keyboard/vim").CodeMirror.Vim
VimApi.defineEx("write", "w", function(cm, input) {
  var value = editor.getValue();
  ;(async () => {
    await db.set('bigvimbox', value)
  })()
});
VimApi.defineEx("yank", "y", function(cm, input) {
  var value = editor.getValue();
  console.log("yanked", value);
});

;(async () => {
  var value = await db.get('bigvimbox');
  if(value) {
    editor.setValue(value, 1);
  }
})()

document.getElementById('bigvimbox').style.fontSize='16px';
editor.clearSelection();
editor.focus();
