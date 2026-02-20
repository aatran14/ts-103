document.querySelectorAll("pre > code").forEach(function (block) {
  var text = block.textContent;

  // escape HTML
  text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // single pass so replacements don't collide
  text = text.replace(
    /(\/\/.*)|("(?:[^"\\]|\\.)*")|(\b(?:function|return|var|let|const)\b)|(:\s*(?:string|number|boolean|void|any|unknown))/g,
    function (m, comment, str, keyword, type) {
      if (comment) return '<span class="hl-comment">' + comment + "</span>";
      if (str)     return '<span class="hl-string">' + str + "</span>";
      if (keyword) return '<span class="hl-keyword">' + keyword + "</span>";
      if (type)    return '<span class="hl-type">' + type + "</span>";
      return m;
    }
  );

  block.innerHTML = text;
});
