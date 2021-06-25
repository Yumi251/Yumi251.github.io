(function() {
    var model = window.model;
    var storage = window.localStorage;
    
    Object.assign(model, {
      init: function(callback) {
        var data = storage.getItem(model.TOKEN);
        try {
            //将数据转换成JavaScript对象   
          if (data) model.data = JSON.parse(data);
        }
        catch (e) {
          storage.setItem(model.TOKEN, '');
          console.error(e);
        }
  
        if (callback) callback();
      },
      flush: function(callback) {
        try {
            //将JavaScript转成json字符串
          storage.setItem(model.TOKEN, JSON.stringify(model.data));
        }
        catch (e) {
          console.error(e);
        }
        if (callback) callback();
      }
    });
  })();