Ext.define('MyappDay2.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items:[{
		xtype: 'panel',
		fullscreen:true,
	//	layout:'vbox',
		defaultType: 'textfield',
		defaults:{
			flex:1
		},
	items:[{
		html:'User Form',
		style: 'background-color: white'
	},
	{
		fieldLabel:'First Name',
		name:'firstname'
	},
	{
		fieldLabel:'Last Name',
		name:'lastname'
	},
	{
		xtype: 'datefield',
		fieldLabel: 'Date of Birth',
		name: 'birthDate',
		msgTarget: 'under',
		invalidTest:'"{0}" bad. "{1}" good.'
	},
	{
		xtype:'button',
		text:'Add',
		handler: function(){
			//DELETE
			//Ext.Ajax.request({
			//	url: 'http://localhost:3000/posts/3',
			//	method:'DELETE',
			//	success:function(response){
			//		Ext.Msg.alert('I am in success');
			//		Ext.Msg.alert(response);
			//			},
			//			failure:function(response){
			//				Ext.Msg.alert('I am in failure');
			//				Ext.Msg.alert(response);
			//					}
			//});
			//POST
			//Ext.Ajax.request({
			//	url: 'http://localhost:3000/posts',
			//	method:'POST',
			//	jsonData: {
			//		name: 'TestName'
			//	},
			//	success: function(response){
			//		Ext.Msg.alert(response);
			//	},
			//	failure: function(){
			//		Ext.Msg.alert(response);
			//	}
			//});
			
			//Ext.Ajax.request({
			//	url: 'http://localhost:3000/posts',
			//	success:function(response){
			//	const responseBody = Ext.decode(response.responseText)
			//	console.log(responseBody);
			//	}
			//})
//			Ext.Msg.alert('Message added');
		}
	}
]

	}]
	

});
