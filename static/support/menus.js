Ext.require([
    'Ext.tip.QuickTipManager',
    'Ext.menu.*',
    'Ext.form.field.ComboBox',
    'Ext.layout.container.Table',
    'Ext.container.ButtonGroup',
	    'Ext.tab.*',
    'Ext.window.*',
    'Ext.tip.*',
	'Ext.grid.*',
    'Ext.layout.container.Border',
	'Ext.chart.*'
]);

colnames = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK"];

Ext.onReady(function(){

// GRID
/*
gridwin=Ext.create('Ext.window.Window', {
    title: 'Hello',
	closable:true,
    height: 200,
    width: 400,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'}],                 // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
});
*/

    function onSToggle(item, pressed){
        if (!win) {
            win = Ext.create('widget.window', {
                title: 'Layout Window',
                closable: true,
                closeAction: 'hide',
                //animateTarget: this,
                width: 600,
                height: 350,
                layout: 'border',
                bodyStyle: 'padding: 5px;',
                items: [{
                    region: 'west',
                    title: 'Navigation',
                    width: 200,
                    split: true,
                    collapsible: true,
                    floatable: false
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
                        title: 'RTGFX',
                        html: 'Hello world 1'
                    }, {
                        title: 'Online Help',
                        html: 'Hello world 3',
                        closable: true
                    }, {
                        title: 'Support',
                        html: 'Hello world 4',
                        closable: true
                    }]
                }]
            });
        }
        button.dom.disabled = true;
        if (win.isVisible()) {
            win.hide(this, function() {
                button.dom.disabled = false;
            });
        } else {
            win.show(this, function() {
                button.dom.disabled = false;
            });
        }
}


    function onRecalcToggle(item, pressed){
	global_recalc_on = pressed;
	 Ext.example.msg('Button Toggled', 'Button "{0}" was toggled to {1}.', item.text, pressed);
    }

    function onRadioToggle(item, pressed){
	 var s_c_o = SocialCalc.GetSpreadsheetControlObject();
	 //Ext.example.msg('Button Toggled', 'Button "{0}" was toggled to {1}.', item.text, pressed);
	 // this could be done more elegantly for sure
	 if (pressed) {
	 if (item.text=="Edit") SocialCalc.SetTab(document.getElementById("SocialCalc-edittab"));
	 if (item.text=="Names") SocialCalc.SetTab(document.getElementById("SocialCalc-namestab"));
	 if (item.text=="Format") SocialCalc.SetTab(document.getElementById("SocialCalc-settingstab"));
	 }
	console.log(item);
    }
    
    // functions to display feedback
    function onButtonClick(btn){
        Ext.example.msg('Button Click','You clicked the "{0}" button.', btn.text);
    }
	
	function onChartReq(btn){
	    //console.log(top.spreadsheet.editor.ecell.coord);
		//console.log(btn);
	    charts_win.show();
		top["charts_name_txt-inputEl"].value=top.spreadsheet.editor.ecell.coord;
    }

	function import_clicked(a,b) {
	 // CSVURLtxt-inputEl.value e' la url
	    Importcsv("1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n1,2,3,4,5\na,b,v,d,e\n");
	}
	
	function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
	
	function Importcsv(content)
	{
	carr = CSVToArray( content, "," );
	var tmp="";
	var c_str="";
	var row=0;
	var csvel="";
	for (cl in carr) {
	    row++;
		for (col in carr[cl]) {
		if (carr[cl].length > 0) {
		csvel=carr[cl][col];
		if (isNumber(csvel)) {
		console.log(cl+"."+col+":"+csvel);
		c_str=c_str+"set "+colnames[col]+(row)+" value n "+csvel+"\n";
		console.log("set "+colnames[col]+(row)+" value n "+csvel+"\n");
		}
		else
		{
		if (csvel!="") {
		console.log("NAN:"+cl+"."+col+":"+csvel);
		c_str=c_str+"set "+colnames[col]+(row)+" text t "+csvel+"\n";
		console.log("set "+colnames[col]+(row)+" text t "+csvel+"\n");		
		}
		}
		}
		}
	
	}
	window.top.spreadsheet.ExecuteCommand(c_str,"");
	console.log("executing\n"+c_str);
	}
	
	
    function onItemClick(item){
        Ext.example.msg('Menu Click', 'You clicked the "{0}" menu item.', item.text);
    }

    function onItemCheck(item, checked){
        Ext.example.msg('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
    }

    function onItemToggle(item, pressed){
        Ext.example.msg('Button Toggled', 'Button "{0}" was toggled to {1}.', item.text, pressed);
    }
    
    Ext.QuickTips.init();

    var dateMenu = Ext.create('Ext.menu.DatePicker', {
        handler: function(dp, date){
            Ext.example.msg('Date Selected', 'You choose {0}.', Ext.Date.format(date, 'M j, Y'));

        }
    });

    var colorMenu = Ext.create('Ext.menu.ColorPicker', {
        handler: function(cm, color){
            Ext.example.msg('Color Selected', '<span style="color:#' + color + ';">You choose {0}.</span>', color);
        }
    });

    var store = Ext.create('Ext.data.ArrayStore', {
        fields: ['abbr', 'state'],
        data : Ext.example.states
    });
/*
    var combo = Ext.create('Ext.form.field.ComboBox', {
        hideLabel: true,
        store: store,
        displayField: 'state',
        typeAhead: true,
        queryMode: 'local',
        triggerAction: 'all',
        emptyText: 'Select a state...',
        selectOnFocus: true,
        width: 135,
        iconCls: 'no-icon'
    });
*/
    var menu = Ext.create('Ext.menu.Menu', {
        id: 'mainMenu',
        style: {
            overflow: 'visible'     // For the Combo popup
        },
        items: [
            {
                text: 'Make public',
                checked: true,       // when checked has a boolean value, it is assumed to be a CheckItem
                checkHandler: onItemCheck
            }, '-',{
               text: 'Choose a Date',
               iconCls: 'calendar',
               menu: dateMenu // <-- submenu by reference
           },{
               text: 'Choose a Color',
               menu: colorMenu // <-- submenu by reference
           }
        ]
    });

    var tb = Ext.create('Ext.toolbar.Toolbar');
    tb.render('toolbar');
    tb.suspendLayouts();

    tb.add({
            text:'File',
            iconCls: 'bmenu',  // <-- icon
            menu: menu  // assign menu by instance
        });

tb.add("-",{
        text: 'Edit',  toggleGroup: 'ratings',

		        tooltip: 'Show cells.',
        enableToggle: true,
        toggleHandler: onRadioToggle,
        pressed: true
    },{
        text: 'Format', toggleGroup: 'ratings',
		        tooltip: 'Click here to format selected cells.',
        enableToggle: true,
        toggleHandler: onRadioToggle,
        pressed: false
    },{
        text: 'Names', toggleGroup: 'ratings',
		             tooltip: {text:'Click to define a new name and see a list of defined names', title:'Use names instead of cell references'},
        enableToggle: true,
        toggleHandler: onRadioToggle,
        pressed: false
    },"-");
	
	tb.add({
        text: 'RT Chart', 
		tooltip: {text:'Click to chart the contents on the current cells', title:'Realtime Chart'},
        handler: onChartReq,
 
    },"-");

/*
	tb.add(

        Ext.create('Ext.button.Split', {
            text: 'View',
            handler: onButtonClick,
            tooltip: {text:'This is a an example QuickTip for a toolbar item', title:'Tip Title'},
            iconCls: 'blist',
            // Menus can be built/referenced by using nested menu config objects
            menu : {
                items: [{
                    text: '<b>Bold</b>', handler: onItemClick
                }, {
                    text: '<i>Italic</i>', handler: onItemClick
                }, {
                    text: '<u>Underline</u>', handler: onItemClick
                }, '-', {
                    text: 'Pick a Color',
                    handler: onItemClick,
                    menu: {
                        showSeparator: false,
                        items: [
                            Ext.create('Ext.ColorPalette', {
                                listeners: {
                                    select: function(cp, color){
                                        Ext.example.msg('Color Selected', 'You chose {0}.', color);
                                    }
                                }
                            }), '-',
                            {
                                text: 'More Colors...',
                                handler: onItemClick
                            }
                        ]
                    }
                }, {
                    text: 'Extellent!',
                    handler: onItemClick
                }]
            }
        }));
*/
    menu.add(' ');

    // Menus have a rich api for
    // adding and removing elements dynamically
    var item = menu.add({
        text: 'Dynamically added Item'
    });
    // items support full Observable API
    item.on('click', onItemClick);

    // items can easily be looked up
    menu.add({
        text: 'Disabled Item',
        id: 'disableMe'  // <-- Items can also have an id for easy lookup
        // disabled: true   <-- allowed but for sake of example we use long way below
    });
    // access items by id or index
    //menu.items.get('disableMe').disable();



	
	
    var scrollMenu = Ext.create('Ext.menu.Menu');
    for (var i = 0; i < 20; ++i){
        scrollMenu.add({
            text: 'Sheet' + (i + 1),
            handler: onItemClick
        });
    }
    // scrollable menu
	/*
    tb.add({
        icon: 'preview.png',
        cls: 'x-btn-text-icon',
        text: 'Other Sheets',
        menu: scrollMenu 
    });
	*/ /*
		    tb.add({
        text: 'Show Charts',
		        tooltip: 'Show charts/graphs window',
        enableToggle: true,
		id:"winSHOW",
		        toggleHandler: onSToggle,
        pressed: false
    },"-");
*/
    tb.add({
        text: 'Help',
        url: 'http://livecalc.uservoice.com/knowledgebase',
        baseParams: {
            q: 'urlparam'
        },
        tooltip: 'Click here for help.'
    });

    // add a combobox to the toolbar
    combo = Ext.create('Ext.form.field.ComboBox', {
        hideLabel: true,
        store: store,
        displayField: 'state',
        typeAhead: true,
        queryMode: 'local',
        triggerAction: 'all',
        emptyText:'Update frequency',
        selectOnFocus:true,
        width:135
    });
    tb.add("-",combo);
	
	sentalertstore =  Ext.create('Ext.data.ArrayStore', 	{
fields: [
{name:"Sent",type:"string"},{name:"Content",type:"string"}
]
, data: [
['01012014', 'Alert logging not yet implemented'],
['---', '--']
]
}
); 
	alertstore =  Ext.create('Ext.data.ArrayStore', {
fields: [
{name:"Cell",type:"string"},{name:"Contents",type:"string"}
]
, data: []
});

	
	
	
	
 alerts_win = Ext.create('widget.window', {
                x:100,
                title: 'Live Alerts',
                closable: true,
                closeAction: 'hide',
                //animateTarget: this,
                width: 600,
                height: 350,
                layout: 'border',
                bodyStyle: 'padding: 5px;',
                items: [{
                    region: 'west',
                    title: 'Help',
                    width: 150,
                    split: true,
                    collapsible: true,
                    floatable: true
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
		id:'alert_grid_exist',			
		title: 'Existing alerts',
        xtype: 'grid',
		forceFit:true,
        emptyText: '<span class="emptyText" style="position:absolute;left:10px;top:10px">No rows found.</span>',
        border: false,
        columns: [{text:"prova",flex:1,header: 'Cell',dataIndex:"Cell"},{header: 'Contents',dataIndex:"Contents",width:80}],              
        store: alertstore
                    }, {
		id:'alert_grid_sent',			
		title: 'Sent alerts',
        xtype: 'grid',
		forceFit:true,
        border: false,
        columns: [{header: 'Sent',dataIndex:'Sent',flex:1},{header: 'Content',dataIndex:"Content",flex:1}],              
        store:sentalertstore                  }]
                }]
            });
	
 charts_win = Ext.create('widget.window', {
    "xtype": "window",
    "height": 242,
    "width": 400,
    "title": "New realtime chart",
    "modal": true,
    "items": [
        {
            "xtype": "form",
            "layout": {
                "type": "auto"
            },
            "bodyPadding": 8,
            "title": "Pick a name and color",
            "items": [
                {
                    "xtype": "textfield",
					"id":"charts_name_txt",
                    "minWidth": 300,
                    "width": 340,
                    "fieldLabel": "Cell:",
                    "labelWidth": 64
                },
                {
                    "xtype": "textfield",
					"bodyPadding": 8,
					"id":"charts_title_txt",
                    "minWidth": 300,
                    "width": 340,
                    "fieldLabel": "Title (opt.):",
                    "labelWidth": 64
                },				
                {
                    "xtype": "colormenu",
                    "floating": false,
					
                }
            ]
        }
    ],
    "dockedItems": [
        {
            "xtype": "toolbar",
            "dock": "bottom",
			 layout: {
                        pack: 'end',
                        type: 'hbox'
                    },
            "items": [

                {
                    "xtype": "button",
                    "text": "cancel",
					"handler":function(__btn,__event){ charts_win.hide();  }
                },
                {
                    "xtype": "button",
                    "text": "Create Chart",
					"handler":function(__btn,__event){ window.open("/rtgfx/"+window.top.SocialCalc._room+"/"+top["charts_name_txt-inputEl"].value,"chart"+top["charts_name_txt-inputEl"].value,"menubar=1,resizable=1,width=750,height=350");charts_win.hide();} 
                }
            ]
        }
    ]
}
);

function refreshAlerts(){
//Ext.getCmp("alert_grid_exist").removeAll();
Ext.getCmp("alert_grid_exist").store.remove(Ext.getCmp("alert_grid_exist").store.getRange());
var tctr=0;
for (each in window.top.SocialCalc.GetSpreadsheetControlObject().sheet.cells)
{
var tmpv =  window.top.SocialCalc.GetSpreadsheetControlObject().sheet.cells[each].formula;
if ( tmpv.indexOf("EMAIL")>-1 || tmpv.indexOf("TWEET")>-1 ) {
Ext.getCmp("alert_grid_exist").store.add({Cell:each,Contents:tmpv});
tctr++;}
}
if (tctr == 0)
Ext.getCmp("alert_grid_exist").store.add({Cell:"---",Contents:"There are no configured alerts on this sheet."});
}

	
 r_win = Ext.create('widget.window', {
				x:150,
                title: 'R integration',
                closable: true,
                closeAction: 'hide',
                //animateTarget: this,
                width: 800,
                height: 350,
                layout: 'border',
                bodyStyle: 'padding: 5px;',
                items: [{
                    region: 'west',
                    title: 'Help',
                    width: 100,
                    split: true,
                    collapsible: true,
					html: '<div style="padding:6px">Use the power of R from Livecalc.</div>',
                    floatable: true
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
                        title: 'Free advanced R functions',
                        html: '<div style="padding:6px">Insert list of R functions available here</div>'
                    }, {
                        title: 'Premium R',
                        html: '<div style="padding:6px">Copy to upsell to locally installed package, including trading etc etc goes here</div>'
                    }, {
                        title: 'R spread analysis',
                        html: '<div style="padding:6px">Copy to upsell to locally installed package, including trading etc etc goes here</div>'
                    }]
                }]
            });

	
 ld_win = Ext.create('widget.window', {
				x:300,
                title: 'Live Data Sources',
                closable: true,
                closeAction: 'hide',
                //animateTarget: this,
                width: 600,
                height: 350,
                layout: 'border',
                bodyStyle: 'padding: 5px;',
                items: [{
                    region: 'west',
                    title: 'Help',
                    width: 150,
                    split: true,
                    collapsible: true,
					html:"<div style='padding:6px'>These symbols are available in our free package:</div>",
                    floatable: true
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [ {
                        title: 'Real Time Symbol List',
                        html: '<iframe src="http://50.19.35.22:8001/quote_grid.php" width=100% height=100%></iframe>'
                    },
					{
                        title: 'End of day Symbol List',
                        html: '<iframe src="http://50.19.35.22:8001/quote_grid.php" width=100% height=100%></iframe>'
                    },
					{
                        title: 'Import CSV',
						     bodyStyle: 'padding: 5px;',
                        xtype:"panel",
						
						items: [
                {
                    xtype: 'radiogroup',
					id:"CSVSEPtxt",
                    width: 400,
                    fieldLabel: 'Separator',
                    items: [
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Comma'
                        },
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Space'
                        },
                        {
                            xtype: 'radiofield',
                            boxLabel: 'Semicolon'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    width: 372,
					id:"CSVURLtxt",
                    fieldLabel: 'insert URL:'
                },
				{
            xtype: 'filefield',
            id: 'form-file',
			width: 372,
            emptyText: '..or upload a file',
            fieldLabel: 'CSV Upload',
            name: 'csv-path',
            buttonText: '',
            buttonConfig: {
                iconCls: 'upload-icon'
            }}
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        pack: 'end',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Import',
							handler:import_clicked
                        },
                        {
                            xtype: 'button',
                            text: 'cancel'
                        }
                    ]
                }
            ]
						
                    }]
                }]
            });

 sce_win = Ext.create('widget.window', {
     x: 110,
     title: 'Script Editor',
	 maximizable: true,
     closable: true,
     closeAction: 'hide',
     //animateTarget: this,
     width: 600,
     height: 350,
     layout: 'border',
     bodyStyle: 'padding: 5px;',
     bbar: [{
             xtype: 'tbfill'
         }, {
             xtype: 'button',
             text: 'Execute',
             name: 'vv',
             id: 'vv',
             tooltip: 'Execute this script immediately',
             handler: function () {
                 Ext.example.msg('Executing', 'Executing Scrathpad contents.');
                 eval(top["script1-inputEl"].value);
             }
         }, {
             xtype: 'button',
             text: 'Save',
             name: 'vvws',
             id: 'vvws',
             tooltip: 'Click here to save this script',
             handler: function () {
			     localStorage.setItem( 'script1', top["script1-inputEl"].value);
			     localStorage.setItem( 'script2', top["script2-inputEl"].value);
			     localStorage.setItem( 'script3', top["script3-inputEl"].value);
				 
                 Ext.example.msg('Warning', 'Function is not yet implemented');

             }
         }

     ],
     items: [{
             region: 'west',
             title: 'Help',
             width: 150,
             split: true,
             collapsible: true,
             html: "<div style='padding:6px'><a href='http://fe/reference/executeCommand'>Click here for a command syntax reference.</a></div>",
             floatable: true
         }, {
             region: 'center',
             xtype: 'tabpanel',
             items: [{
                     title: 'Scratchpad',
                     xtype: 'textarea',
					 emptyText:"Write your script here",
					 value:localStorage.getItem('script1'),
                     id: 'script1',
                     listeners: {
                         afterrender: function () {
                             var me = this;
                             me.el.swallowEvent(['keypress', 'keydown']);
                         }
                     }
                 }, {
                     title: 'onRefresh',
                     xtype: 'textarea',
                     id: 'script2',
                     listeners: {
                         afterrender: function () {
                             var me = this;
                             me.el.swallowEvent(['keypress', 'keydown']);
                         }
                     }
                 }, {
                     title: 'onOpen',
                     xtype: 'textarea',
                     id: 'script3',
                     listeners: {
                         afterrender: function () {
                             var me = this;
                             me.el.swallowEvent(['keypress', 'keydown']);
                         }
                     }
                 }


             ]
         }
     ]
 });	
			
 sc_win = Ext.create('widget.window', {
     x: 50,
     y: 50,
     title: 'Scripting Console',
     maximizable: true,
     closable: true,
     closeAction: 'hide',
     //animateTarget: this,
     width: 900,
     height: 500,
     layout: 'border',
     bodyStyle: 'padding: 5px;',
     items: [{
             region: 'west',
             title: 'Help',
             width: 200,
             split: true,
             collapsible: true,
             html: "<div style='padding:6px'>Make sure you know what you're doing .. Try typing <i>this.window.top.SocialCalc</i> in the lower box and see what happens.<br>We've abbreviated it to <i>_s</i> for you.<br><br> Also try the <i>execmd()</i> function..<br><br> <a href='http://fe/reference/executeCommand'>Click here for a command syntax reference.</a></div>",
             floatable: true
         }, {
             region: 'center',
             xtype: "component",
             autoEl: {
                 tag: "iframe",
                 src: "/js-repl/index.html"
             }
         }
     ]
 });
			
onRToggle = function() { ld_win.show();};

  function onGenToggle(item, pressed) {
  if (item.text == "Data Sources") { if (pressed) ld_win.show(); else ld_win.hide(); }
  if (item.text == "R integration") { if (pressed) r_win.show(); else r_win.hide(); }
  if (item.text == "Live Alerts") { refreshAlerts(); if (pressed) alerts_win.show(); else alerts_win.hide();  }
  if (item.text == "Console") { if (pressed) sc_win.show(); else sc_win.hide(); }
  if (item.text == "Scripts") { if (pressed) sce_win.show(); else sce_win.hide(); }
    }

	
	    tb.add("-",{
        text: 'Auto Recalc',
        enableToggle: true,
        toggleHandler: onRecalcToggle,
        pressed: false
    },"-", {
        icon: 'list-items.gif', // icons can also be specified inline
		text: 'Recalc Now',
        cls: 'x-btn-icon',
        tooltip: '<b>Click here to recalc immediately</b>',
        clickEvent: 'mousedown',
        handler: function(){
            Ext.example.msg('Recalculating...','Complex sheets may require more time.');
			spreadsheet.ExecuteCommand('recalc', '');
        }
    }, '-');
	
	    tb.add({
        text: "Data Sources",
		tooltip: 'Browse available live data series',
        enableToggle: true,
		id:"ldSHOW",
		toggleHandler: onGenToggle,
        pressed: false
    },"-");
	
	
		    tb.add({ 
        text: "R integration",
		        tooltip: 'Show specific R help',
        enableToggle: true,
		id:"rSHOW", 
		        toggleHandler: onGenToggle,
        pressed: false
    },"-"); 
	
	
		    tb.add({
        text: 'Live Alerts',
		        tooltip: 'Show live alerts window',
        enableToggle: true,
		id:"laSHOW",
		        toggleHandler: onGenToggle,
        pressed: false
    },"-");

		    tb.add({
        text: 'Scripts',
		        tooltip: 'Access the script editor',
        enableToggle: true,
		id:"sceSHOW",
		        toggleHandler: onGenToggle,
        pressed: false
    },"-"); 
	
			    tb.add({
        text: 'Console',
		        tooltip: 'Access the scripting console',
        enableToggle: true,
		id:"scSHOW",
		        toggleHandler: onGenToggle,
        pressed: false
    },"-"); 
	
    tb.resumeLayouts(true);
	
	
	////
	
	    var win,
        button = Ext.get('show-btn');
		//button = Ext.get('winSHOW-btnEl');

    button.on('click', function(){

        if (!win) {
            win = Ext.create('widget.window', {
                title: 'Layout Window',
                closable: true,
                closeAction: 'hide',
                //animateTarget: this,
                width: 600,
                height: 350,
                layout: 'border',
                bodyStyle: 'padding: 5px;',
                items: [{
                    region: 'west',
                    title: 'Navigation',
                    width: 200,
                    split: true,
                    collapsible: true,
                    floatable: false
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
                        title: 'RTGFX',
                        html: 'Hello world 1'
                    }, {
                        title: 'Symbol List',
                        html: 'Hello world 2'
                    }, {
                        title: 'Online Help',
                        html: 'Hello world 3',
                        closable: true
                    }, {
                        title: 'Support',
                        html: 'Hello world 4',
                        closable: true
                    }]
                }]
            });
        }
        button.dom.disabled = true;
        if (win.isVisible()) {
            win.hide(this, function() {
                button.dom.disabled = false;
            });
        } else {
            win.show(this, function() {
                button.dom.disabled = false;
            });
        }
    });

	
	///
	
}); // end of onready
