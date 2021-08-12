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
			Ext.Msg.alert('Message added');
		}
	}
]

	}]
	

});
