Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          title: 'Hello, Ext!',
          html: 'Hello, new ExtJs Developer!',
        },
      ],
    });
  },
});
