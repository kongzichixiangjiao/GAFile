(function(window, document) {

    // 公共方法集合
  const methods = {
    appendChild(parent, ...children) {
      children.forEach(el => {
        parent.appendChild(el);
      });
    },
    $(selector, root = document) {
      return root.querySelector(selector);
    },
    $$(selector, root = document) {
      return root.querySelectorAll(selector);
    }
  };

})(window, document)