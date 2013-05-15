{
    "xtype": "window",
    "height": 222,
    "width": 400,
    "title": "New realtime chart",
    "modal": true,
    "items": [
        {
            "xtype": "form",
            "layout": {
                "type": "auto"
            },
            "bodyPadding": 10,
            "title": "Pick a name and color",
            "items": [
                {
                    "xtype": "textfield",
                    "minWidth": 300,
                    "width": 300,
                    "fieldLabel": "Name:",
                    "labelWidth": 64
                },
                {
                    "xtype": "colormenu",
                    "floating": false
                }
            ]
        }
    ],
    "dockedItems": [
        {
            "xtype": "toolbar",
            "dock": "bottom",
            "items": [
                {
                    "xtype": "button",
                    "text": "Create Chart"
                },
                {
                    "xtype": "button",
                    "text": "cancel"
                }
            ]
        }
    ]
}

